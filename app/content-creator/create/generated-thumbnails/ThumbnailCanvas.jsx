"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { contentCreatorActions } from "@/app/_redux/contentCreator/contentCreatorSlice";
import { globalContext } from "@/app/_context/store";
import { contentCreatorContext } from "@/app/_context/contentCreatorContext";
import "./thumbnailCanvas.css";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import CustomSelectInput from "@/app/_components/CustomSelectInput/CustomSelectInput";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import LogoAndTitle from "@/app/_components/LogoAndTitle/LogoAndTitle";
import { useRouter } from "next/navigation";
import ImageCard from "./ImageCard";

export default function ThumbnailCanvas() {
  const dispatch = useDispatch();
  const canvasEl = useRef(null);
  const fabricCanvasRef = useRef(null);
  const { authState } = useContext(globalContext);
  const {
    selectedContentType,
    selectedBrand,
    selectedContentTitle,
    generatedThumbnails,
    generateThumbnails,
    selectedContentThumbnail,
    setSelectedContentThumbnail,
    editContentData,
  } = useContext(contentCreatorContext);

  const finalArticle = useSelector(
    (state) => state.contentCreator.finalArticle
  );

  const router = useRouter();

  async function handleGenerateThumbnails() {
    setPageState((prev) => ({
      ...prev,
      generateThumbnailsLoading: true,
    }));
    await generateThumbnails();
    setPageState((prev) => ({
      ...prev,
      generateThumbnailsLoading: false,
    }));
  }

  useEffect(() => {
    // handleGenerateThumbnails();
  }, []);

  function pageStateSearchImgDataInit() {
    if (typeof window !== "undefined") {
      const searchImgDataValue = sessionStorage.getItem(
        "ThumbnailCanvasPageState"
      );
      return searchImgDataValue
        ? JSON.parse(searchImgDataValue).searchImgData
        : [];
    } else {
      return [];
    }
  }

  function pageStateSearchBgDataInit() {
    if (typeof window !== "undefined") {
      const searchBgDataValue = sessionStorage.getItem(
        "ThumbnailCanvasPageState"
      );
      return searchBgDataValue
        ? JSON.parse(searchBgDataValue).searchBgData
        : [];
    } else {
      return [];
    }
  }

  function pageStateInit() {
    return {
      generateThumbnailsLoading: false,
      thumbnailFontSize: 84,
      selectedBgPath: selectedBrand.includes("Street Politics")
        ? "/generated-thumbnails/sp/bg/bg-0.jpg"
        : "/generated-thumbnails/inv/bg/bg-0.jpg",
      selectedIconPath: "/generated-thumbnails/sp/icons/illustration-0.png",
      searchImgKeyword: "",
      searchBgKeyword: "",
      searchImgLoading: false,
      searchBgLoading: false,
      searchImgData: pageStateSearchImgDataInit(),
      searchBgData: pageStateSearchBgDataInit(),
      selectedImgsPath: [],
      removeBgLoading: false,
      isSendLoading: false,
      triggerSendContent: false,
      triggerSearchImg: false,
      triggerFilterImages: false,
      triggerFormatToHtml: false,
    };
  }

  const [pageState, setPageState] = useState(pageStateInit);

  useEffect(() => {
    sessionStorage.setItem(
      "ThumbnailCanvasPageState",
      JSON.stringify(pageState)
    );
  }, [pageState.searchImgData, pageState.searchBgData]);

  const getSelectedContentThumbnailValue = useCallback((value) => {
    setSelectedContentThumbnail(value);
    setPageState((prev) => ({
      ...prev,
      searchImgKeyword: value.replace(/[^a-zA-Z0-9\s]/g, ""),
      triggerSearchImg: true,
    }));
  }, []);

  useEffect(() => {
    if (pageState.triggerSearchImg && pageState.searchImgKeyword) {
      handleSearchImg();
    }
  }, [pageState.triggerSearchImg, pageState.searchImgKeyword]);

  const getThumbnailFontSizeValue = useCallback((value) => {
    setPageState((prev) => ({
      ...prev,
      thumbnailFontSize: Number(value),
    }));
  }, []);

  const [canvasState, setCanvasState] = useState(null);

  // ==============================================================
  const blockedUrls = JSON.parse(localStorage.getItem("blockedUrls")) || [];
  const isBlocked = (url) => blockedUrls.includes(url);

  const addToBlockedUrls = (url) => {
    if (!blockedUrls.includes(url)) {
      blockedUrls.push(url);
      setPageState((prev) => ({
        ...prev,
        // searchImgData: prev.searchImgData.filter((img) => img !== url),
        searchBgData: prev.searchBgData.filter((img) => img !== url),
      }));
      localStorage.setItem("blockedUrls", JSON.stringify(blockedUrls));
    }
  };

  // Function to handle image loading
  const loadImage = (url, onSuccess) => {
    fabric.Image.fromURL(
      url,
      function (img, error) {
        if (error) {
          toast.error(`Failed to load image from ${url}.`);
          addToBlockedUrls(url);
          return;
        }
        img.set({ crossOrigin: "anonymous" });
        onSuccess(img);
      },
      { crossOrigin: "anonymous" }
    );
  };

  function splitSentenceIntoWords() {
    if (selectedContentThumbnail) {
      return selectedContentThumbnail.split(" ");
    } else {
      return [];
    }
  }
  // Get the words from the sentence
  const words = splitSentenceIntoWords();
  // ==============================================================

  useEffect(() => {
    if (!canvasEl.current) {
      toast.error("Canvas not found!");
      return;
    }

    const canvas = new fabric.Canvas(canvasEl.current);
    fabricCanvasRef.current = canvas;

    canvas.renderAll();
    setCanvasState(canvas);

    // Cleanup
    return () => {
      canvas.dispose();
      setCanvasState(null);
      fabricCanvasRef.current = null;
    };
  }, []);

  function loadBackgroundImage() {
    const objects = canvasState.getObjects();
    console.log("objects", objects);
    // ===== Load background image =====
    if (!isBlocked(pageState.selectedBgPath)) {
      loadImage(pageState.selectedBgPath, (img) => {
        // Set the image to fit the canvas dimensions
        img.set({
          scaleX: 1280 / img.width,
          scaleY: 720 / img.height,
          left: 0, // Position the image at the left edge
          top: 0, // Position the image at the top edge
          isBackground: true,
        });

        canvasState.setBackgroundImage(
          img,
          canvasState.renderAll.bind(canvasState)
        );
      });
    }
  }

  useEffect(() => {
    if (canvasState) {
      loadBackgroundImage();
    }
  }, [canvasState, pageState.selectedBgPath]);

  function loadOverlayImage() {
    const objects = canvasState.getObjects();
    console.log("objects", objects);
    // ===== Add overlay image =====
    if (selectedBrand.includes("Street Politics")) {
      fabric.Image.fromURL(
        "/generated-thumbnails/sp/blackOverlay.png",
        function (img, error) {
          if (error) {
            toast.error("Failed to load overlay image.");
            return;
          }

          img.set({
            crossOrigin: "anonymous", // Set crossOrigin attribute
            left: -1,
            top: 0,
            selectable: false, // Make the image non-selectable (non-movable, non-resizable)
            evented: false, // Disable interaction events (prevents drag, resize)
            lockMovementX: true, // Prevent horizontal movement
            lockMovementY: true, // Prevent vertical movement
            lockScalingX: true, // Prevent horizontal scaling
            lockScalingY: true, // Prevent vertical scaling
            lockRotation: true, // Prevent rotation
          });

          canvasState.add(img);
          // Send the image to the back
          img.sendToBack();
        },
        { crossOrigin: "anonymous" }
      );
    }
  }

  useEffect(() => {
    if (canvasState && selectedBrand.includes("Street Politics")) {
      loadOverlayImage();
    }
  }, [canvasState, selectedBrand]);

  function loadIconImages() {
    // Remove existing icons before adding a new one
    const objects = canvasState.getObjects();
    console.log("objects", objects);
    objects.forEach((obj) => {
      if (obj.isIcon) {
        canvasState.remove(obj);
      }
    });

    // ===== Add icon image =====
    if (selectedBrand.includes("Street Politics")) {
      fabric.Image.fromURL(
        pageState.selectedIconPath,
        function (img, error) {
          if (error) {
            toast.error("Failed to load overlay image.");
            return;
          }
          img.set({
            crossOrigin: "anonymous", // Set crossOrigin attribute
            left: 75,
            top: 75,
            isIcon: true, // Mark this object as an icon
          });

          canvasState.add(img);
        },
        { crossOrigin: "anonymous" }
      );
    }
  }

  useEffect(() => {
    if (canvasState) {
      loadIconImages();
    }
  }, [canvasState, pageState.selectedIconPath]);

  function loadImages() {
    // Remove existing images before adding a new one
    const objects = canvasState.getObjects();
    console.log("objects", objects);
    objects.forEach((obj) => {
      if (obj.isImage) {
        canvasState.remove(obj);
      }
    });

    // Load images
    pageState.selectedImgsPath.forEach((img, index) => {
      if (!isBlocked(img)) {
        loadImage(img, (img) => {
          img.scaleToWidth(500); // Optional: scale the image if needed
          img.left =
            canvasState.width - img.width * img.scaleX - 40 * (index + 1); // Position on the right edge
          img.top =
            canvasState.height - img.height * img.scaleY - 40 * (index + 1); // Position on the bottom edge
          img.isImage = true;
          canvasState.add(img);
        });
      }
    });
  }

  useEffect(() => {
    if (canvasState) {
      loadImages();
    }
  }, [canvasState, pageState.selectedImgsPath]);

  function loadText() {
    // Remove existing text before adding a new one
    const objects = canvasState.getObjects();
    console.log("objects", objects);
    objects.forEach((obj) => {
      if (obj.isText) {
        canvasState.remove(obj);
      }
    });

    // ===== Add text =====
    if (selectedBrand.includes("Street Politics")) {
      // Set the starting position (bottom-left corner)
      let left = 40;
      let top = canvasState.height - (pageState.thumbnailFontSize + 40); // Start near the bottom of the canvas

      // Add each word as a separate text object
      for (let i = words.length - 1; i >= 0; i--) {
        const text = new fabric.Text(words[i], {
          left: left,
          top: top,
          fontSize: pageState.thumbnailFontSize,
          fill: i === 0 ? "red" : "#ffffff",
          fontFamily: "Hellix-Black",
          fontWeight: "600",
          stroke: "black", // Set the stroke color to black
          strokeWidth: 3, // Set the stroke width to 3px
          shadow: {
            color: "rgba(0, 0, 0, 0.5)", // Shadow color with opacity
            blur: 5, // Blur level of the shadow
            offsetX: 3, // Horizontal shadow offset
            offsetY: 3, // Vertical shadow offset
          },
          isText: true,
        });

        canvasState.add(text);
        text.bringToFront();
        top -= text.height * 0.7; // Move the next word up by the height of the text
      }
    } else {
      // Set the starting position (bottom-left corner)
      let left = 40;
      let top = canvasState.height - (pageState.thumbnailFontSize + 40); // Start near the bottom of the canvas

      // Add each word as a separate text object
      for (let i = words.length - 1; i >= 0; i--) {
        const text = new fabric.Text(words[i].toUpperCase(), {
          left: left,
          top: top,
          fontSize: pageState.thumbnailFontSize,
          fill: i === words.length - 1 ? "#C0FE15" : "#ffffff",
          fontFamily: "Acumin Pro Bold Italic",
          // fontWeight: "800",
          // fontStyle: "italic",
          textBackgroundColor: "#1E2329",
          isText: true,
        });

        canvasState.add(text);
        text.bringToFront();
        top -= text.height * 1.05; // Move the next word up by the height of the text
      }
    }
  }

  useEffect(() => {
    function bringAllTextToFront() {
      const objects = canvasState.getObjects();
      objects.forEach((obj) => {
        if (obj.isText) {
          obj.bringToFront();
        }
      });
    }

    if (canvasState) {
      // Add the listener after the canvas is rendered
      canvasState.on("after:render", bringAllTextToFront);

      // Initial text load
      loadText();

      // Clean up the event listener on unmount
      return () => {
        canvasState.off("after:render", bringAllTextToFront);
      };
    }
  }, [canvasState, selectedContentThumbnail, pageState.thumbnailFontSize]);

  const handleDownload = () => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      const dataURL = canvas.toDataURL({ format: "png" });
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "thumbnail.png";
      link.click();
    }
  };

  async function handleSearchImg() {
    if (!pageState.searchImgKeyword) {
      toast.error("Please provide a keyword to search for an image!");
      return;
    }
    try {
      setPageState((prev) => ({
        ...prev,
        searchImgLoading: true,
        triggerSearchImg: false,
      }));
      const res = await fetch(
        `https://api.machinegenius.io/content-creation/get-images`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `barrer ${
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : authState.token
            }`,
          },
          body: JSON.stringify({
            searchImgKeyword: pageState.searchImgKeyword,
            api_key: process.env.NEXT_PUBLIC_SERPAPI_API_KEY,
          }),
        }
      );
      const json = await res.json();
      if (!json) {
        toast.error("Something went wrong!");
        return;
      } else if (json && json.success === false) {
        toast.error("Something went wrong!");
        return;
      } else if (json && json.success === true && json.images) {
        setPageState((prev) => ({
          ...prev,
          searchImgData: json.images.map((img) => img.original),
        }));
      } else {
        toast.error("Something went wrong!");
        return;
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error generateThumbnails:", error);
    } finally {
      setPageState((prev) => ({
        ...prev,
        searchImgLoading: false,
      }));
    }
  }

  async function handleRemoveBg(img) {
    try {
      setPageState((prev) => ({
        ...prev,
        removeBgLoading: true,
      }));
      const res = await fetch(`https://api.remove.bg/v1.0/removebg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.NEXT_PUBLIC_REMOVEBG_API_KEY,
        },
        body: JSON.stringify({
          image_url: img,
          size: "auto",
        }),
      });

      if (!res.ok) {
        toast.error("Something went wrong!");
        console.error("Error handleRemoveBg:", error);
        return;
      }

      // Convert the response to a Blob
      const blob = await res.blob();
      // Create a URL for the Blob
      const imageUrl = URL.createObjectURL(blob);
      // Use the imageUrl in your application
      return imageUrl; // You can set this as the src of an img tag
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error handleRemoveBg:", error);
    } finally {
      setPageState((prev) => ({
        ...prev,
        removeBgLoading: false,
      }));
    }
  }

  async function handleSelectImg(img) {
    const removedBgImg = await handleRemoveBg(img);

    setPageState((prev) => ({
      ...prev,
      selectedImgsPath: [...(prev.selectedImgsPath || []), removedBgImg || img],
    }));
  }

  // ============= Start Format Content =================
  function handleSelectThumbnail() {
    if (selectedContentThumbnail) {
      setPageState((prev) => ({
        ...prev,
        triggerFormatToHtml: true,
      }));
    } else {
      toast.error("Please select a thumbnail!");
    }
    // todo: delete this condition after backend add Movie Myth brand
    if (selectedBrand === "Movie Myth") {
      setPageState((prev) => ({
        ...prev,
        triggerSendContent: true,
      }));
    }
  }

  async function formatToHtml() {
    try {
      setPageState((prev) => ({
        ...prev,
        isLoadingFormatToHtml: true,
      }));
      const res = await fetch(
        `https://api.machinegenius.io/content-creation/format-to-html`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `barrer ${
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : authState.token
            }`,
          },
          body: JSON.stringify({
            contentBody: finalArticle?.articles[0]?.content,
          }),
        }
      );

      const json = await res.json();

      if (!json) {
        toast.error("Something went wrong!");
        return finalArticle?.articles[0]?.content || "";
      } else if (json && json.success === false) {
        toast.error("Something went wrong!");
        return finalArticle?.articles[0]?.content || "";
      } else if (json && json.success === true && json?.articles[0]?.content) {
        const data = json?.articles[0]?.content
          .replace(/\n/g, "")
          .replace(/\bhtml\b/gi, "")
          .replace(/[`]/g, "");
        const updatedArticle = {
          ...finalArticle,
          articles: [
            {
              ...finalArticle.articles[0],
              content: data,
            },
          ],
        };

        dispatch(contentCreatorActions.setFinalArticle(updatedArticle));
      } else {
        toast.error("Something went wrong!");
        return finalArticle?.articles[0]?.content || "";
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Error formatToHtml:", error);
      return finalArticle?.articles[0]?.content || "";
    } finally {
      setPageState((prev) => ({
        ...prev,
        isLoadingFormatToHtml: false,
        triggerSendContent: true,
      }));
    }
  }

  useEffect(() => {
    if (pageState.triggerFormatToHtml) {
      formatToHtml();
    }
  }, [pageState.triggerFormatToHtml]);

  // ============= End Format Content ==================

  // ============= Start Send Content =================
  useEffect(() => {
    if (pageState.triggerSendContent) {
      handleSendContent();
    }
  }, [pageState.triggerSendContent]);

  function generateData() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }

  async function handleSendContent() {
    let endpoint = editContentData
      ? `https://api.machinegenius.io/content-creation/content/${editContentData._id}`
      : "https://api.machinegenius.io/content-creation/content";
    let method = editContentData ? "PATCH" : "POST";
    setPageState((prev) => ({
      ...prev,
      isSendLoading: true,
    }));
    let postBody = {
      content_title: selectedContentTitle,
      content: finalArticle?.articles[0]?.content,
      brand: selectedBrand,
      content_type: selectedContentType,
      ...(method === "POST" && { date: generateData() }),
    };

    const maxRetries = 1; // Define the maximum number of retries
    let attempts = 0;
    let json = null;

    while (attempts < maxRetries) {
      try {
        const res = await fetch(endpoint, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `barrer ${
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : authState.token
            }`,
          },
          body: JSON.stringify(postBody),
        });
        json = await res.json();
        if (json) {
          // If valid data is found, break the loop
          break;
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.error("Error handleSendContent:", error);
      } finally {
        attempts++;
      }
    }

    if (json) {
      // toast.success("Content sent successfully");
      if (selectedBrand === "Movie Myth") {
        router.replace("/content-creator/create/movie-myth/article-ready");
      } else {
        router.replace("/content-creator/create/schedule-script");
      }
    } else {
      // setIsRetry(true);
      // window.alert("Failed to generate content after multiple attempts");
      // router.push("/content-creator/create/choose-brand");
    }
  }
  // ============= End Send Content ==================

  // ==============================================
  function handleSearchBgError() {
    toast.error("Something went wrong!");
    setPageState((prev) => ({
      ...prev,
      searchBgLoading: false,
    }));
  }

  async function handleSearchBg() {
    if (!pageState.searchBgKeyword) {
      toast.error("Please provide a keyword to search for an image!");
      return;
    }
    try {
      setPageState((prev) => ({
        ...prev,
        searchBgLoading: true,
      }));
      const res = await fetch(
        `https://api.machinegenius.io/content-creation/get-images`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `barrer ${
              typeof window !== "undefined"
                ? localStorage.getItem("token")
                : authState.token
            }`,
          },
          body: JSON.stringify({
            searchImgKeyword: pageState.searchBgKeyword,
            api_key: process.env.NEXT_PUBLIC_SERPAPI_API_KEY,
          }),
        }
      );
      const json = await res.json();
      if (!json) {
        handleSearchBgError();
        return;
      } else if (json && json.success === false) {
        handleSearchBgError();
        return;
      } else if (json && json.success === true && json.images) {
        setPageState((prev) => ({
          ...prev,
          searchBgData: json.images.map((img) => img.original),
          triggerFilterImages: true,
        }));
      } else {
        handleSearchBgError();
        return;
      }
    } catch (error) {
      handleSearchBgError();
      console.error("Error generateThumbnails:", error);
    }
  }

  async function testImageUrl(url) {
    // toast("Testing image url...");
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;

      img.onload = () => {
        // Create a canvas to attempt to draw the image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0);

        try {
          // Attempt to read pixel data from the canvas
          ctx.getImageData(0, 0, 1, 1);
          resolve(url); // Image loaded and CORS is okay
        } catch (e) {
          reject("CORS issue or image data blocked: " + url);
        }
      };

      img.onerror = () => reject("Image load error: " + url);
    });
  }

  async function handleFilterImages() {
    const urlsToCheck = pageState.searchBgData;
    if (!urlsToCheck.length) {
      toast.error("No images to check!");
      return;
    }
    const validUrls = [];
    const blocked = [];

    for (const url of urlsToCheck) {
      try {
        await testImageUrl(url);
        validUrls.push(url);
      } catch {
        blocked.push(url);
      }
    }

    // Update with blocked URLs
    const blockedUrls = JSON.parse(localStorage.getItem("blockedUrls")) || [];
    const newBlockedUrls = [...new Set([...blockedUrls, ...blocked])];
    localStorage.setItem("blockedUrls", JSON.stringify(newBlockedUrls));

    // Update with valid URLs
    setPageState((prev) => ({
      ...prev,
      searchBgLoading: false,
      searchBgData: validUrls,
    }));
  }

  useEffect(() => {
    if (pageState.triggerFilterImages) {
      handleFilterImages();
    }
  }, [pageState.triggerFilterImages]);
  // =============================================

  const [selectedLayerIndex, setSelectedLayerIndex] = useState(null);

useEffect(() => {
  if (canvasState) {
    // Handler for object selection
    const handleObjectSelected = (event) => {
      const selectedObject = event.target; // Get the selected object
      if (selectedObject) {
        const objects = canvasState.getObjects();
        const index = objects.indexOf(selectedObject); // Get the index of the selected object
        setSelectedLayerIndex(index); // Update the selected layer index
      }
    };

    // Add event listeners for object selection
    canvasState.on('selection:created', handleObjectSelected);
    canvasState.on('selection:updated', handleObjectSelected);

    // Clear selection when objects are deselected
    canvasState.on('selection:cleared', () => {
      setSelectedLayerIndex(null); // Reset selected layer index when selection is cleared
    });

    // Cleanup event listeners on component unmount
    return () => {
      canvasState.off('selection:created', handleObjectSelected);
      canvasState.off('selection:updated', handleObjectSelected);
      canvasState.off('selection:cleared', () => setSelectedLayerIndex(null));
    };
  }
}, [canvasState]);

  function moveLayerUp(index) {
    const object = canvasState.getObjects()[index];
    if (object) {
      canvasState.bringForward(object); // Move the object one level up
      canvasState.renderAll();
    }
  }

  function moveLayerDown(index) {
    const object = canvasState.getObjects()[index];
    if (object) {
      canvasState.sendBackwards(object); // Move the object one level down
      canvasState.renderAll();
    }
  }

  function deleteLayer(index) {
    const object = canvasState.getObjects()[index];
    if (object) {
      canvasState.remove(object); // Remove the object from the canvas
      canvasState.renderAll();
    }
  }

  // ==========================

  return (
    <main className="relative">
      {pageState.generateThumbnailsLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-[999999999] bg-white flex flex-col justify-center items-center min-w-[24rem] gap-[2vw] py-[1.5vw] ">
          <LogoAndTitle needTxt={false} title="Generating Thumbnails..." />
        </div>
      )}

      {pageState.isSendLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-[999999999] bg-white flex flex-col justify-center items-center min-w-[24rem] gap-[2vw] py-[1.5vw]">
          <LogoAndTitle needTxt={false} title="Sending Content..." />
        </div>
      )}

      {pageState.searchImgLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-[999999999] bg-white flex flex-col gap-8 justify-center items-center min-w-[24rem] mx-auto py-[1.5vw]">
          <LogoAndTitle
            needTxt={true}
            textNeeded="Hold on tight."
            title={"Genius is searching for images..."}
          />
        </div>
      )}

      {pageState.searchBgLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-[999999999] bg-white flex flex-col gap-8 justify-center items-center min-w-[24rem] mx-auto py-[1.5vw]">
          <LogoAndTitle
            needTxt={true}
            textNeeded="Hold on tight."
            title={
              !pageState.triggerFilterImages
                ? "Genius is searching for backgrounds..."
                : "Genius is filtering backgrounds..."
            }
          />
        </div>
      )}

      {pageState.removeBgLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-[999999999] bg-white flex flex-col gap-8 justify-center items-center min-w-[24rem] mx-auto py-[1.5vw]">
          <LogoAndTitle
            needTxt={true}
            textNeeded="Hold on tight."
            title={"Genius is removing image background..."}
          />
        </div>
      )}

      {pageState.isLoadingFormatToHtml && (
        <div className="fixed top-0 left-0 w-full h-full z-[999999999] bg-white flex flex-col justify-center items-center min-w-[24rem] gap-[--sy-15px] py-[1.5vw]">
          <LogoAndTitle
            needTxt={false}
            title="Genius is formatting your content..."
          />
        </div>
      )}

      <section
        className={`${
          (pageState.generateThumbnailsLoading ||
            pageState.isSendLoading ||
            pageState.searchImgLoading ||
            pageState.searchBgLoading ||
            pageState.removeBgLoading ||
            pageState.isLoadingFormatToHtml) &&
          "!hidden"
        }`}
      >
        <div className="thumbnailCanvas">
          <div className="thumbnailCanvas_actionsBar max-h-[720px] overflow-y-auto pr-[--10px]">
            {/* 01 Select Thumbnail */}
            <div className="flex flex-col gap-[--5px] w-full">
              <div className="flex justify-between items-center pt-[--10px]">
                <h3 className="font-bold text-[--17px]">Select Thumbnail</h3>

                <div className="w-1/2">
                  <CustomSelectInput
                    label={"Font Size"}
                    options={Array.from({ length: 71 }, (_, i) => i + 60)}
                    getValue={getThumbnailFontSizeValue}
                  />
                </div>
              </div>

              <CustomSelectInput
                label={"Select Thumbnail"}
                options={
                  generatedThumbnails && generatedThumbnails?.length > 0
                    ? generatedThumbnails?.map((e) => e.Thumbnail)
                    : ["No Thumbnails Found"]
                }
                getValue={getSelectedContentThumbnailValue}
              />

              <input
                className="flex-1 border-[--1px] border-[--gray-300] rounded-[--5px] p-[--5px]"
                type="text"
                name="thumbnail-title"
                id="thumbnail-title"
                placeholder="Edit thumbnail title ..."
                value={selectedContentThumbnail}
                onChange={(e) => setSelectedContentThumbnail(e.target.value)}
              />
            </div>

            {/* 02 Select Background */}
            <div className="flex flex-col gap-[--5px] w-full">
              {/* 02-01 Select Background */}
              <h3 className="font-bold text-[--17px]">Select Background</h3>

              {/* 02-02 Search Background */}
              <div className="flex gap-[--10px]">
                <input
                  className="flex-1 border-[--1px] border-[--gray-300] rounded-[--5px] p-[--5px]"
                  type="text"
                  name="bg-search"
                  id="bg-search"
                  placeholder="Search for a background ..."
                  value={pageState.searchBgKeyword}
                  onChange={(e) =>
                    setPageState((prev) => ({
                      ...prev,
                      searchBgKeyword: e.target.value,
                    }))
                  }
                />
                <button
                  onClick={() => {
                    console.log(`searchBgKeyword`, pageState.searchBgKeyword);
                    handleSearchBg();
                  }}
                >
                  Search
                </button>
              </div>

              {/* 02-03 Preview Backgrounds */}
              <div className="flex gap-[--50px-1] overflow-x-auto p-[--5px]">
                {selectedBrand === "Investorcracy" &&
                  Array.from({ length: 10 }, (_, i) => (
                    <div className="!w-1/2" key={uuidv4()}>
                      <ImageCard
                        inputType="radio"
                        inputName="select-bg"
                        imgSrc={`/generated-thumbnails/inv/bg/bg-${i}.jpg`}
                        checked={
                          pageState.selectedBgPath ===
                          `/generated-thumbnails/inv/bg/bg-${i}.jpg`
                        }
                        onChange={(e) => {
                          // console.log(`e.target.value`, e.target.value);
                          setPageState((prev) => ({
                            ...prev,
                            selectedBgPath: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  ))}

                {selectedBrand.includes("Street Politics") && (
                  <div className="!w-1/2">
                    <ImageCard
                      inputType="radio"
                      inputName="select-bg"
                      imgSrc={`/generated-thumbnails/sp/bg/bg-0.jpg`}
                      checked={
                        pageState.selectedBgPath ===
                        `/generated-thumbnails/sp/bg/bg-0.jpg`
                      }
                      onChange={(e) => {
                        // console.log(`e.target.value`, e.target.value);
                        setPageState((prev) => ({
                          ...prev,
                          selectedBgPath: e.target.value,
                        }));
                      }}
                    />
                  </div>
                )}

                {!pageState.searchBgData.length ? (
                  <div className="!w-1/2">
                    <ImageCard
                      imgSrc="/generated-thumbnails/img-placeholder.jpg"
                      inputType="radio"
                      inputName={"select-bg"}
                      disabled
                    />
                  </div>
                ) : (
                  Array.isArray(pageState.searchBgData) &&
                  pageState.searchBgData.length &&
                  pageState.searchBgData.map((img) => (
                    <div className="!w-1/2" key={uuidv4()}>
                      <ImageCard
                        imgSrc={img}
                        inputType="radio"
                        inputName={"select-bg"}
                        checked={pageState.selectedBgPath === img}
                        onChange={(e) => {
                          // console.log(`e.target.value`, e.target.value);
                          setPageState((prev) => ({
                            ...prev,
                            selectedBgPath: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 03 Select Icon */}
            {selectedBrand.includes("Street Politics") && (
              <div className="flex flex-col gap-[--5px] w-full">
                <h3 className="font-bold text-[--17px]">Select Icon</h3>

                <div className="flex gap-[--50px-1] overflow-x-auto p-[--5px]">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div className="!w-1/2" key={uuidv4()}>
                      <ImageCard
                        inputType="radio"
                        inputName="select-icon"
                        imgSrc={`/generated-thumbnails/sp/icons/illustration-${i}.png`}
                        checked={
                          pageState.selectedIconPath ===
                          `/generated-thumbnails/sp/icons/illustration-${i}.png`
                        }
                        onChange={(e) => {
                          setPageState((prev) => ({
                            ...prev,
                            selectedIconPath: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 04 Select Image */}
            <div className="flex flex-col gap-[--5px] w-full">
              {/* 03-01 Select Image */}
              {/* <div className="flex justify-between items-center"> */}
              <h3 className="font-bold text-[--17px]">Select Image</h3>
              {/* </div> */}

              {/* 03-02 Search Image */}
              <div className="flex gap-[--10px]">
                <input
                  className="flex-1 border-[--1px] border-[--gray-300] rounded-[--5px] p-[--5px]"
                  type="text"
                  name="img-search"
                  id="img-search"
                  placeholder="Search for an image ..."
                  value={pageState.searchImgKeyword}
                  onChange={(e) =>
                    setPageState((prev) => ({
                      ...prev,
                      searchImgKeyword: e.target.value,
                    }))
                  }
                />
                <button
                  onClick={() => {
                    console.log(`searchImgKeyword`, pageState.searchImgKeyword);
                    handleSearchImg();
                  }}
                >
                  Search
                </button>
              </div>

              {/* 03-03 Preview Images */}
              <div className="flex gap-[--25px] overflow-x-auto p-[--5px] w-full">
                {!pageState.searchImgData.length ? (
                  <ImageCard
                    imgSrc="/generated-thumbnails/img-placeholder.jpg"
                    inputType={"checkbox"}
                    inputName={"select-img"}
                    disabled
                  />
                ) : (
                  pageState.searchImgData.map((img) => (
                    <img
                      key={uuidv4()}
                      loading="lazy"
                      src={img}
                      alt="searchImg"
                      className="w-[50%] h-auto aspect-square object-cover hover:opacity-80 hover:outline hover:outline-3 hover:outline-black transition-none cursor-pointer"
                      onClick={() => handleSelectImg(img)}
                    />
                  ))
                )}
              </div>
            </div>

            {/* 05 Control Layers */}
            <div className="flex flex-col gap-[--5px] w-full">
              {/* 05-01 Header */}
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[--17px]">Layers</h3>
                <div className="flex gap-[--10px]">
                  <span>up</span>
                  <span>down</span>
                </div>
              </div>

              {/* 05-02 Layers */}

              <div className="flex flex-col gap-[--5px]">
                <div className="flex justify-between items-center">
                  <span>01</span> <span>delete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>02</span> <span>delete</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>03</span> <span>delete</span>
                </div>
              </div>
            </div>

            {/* ========================== */}
            <div className="flex flex-col gap-[--5px] w-full">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[--17px]">Layers</h3>
                <div className="flex gap-[--10px]">
                  <span onClick={() => moveLayerUp(selectedLayerIndex)}>
                    up
                  </span>
                  <span onClick={() => moveLayerDown(selectedLayerIndex)}>
                    down
                  </span>
                </div>
              </div>

              {/* Layers */}
              <div className="flex flex-col gap-[--5px]">
                {canvasState?.getObjects()?.map((obj, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center ${
                      index === selectedLayerIndex ? "bg-gray-300" : ""
                    }`} // Highlight selected layer
                  >
                    <span>{index + 1}</span>
                    <div className="flex gap-[--10px]">
                      <span onClick={() => moveLayerUp(index)}>up</span>
                      <span onClick={() => moveLayerDown(index)}>down</span>
                      <span onClick={() => deleteLayer(index)}>delete</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ========================== */}
          </div>

          <div className="canvas-container relative">
            <canvas id="c" width="1280" height="720" ref={canvasEl}></canvas>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[--sy-20px]">
          <CustomBtn
            word={"Back"}
            btnColor="white"
            href={"/content-creator/create/generated-titles"}
          />
          <button onClick={handleDownload} id="downloadBtn">
            Download Thumbnail
          </button>
          <CustomBtn
            word={"Send"}
            btnColor="black"
            onClick={() => {
              handleSelectThumbnail();
            }}
          />
        </div>
      </section>
    </main>
  );
}
