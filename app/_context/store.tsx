"use client";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const initialContextState = {
  // ===== 00. Start Authentication =====
  token: null as any,
  setToken: (token: any) => {},
  decodedToken: null as any,
  setDecodedToken: (token: any) => {},
  // ===== 00. End Authentication =====

  // ===== 01. Start Content Creator =====
  selectedBrand: "" as any,
  setSelectedBrand: (brand: any) => {},
  collectedData: null as any,
  setCollectedData: (data: any) => {},
  twitterData: null as any,
  setTwitterData: (data: any) => {},
  choosedArticles: [] as any,
  setChoosedArticles: (articles: any) => {},
  finalArticle: null as any,
  setFinalArticle: (article: any) => {},
  checkGrammerResults: [] as any,
  setCheckGrammerResults: (result: any) => {},
  checkAiResults: [] as any,
  setCheckAiResults: (result: any) => {},
  generateTitles: () => {},
  generatedTitles: [] as any,
  setGeneratedTitles: (titles: any) => {},
  lockedGeneratedTitles: [] as any,
  setLockedGeneratedTitles: (titles: any) => {},
  // ===== 01. End Content Creator =====

};

// 1- create context, export it
export const globalContext = createContext(initialContextState);

// 2- provide context, export it
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ===== 00. Start Authentication =====
  function tokenInit(){
    if (typeof window !== "undefined") {
      const tokenInitValue = localStorage.getItem("token");
      return tokenInitValue ? tokenInitValue : null;
    } else {
      return null;
    }
  }
  const [token, setToken] = useState<any>(tokenInit());
  const [decodedToken, setDecodedToken] = useState<any>(null);
  useEffect(() => {
    localStorage.setItem("token", token);
    if (token) {
      try {
        setDecodedToken(jwtDecode(token));
      } catch (error) {
        console.error("setDecodedToken Error:", error);
        setDecodedToken(null);
      }
    }
    console.log("decodedToken:", decodedToken);
  }, [token]);
  // ===== 00. End Authentication =====


  // ===== 01. Start Content Creator =====
  function selectedBrandInit(){
    if (typeof window !== "undefined") {
      const selectedBrandInitValue = sessionStorage.getItem("selectedBrand");
      return selectedBrandInitValue ? selectedBrandInitValue : "";
    } else{
      return "";
    }
  }
  const [selectedBrand, setSelectedBrand] = useState<any>(selectedBrandInit());
  useEffect(() => {
    sessionStorage.setItem("selectedBrand", selectedBrand);
  }, [selectedBrand]);


  function collectedDataInit(){
    if (typeof window !== "undefined") {
      const collectedDataInitValue = sessionStorage.getItem("collectedData");
      return collectedDataInitValue ? JSON.parse(collectedDataInitValue) : null;
    } else{
      return null;
    }
  }
  const [collectedData, setCollectedData] = useState<any>(collectedDataInit());
  useEffect(() => {
    sessionStorage.setItem("collectedData", JSON.stringify(collectedData));
  }, [collectedData]);


  function twitterDataInit(){
    if (typeof window !== "undefined") {
      const twitterDataInitValue = sessionStorage.getItem("twitterData");
      return twitterDataInitValue ? JSON.parse(twitterDataInitValue) : null;
    } else{
      return null;
    }
  }
  const [twitterData, setTwitterData] = useState<any>(twitterDataInit());
  useEffect(() => {
    sessionStorage.setItem("twitterData", JSON.stringify(twitterData));
  }, [twitterData]);

  
  function choosedArticlesInit(){
    if (typeof window !== "undefined") {
      const choosedArticlesInitValue = sessionStorage.getItem("choosedArticles");
      return choosedArticlesInitValue ? JSON.parse(choosedArticlesInitValue) : [];
    } else{
      return [];
    }
  }
  const [choosedArticles, setChoosedArticles] = useState<any>(choosedArticlesInit()); 
  useEffect(() => {
    sessionStorage.setItem("choosedArticles", JSON.stringify(choosedArticles));
  }, [choosedArticles]);
  
  
  function finalArticleInit(){
    if (typeof window !== "undefined") {
      const finalArticleInitValue = sessionStorage.getItem("finalArticle");
      return finalArticleInitValue ? JSON.parse(finalArticleInitValue) : null;
    } else{
      return null;
    }
  }
  const [finalArticle, setFinalArticle] = useState<any>(finalArticleInit()); 
  useEffect(() => {
    sessionStorage.setItem("finalArticle", JSON.stringify(finalArticle));
  }, [finalArticle]);


  function checkGrammerResultsInit(){
    if (typeof window !== "undefined") {
      const checkGrammerResultsInitValue = sessionStorage.getItem("checkGrammerResults");
      return checkGrammerResultsInitValue ? JSON.parse(checkGrammerResultsInitValue) : [];
    } else{
      return [];
    }
  }
  const [checkGrammerResults, setCheckGrammerResults] = useState<any>(checkGrammerResultsInit()); 
  useEffect(() => {
    sessionStorage.setItem("checkGrammerResults", JSON.stringify(checkGrammerResults));
  }, [checkGrammerResults]);


  function checkAiResultsInit(){
    if (typeof window !== "undefined") {
      const checkAiResultsInitValue = sessionStorage.getItem("checkAiResults");
      return checkAiResultsInitValue ? JSON.parse(checkAiResultsInitValue) : [];
    } else{
      return [];
    }
  }
  const [checkAiResults, setCheckAiResults] = useState<any>(checkAiResultsInit());
  useEffect(() => {
    sessionStorage.setItem("checkAiResults", JSON.stringify(checkAiResults));
  }, [checkAiResults]);


  async function generateTitles() {
    const maxRetries = 2; // Define the maximum number of retries
    let attempts = 0;
    let json = null;

    while (attempts < maxRetries) {
      try {
        const res = await fetch(`http://localhost:3000/generate-titles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: finalArticle?.articles[0]?.content,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        json = await res.json();

        if (json) {
          // If content is found, break the loop
          break;
        }
      } catch (error) {
        console.error("Error generateTitles:", error);
      } finally {
        attempts++;
      }
    }

    if (json) {
      setGeneratedTitles(json.generatedTitles);
    }
  }
  function generatedTitlesInit(){
    if (typeof window !== "undefined") {
      const generatedTitlesInitValue = sessionStorage.getItem("generatedTitles");
      return generatedTitlesInitValue ? JSON.parse(generatedTitlesInitValue) : [];
    } else{
      return [];
    }
  }
  const [generatedTitles, setGeneratedTitles] = useState<any>(generatedTitlesInit());
  useEffect(() => {
    sessionStorage.setItem("generatedTitles", JSON.stringify(generatedTitles));
    console.log("generatedTitles:", generatedTitles);
  }, [generatedTitles]);


  function lockedGeneratedTitlesInit(){
    if (typeof window !== "undefined") {
      const lockedGeneratedTitlesInitValue = sessionStorage.getItem("lockedGeneratedTitles");
      return lockedGeneratedTitlesInitValue ? JSON.parse(lockedGeneratedTitlesInitValue) : [];
    } else{
      return [];
    }
  }
  const [lockedGeneratedTitles, setLockedGeneratedTitles] = useState<any>(lockedGeneratedTitlesInit());
  useEffect(() => {
    sessionStorage.setItem("lockedGeneratedTitles", JSON.stringify(lockedGeneratedTitles));
    console.log("lockedGeneratedTitles:", lockedGeneratedTitles);
  }, [generatedTitles, lockedGeneratedTitles]);
  // ===== 01. End Content Creator =====



  // Create a context value object
  const contextValue = {
  // ===== 00. Start Authentication =====
    token,
    setToken,
    decodedToken,
    setDecodedToken,
  // ===== 00. End Authentication =====

  // ===== 01. Start Content Creator =====
    selectedBrand,
    setSelectedBrand,
    collectedData,
    setCollectedData,
    twitterData,
    setTwitterData,
    choosedArticles,
    setChoosedArticles,
    finalArticle,
    setFinalArticle,
    checkGrammerResults,
    setCheckGrammerResults,
    checkAiResults,
    setCheckAiResults,
    generateTitles,
    generatedTitles,
    setGeneratedTitles,
    lockedGeneratedTitles,
    setLockedGeneratedTitles,
  // ===== 01. End Content Creator =====

  };

  return (
    // to provide what i created
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
}
