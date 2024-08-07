import CustomBtn from "@/app/_components/Button/CustomBtn";
import styles from "./choose-newsletter.module.css";
import TopicColapse from "@/app/_components/TopicCollapse/TopicCollapse";
import ArticleWithCheck from "@/app/_components/ArticleWithCheck/ArticleWithCheck";


function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-start gap-[2rem] h-[75vh] py-[1.5vw]">
        {/* scripts wrapper */}
        <div className={styles.scripts_wrapper + " w-1/2"}>
          {/* scripts header that  */}
          <div className={styles.header}>
            <h6>Source</h6>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M10.4999 0.000109476C8.42325 0.000109476 6.3932 0.61592 4.66649 1.76967C2.93979 2.92342 1.59398 4.56328 0.799265 6.4819C0.0045495 8.40051 -0.203384 10.5117 0.201758 12.5485C0.606901 14.5853 1.60692 16.4562 3.07537 17.9246C4.54381 19.3931 6.41472 20.3931 8.45151 20.7982C10.4883 21.2034 12.5995 20.9955 14.5181 20.2007C16.4367 19.406 18.0766 18.0602 19.2303 16.3335C20.3841 14.6068 20.9999 12.5767 20.9999 10.5001C21.0062 9.11941 20.7389 7.7512 20.2135 6.47443C19.6881 5.19767 18.9149 4.03765 17.9386 3.06138C16.9623 2.08511 15.8023 1.31193 14.5256 0.7865C13.2488 0.261066 11.8806 -0.00620935 10.4999 0.000109476ZM11.4545 15.2728C11.4545 15.5259 11.3539 15.7687 11.1749 15.9477C10.9959 16.1267 10.7531 16.2273 10.4999 16.2273C10.2468 16.2273 10.004 16.1267 9.82499 15.9477C9.64597 15.7687 9.54541 15.5259 9.54541 15.2728V9.54551C9.54541 9.29235 9.64597 9.04956 9.82499 8.87055C10.004 8.69154 10.2468 8.59097 10.4999 8.59097C10.7531 8.59097 10.9959 8.69154 11.1749 8.87055C11.3539 9.04956 11.4545 9.29235 11.4545 9.54551V15.2728ZM10.4999 6.68189C10.3112 6.68189 10.1266 6.62591 9.96963 6.52102C9.81266 6.41614 9.69031 6.26706 9.61807 6.09264C9.54582 5.91822 9.52692 5.72629 9.56375 5.54113C9.60058 5.35597 9.69149 5.18588 9.82499 5.05239C9.95848 4.91889 10.1286 4.82798 10.3137 4.79115C10.4989 4.75432 10.6908 4.77322 10.8652 4.84547C11.0397 4.91772 11.1887 5.04006 11.2936 5.19704C11.3985 5.35401 11.4545 5.53856 11.4545 5.72735C11.4545 5.98051 11.3539 6.2233 11.1749 6.40231C10.9959 6.58132 10.7531 6.68189 10.4999 6.68189Z"
                  fill="#2A2B2A"
                />
              </svg>
            </span>
          </div>

          {/* topics container */}
          <div className={styles.select_article_container}>
            {/* topic collapse */}
            <TopicColapse
              forComments={false}
              title="#TSLA is in the lead"
              date="April 16th 2024"
            >
              {/* article with check */}
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"

              />
            </TopicColapse>

            {/* topic collapse */}
            <TopicColapse
              forComments={false}
              title="#SAVE is on the low"
              date="April 16th 2024"
            >
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
            </TopicColapse>

            {/* topic collapse */}
            <TopicColapse
              forComments={false}
              title="U.S military hit IRAN"
              date="April 16th 2024"
            >
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
            </TopicColapse>

            {/* topic collapse */}
            <TopicColapse
              forComments={false}
              title="Food Prices are high"
              date="April 16th 2024"
            >
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
            </TopicColapse>

            {/* topic collapse */}
            <TopicColapse
              forComments={false}
              title="Lowest 2024 Property Prices"
              date="April 16th 2024"
            >
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
              <ArticleWithCheck
                article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                name="select-articles"
                accsentColor="#E1C655"
              />
            </TopicColapse>
          </div>
        </div>

        {/* preview wrapper */}
        <div className={styles.preview_wrapper + " w-1/2"}>
          <div className={styles.header}>
            <h6>Preview</h6>
          </div>
          <div className={styles.selected_article_container}>
            <h6>TESLA IS ON TOP!</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae
              labore recusandae tempora eveniet eius, veritatis corporis hic
              itaque doloribus nemo expedita excepturi nesciunt laborum
              accusamus perspiciatis, asperiores ipsam officia?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae
              labore recusandae tempora eveniet eius, veritatis corporis hic
              itaque doloribus nemo expedita excepturi nesciunt laborum
              accusamus perspiciatis, asperiores ipsam officia?
            </p>
          </div>
        </div>
      </div>

      {/* buttons to move to last or next page */}
      <div className="flex justify-between w-full">
        <CustomBtn
          word={"Back"}
          btnColor="white"
          href={"/newsletter/create/"}
        />
        <CustomBtn
          word={"Next"}
          btnColor="black"
          href={"/newsletter/create/newsletter-generated-titles"}
        />
      </div>
    </div>
  );
}
export default Page;
