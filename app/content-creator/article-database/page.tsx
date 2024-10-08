"use client";
import CustomSelectInput from "@/app/_components/CustomSelectInput/CustomSelectInput";
import styles from "./article-database.module.css";
// import { ArticleNames, Brands, ContentTypeFilter } from "@/app/_data/data";
import { useEffect, useState, useContext, useRef } from "react";
import toast from "react-hot-toast";
import { globalContext } from "@/app/_context/store";
import { contentCreatorContext } from "@/app/_context/contentCreatorContext";
import { useRouter } from "next/navigation";

const ContentDatabase = () => {
  const router = useRouter();
  const { authState, handleSignOut } = useContext(globalContext);
  const [contentDatabase, setContentDatabase] = useState<any>([]);
  const [filteredContentDatabase, setFilteredContentDatabase] = useState<any>(
    []
  );
  const editBtnClicked = useRef(false);
  const { editContentData, setEditContentData } = useContext(
    contentCreatorContext
  );

  const [filterBy, setFilterBy] = useState({
    brand: "",
    contentType: "",
    date: "",
  });

  async function getContentDatabase() {
    const maxRetries = 1; // Define the maximum number of retries
    let attempts = 0;
    let json = null;

    while (attempts < maxRetries) {
      try {
        const res = await fetch(
          `https://api.machinegenius.io/content-creation/content`,
          {
            headers: {
              Authorization: `barrer ${
                typeof window !== "undefined"
                  ? localStorage.getItem("token")
                  : authState.token
              }`,
            },
          }
        );
        if (res.status === 401) {
          handleSignOut();
        }
        json = await res.json();
        if (json && json.content) {
          // If valid data is found, break the loop
          break;
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.error("Error getContentDatabase:", error);
      } finally {
        attempts++;
      }
    }

    if (json && json.content) {
      setContentDatabase(json.content);
    } else {
      // setIsRetry(true);
      // window.alert("Failed to generate content after multiple attempts");
      // router.replace("/content-creator/dashboard");
    }
  }

  useEffect(() => {
    const reversedContentDatabase =
      Array.isArray(contentDatabase) && contentDatabase.length > 0
        ? [...contentDatabase].reverse()
        : [];

    const filteredData = reversedContentDatabase.filter((item: any) => {
      const matchesBrand = filterBy.brand
        ? item.brand === filterBy.brand
        : true;
      const matchesContentType = filterBy.contentType
        ? item.content_type === filterBy.contentType
        : true;
      const matchesDate = filterBy.date
        ? formatDate(item.date) === formatDate(filterBy.date)
        : true;

      return matchesBrand && matchesContentType && matchesDate;
    });

    setFilteredContentDatabase(filteredData.length > 0 ? filteredData : []);
  }, [filterBy, contentDatabase]);

  useEffect(() => {
    setEditContentData(null);
    sessionStorage.removeItem("editContentData");
    editBtnClicked.current = false;
    getContentDatabase();
  }, []);

  function formatDate(dateString: string) {
    return dateString.split("T")[0];
  }

  const renderYourArticles = filteredContentDatabase.map(
    (oneArticle: any, idx: any) => (
      <ul
        key={idx}
        className={`${styles.tableBody} borderBottom articleRow `}
        // onClick={(e)=>{handleSelectedBg(e)}}
      >
        <li className="w-[5%]">{idx + 1}</li>
        <li className="w-[55%]">{oneArticle?.content_title}</li>
        <li className="w-[15%]">
          <span
            className={
              oneArticle?.brand === "Street Politics Canada"
                ? "bg-[#31B2E9B2]"
                : oneArticle?.brand === "Street Politics USA"
                ? "bg-[#E9313EB2]"
                : oneArticle?.brand === "Movie Myth"
                ? "bg-[#E1C655B2]"
                : oneArticle?.brand === "Investorcracy"
                ? "bg-[#5FA85BB5]"
                : "bg-[#F36F24B2]"
            }
          >
            {oneArticle?.brand}
          </span>
        </li>
        <li className={`w-[10%]  ${styles.contentType}`}>
          {oneArticle?.content_type}
        </li>
        <li className="w-[10%]">
          {oneArticle?.date ? formatDate(oneArticle?.date) : "-"}
        </li>
        <li className={` w-[5%] ${styles.edit}`}>
          <button
            onClick={() => {
              setEditContentData(oneArticle);
              editBtnClicked.current = true;
            }}
          >
            Edit
          </button>
        </li>
      </ul>
    )
  );

  function handleNavigateToEditPage() {
    if (editContentData) {
      editContentData.brand === "Movie Myth"
        ? router.replace("/content-creator/create/movie-myth/final-movie")
        : router.replace("/content-creator/create/final-article");
    }
  }

  useEffect(() => {
    if (editBtnClicked.current) {
      editBtnClicked.current = false;
      handleNavigateToEditPage();
      return;
    }
  }, [editBtnClicked.current]);

  return (
    <div className={`${styles.articleDatabase} w-full h-full pt-[0.5vw]`}>
      {/* filters options to filter and edit data in table */}
      <div className={`flex flex-col gap-[0.7vw] w-full pageHeader`}>
        <h3>Filter By:</h3>
        <div className={`${styles.filters} flex gap-[1vw]`}>
          <div className="flex flex-col w-2/12 gap-[0.3vw]">
            <h5>Brand</h5>
            <CustomSelectInput
              options={[
                "All",
                ...(Array.isArray(contentDatabase) && contentDatabase.length > 0
                  ? contentDatabase
                      .map((item: any) => item.brand)
                      .filter(
                        (item: any, index: any, self: any) =>
                          self.indexOf(item) === index
                      )
                  : []),
              ]}
              getValue={(value: string) =>
                setFilterBy({
                  ...filterBy,
                  brand: value === "All" ? "" : value,
                })
              }
            />
          </div>

          <div className="flex flex-col w-2/12 gap-[0.3vw]">
            <h5>Content Type</h5>
            <CustomSelectInput
              options={[
                "All",
                ...(Array.isArray(contentDatabase) && contentDatabase.length > 0
                  ? contentDatabase
                      .map((item: any) => item.content_type)
                      .filter(
                        (item: any, index: any, self: any) =>
                          self.indexOf(item) === index
                      )
                  : []),
              ]}
              getValue={(value: string) =>
                setFilterBy({
                  ...filterBy,
                  contentType: value === "All" ? "" : value,
                })
              }
            />
          </div>

          <div className="flex flex-col w-2/12 gap-[0.3vw]">
            <h5>Date</h5>
            <CustomSelectInput
              options={[
                "All",
                ...(Array.isArray(contentDatabase) && contentDatabase.length > 0
                  ? contentDatabase
                      .map((item: any) => formatDate(item.date))
                      .filter(
                        (item: any, index: any, self: any) =>
                          self.indexOf(item) === index
                      )
                      .reverse()
                  : []),
              ]}
              getValue={(value: string) =>
                setFilterBy({
                  ...filterBy,
                  date: value === "All" ? "" : value,
                })
              }
            />
          </div>
        </div>
      </div>

      {/* // table has all articles and its data  */}
      <div className={`${styles.box} w-full px-[0.5vw] `}>
        <div className={`${styles.tableContent}`}>
          <ul
            className={`${styles.tableHeader} flex justify-center items-center py-[2vh]`}
          >
            <li className="w-[5%]">#</li>
            <li className="w-[55%] ">Content Title</li>
            <li className="w-[15%] ">Brand</li>
            <li className="w-[10%] ">Content Type</li>
            <li className="w-[10%] ">Date</li>
            <li className="w-[5%]">Edit</li>
          </ul>

          <div className={styles.tableBodyWrapper}>{renderYourArticles}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentDatabase;
