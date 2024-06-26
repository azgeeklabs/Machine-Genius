'use client'
import ArticlePreview from "@/app/_components/ArticlePreview/ArticlePreview"
import CustomBtn from "@/app/_components/Button/CustomBtn"
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoAndTitle from "@/app/_components/LogoAndTitle/LogoAndTitle";
import SpecificChecker from "@/app/_components/SpecificChecker/SpecificChecker";
import styles from './final-artical.module.css'
// page enables you to have a look to your article
const FinalArticle = () => {
// state to handle content while page is loading its content
    const [IsLoading, setIsLoading] = useState(false);
    const router = useRouter();

// show loading page before navigate to next page
    const handleNavigate = () => {
      setIsLoading(true)
  
    //   setTimeout(() => {
    //     // Your action here
    //     router.push('/content-creator/create/final-article')
  
    //   }, 1500); // 3000 milliseconds = 3 seconds
  
    }

    return (

         <div className="flex flex-col">
            {/* loading screen */}
            { IsLoading ? <div className="flex flex-col justify-center items-center mx-auto h-[75vh] py-[1.5vw]" >
                <div className={`${styles.genuisWorking}`}>
                    <LogoAndTitle needTxt={false} title='Genius is working on your article..' />
                    <div className={`${styles.allCheckers} w-full`}>
                        <SpecificChecker pass={true} word='Grammar Checker' />
                        <SpecificChecker pass={false} word='Plagiarism Checker' />
                        <SpecificChecker pass={true} word='AI Checker' />
                    </div>
                    <CustomBtn word={"Results"} btnColor="black" href="/content-creator/create/show-errors" />
                </div>
            </div> : <><div className="flex flex-col justify-center items-center mx-auto h-[75vh] py-[1.5vw] w-11/12 " >
                {/* section to display article */}
                <div className="w-4/5 mx-auto h-full">
                    <ArticlePreview yourNewArticle={true} height="h-full" withEdit={false} />
                </div>

            </div>
            {/* buttons to move to last or next page */}
            <div className="flex justify-between items-center">
                <CustomBtn
                    word={"Back"}
                    btnColor="white"
                    href={"/content-creator/create/create-article"}
                />
                <CustomBtn
                    word={"Next"}
                    btnColor="black"
                    onClick={handleNavigate}
                />
            </div></>}
            
        </div>
        

    )
}

export default FinalArticle