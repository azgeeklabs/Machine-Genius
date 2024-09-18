"use client";
import React from "react";
import styles from "./ConvertedScriptPage.module.css";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import ArticlePreview from "@/app/_components/ArticlePreview/ArticlePreview";
import CustomAudioPlayer from "@/app/_components/VideoEditing/CustomAudioPlayer/CustomAudioPlayer";

const audioIcon = (
  <svg
    width="19"
    height="14"
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5647 13.0919C8.36551 13.0919 8.17157 13.0279 8.01142 12.9095C8.00252 12.9033 7.99394 12.8967 7.9857 12.8896L4.4252 9.97477H1.7071C1.45909 9.97477 1.22124 9.87624 1.04587 9.70087C0.870495 9.5255 0.771973 9.28765 0.771973 9.03964V4.67571C0.771973 4.4277 0.870495 4.18985 1.04587 4.01447C1.22124 3.8391 1.45909 3.74058 1.7071 3.74058H4.42481L7.98492 0.825712C7.99316 0.81866 8.00174 0.812027 8.01064 0.80584C8.1499 0.703411 8.31484 0.641591 8.48712 0.627248C8.6594 0.612905 8.83228 0.6466 8.98657 0.72459C9.14085 0.802581 9.2705 0.921813 9.36111 1.06904C9.45171 1.21628 9.49973 1.38574 9.49983 1.55862V12.1567C9.49983 12.4047 9.40131 12.6426 9.22594 12.818C9.05057 12.9933 8.81271 13.0919 8.5647 13.0919Z"
      fill="black"
    />
    <path
      d="M11.9934 9.97507C11.887 9.97504 11.7824 9.9478 11.6895 9.89592C11.5967 9.84405 11.5186 9.76927 11.4628 9.6787C11.407 9.58813 11.3753 9.48479 11.3707 9.37851C11.3661 9.27222 11.3888 9.16653 11.4366 9.0715C11.8064 8.33626 11.9938 7.59088 11.9938 6.85797C11.9938 6.10286 11.8122 5.37969 11.4386 4.64757C11.367 4.50071 11.3559 4.33162 11.4077 4.17667C11.4595 4.02173 11.5701 3.89332 11.7156 3.81907C11.8612 3.74482 12.03 3.73067 12.1859 3.77967C12.3417 3.82866 12.4721 3.93688 12.549 4.08103C13.0139 4.99239 13.2402 5.90103 13.2402 6.85797C13.2402 7.78765 13.0065 8.72083 12.5506 9.6318C12.4986 9.73503 12.419 9.82181 12.3207 9.88242C12.2223 9.94304 12.109 9.97511 11.9934 9.97507Z"
      fill="black"
    />
    <path
      d="M13.8638 11.8456C13.7543 11.8456 13.6468 11.8168 13.552 11.7621C13.4572 11.7074 13.3785 11.6287 13.3238 11.5339C13.2691 11.4391 13.2402 11.3316 13.2402 11.2222C13.2402 11.1127 13.269 11.0052 13.3238 10.9104C14.0606 9.62814 14.4872 8.55353 14.4872 6.85822C14.4872 5.13719 14.0613 4.06998 13.3253 2.80834C13.2446 2.66566 13.2233 2.49694 13.2661 2.33869C13.3089 2.18044 13.4122 2.04541 13.5538 1.96283C13.6954 1.88024 13.8639 1.85675 14.0227 1.89744C14.1815 1.93814 14.3178 2.03973 14.4023 2.18024C15.2244 3.58956 15.734 4.86367 15.734 6.85822C15.734 8.82315 15.2252 10.1035 14.4042 11.5339C14.3495 11.6287 14.2707 11.7075 14.1758 11.7622C14.0809 11.8169 13.9733 11.8457 13.8638 11.8456Z"
      fill="black"
    />
    <path
      d="M15.7338 13.7157C15.6216 13.7156 15.5114 13.6852 15.415 13.6277C15.3186 13.5702 15.2395 13.4877 15.186 13.389C15.1326 13.2903 15.1068 13.1789 15.1114 13.0668C15.116 12.9546 15.1508 12.8457 15.2121 12.7517C16.2735 11.1234 16.9807 9.49824 16.9807 6.85807C16.9807 4.26698 16.2723 2.62584 15.2082 0.95936C15.1642 0.890284 15.1342 0.813206 15.1199 0.732529C15.1056 0.651851 15.1074 0.569153 15.1251 0.489157C15.1428 0.40916 15.176 0.333432 15.223 0.266296C15.27 0.19916 15.3297 0.14193 15.3988 0.0978743C15.4678 0.0538188 15.5449 0.0238003 15.6256 0.00953276C15.7063 -0.00473475 15.789 -0.00297186 15.869 0.0147207C15.949 0.0324133 16.0247 0.0656892 16.0918 0.112648C16.159 0.159607 16.2162 0.21933 16.2602 0.288406C17.4408 2.13918 18.2275 3.96463 18.2275 6.85807C18.2275 9.38096 17.6563 11.2855 16.256 13.4328C16.1993 13.5196 16.1219 13.591 16.0307 13.6404C15.9396 13.6898 15.8375 13.7157 15.7338 13.7157Z"
      fill="black"
    />
  </svg>
);

const arrowIcon = (
  <svg
    width="40"
    height="23"
    viewBox="0 0 40 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 21.1221C24 21.9317 24.912 22.4057 25.5746 21.9405L39.481 12.1767C40.0482 11.7785 40.0482 10.9381 39.481 10.5399L25.5746 0.776096C24.912 0.310845 24 0.78485 24 1.59452V6C24 6.55228 23.5523 7 23 7H1C0.447715 7 0 7.44772 0 8V14C0 14.5523 0.447716 15 1 15H23C23.5523 15 24 15.4477 24 16V21.1221Z"
      fill="#2A2B2A"
      fill-opacity="0.15"
    />
  </svg>
);

const ConvertedScriptPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center h-[75vh] py-[1.5vw] w-full gap-[2vw]">
        <div className="w-7/12 flex flex-col gap-[1vw] h-full">
          <div className={`${styles.yourArticle} h-full`}>
            <h3>Converted Script To Audio</h3>
            <ArticlePreview
              yourNewArticle={false}
              height="h-[90%]"
              withEdit={false}
            />
          </div>
        </div>

        {/* comments part */}
        <div className={`w-5/12 h-[90%]`}>
          <h3 className="text-[--24px] font-bold mb-[--sy-20px]">
            Audio Preview
          </h3>
          <div className={styles.audio_player + " mb-[2vw]"}>
            <CustomAudioPlayer />
          </div>

          <div className={styles.selected_words}>
            <div
              className={styles.header + " flex items-center justify-between"}
            >
              <div className="flex flex-col gap-[--sy-8px]">
                <h3 className="text-[--24px] font-bold">Audio Correction</h3>
                <span className="text-[--16px] font-semibold">
                  Select the incorrect word
                </span>
              </div>
            </div>

            <div className={styles.selected_words_body}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                architecto adipisci molestiae fuga iusto atque illum voluptatem
                voluptates quam enim? Reprehenderit distinctio veritatis
                delectus laboriosam officia voluptate tempore voluptates
                officiis!
              </p>
            </div>

            <div className="border border-solid border-[#ACACAC] rounded-[--10px] p-[--24px] flex items-center justify-between">
              <div>
                <div className="flex flex-col gap-[--sy-2px] mb-[--sy-16px]">
                  <span className="font-semibold">Word Correction</span>
                  <span className="text-[#ACACAC]">Mispronounced word</span>
                </div>

                <div className="border border-solid border-[#2A2B2A] rounded-[--5px] py-[--10px] px-[--20px] flex items-center justify-between">
                  <span>labore</span>
                  {audioIcon}
                </div>
              </div>
              {arrowIcon}
              <div>
                <div className="flex flex-col gap-[--sy-2px] mb-[--sy-16px]">
                  <span className="font-semibold">Word Correction</span>
                  <span className="text-[#ACACAC]">Write the correct pronunciation</span>
                </div>

                <div className="border border-solid border-[#2A2B2A] rounded-[--5px] py-[--10px] px-[--20px] flex items-center justify-between">
                  <span>labore</span>
                  {audioIcon}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-[1.5vw]">
              <CustomBtn
                btnColor="white"
                word="Replace Word"
                paddingVal="py-[--8px] px-[--24px]"
              />
              <CustomBtn
                btnColor="black"
                word="Update Database"
                paddingVal="py-[--8px] px-[--24px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* buttons to move to last or next page */}
      <div className="flex justify-between items-center">
        <CustomBtn
          word={"Back"}
          btnColor="white"
          href={"/video-editor/create"}
        />
        <CustomBtn
          word={"Next"}
          btnColor="black"
          href={"/video-editor/create/choose-footage"}
        />
      </div>
    </div>
  );
};

export default ConvertedScriptPage;
