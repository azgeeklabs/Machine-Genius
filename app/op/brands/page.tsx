"use client";
import React from "react";
import styles from "./brands.module.css";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import Slider from "react-slick";
import CustomSelectInput from "@/app/_components/CustomSelectInput/CustomSelectInput";
import "./brands.css";

const Page = () => {
  function SampleNextArrow(props: any) {
    const { onClick, className } = props;
    return (
      <div onClick={onClick} className={`custom_arrows ${className}`}>
        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.4941 23.9434C17.0787 23.529 17.0787 22.8565 17.4941 22.441L21.8726 18.0625L10.625 18.0625C10.0406 18.0625 9.5625 17.5865 9.5625 17C9.5625 16.4124 10.0406 15.9375 10.625 15.9375L21.8726 15.9375L17.4941 11.559C17.0787 11.1435 17.0787 10.4699 17.4941 10.0566C17.9074 9.64115 18.581 9.64115 18.9965 10.0566L25.0059 16.066C25.2609 16.321 25.3406 16.6696 25.2822 17C25.3406 17.3304 25.2609 17.679 25.0059 17.934L18.9965 23.9434C18.581 24.3588 17.9074 24.3588 17.4941 23.9434ZM34 29.75L34 4.25C34 1.90294 32.0971 -8.318e-08 29.75 -1.85773e-07L4.25 -1.30041e-06C1.90187 -1.40305e-06 -8.318e-08 1.90294 -1.85773e-07 4.25L-1.30041e-06 29.75C-1.40301e-06 32.0971 1.90187 34 4.25 34L29.75 34C32.0971 34 34 32.0971 34 29.75Z"
          />
        </svg>
      </div>
    );
  }
  function SamplePrevArrow(props: any) {
    const { onClick, className } = props;
    return (
      <div onClick={onClick} className={`custom_arrows ${className}`}>
        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5059 23.9434C16.9213 23.529 16.9213 22.8565 16.5059 22.441L12.1274 18.0625L23.375 18.0625C23.9594 18.0625 24.4375 17.5865 24.4375 17C24.4375 16.4124 23.9594 15.9375 23.375 15.9375L12.1274 15.9375L16.5059 11.559C16.9213 11.1435 16.9213 10.4699 16.5059 10.0566C16.0926 9.64115 15.419 9.64115 15.0035 10.0566L8.99409 16.066C8.73909 16.321 8.65939 16.6696 8.71783 17C8.65939 17.3304 8.73909 17.679 8.99409 17.934L15.0035 23.9434C15.419 24.3588 16.0926 24.3588 16.5059 23.9434ZM1.30041e-06 29.75L1.85773e-07 4.25C8.318e-08 1.90294 1.90294 -8.318e-08 4.25 -1.85773e-07L29.75 -1.30041e-06C32.0981 -1.40305e-06 34 1.90294 34 4.25L34 29.75C34 32.0971 32.0981 34 29.75 34L4.25 34C1.90294 34 1.40301e-06 32.0971 1.30041e-06 29.75Z"
          />
        </svg>
      </div>
    );
  }

  const settings: any = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2: any = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={`${styles.brands} brands pt-[1vw]`}>
      <div className="mb-[1.3vw]">
        <div className=" flex justify-between w-[87vw] mb-[1.1vw]">
          <div className=" min-w-[20vw]">
            <h4 className="mb-[0.5vw]">Brand Groups</h4>
            <CustomSelectInput
              options={[
                "ST Suite",
                "Street Politics",
                "ST Suite",
                "Street Politics",
              ]}
              label={"All"}
            />
          </div>
        </div>
        <div className="sliderAudience w-[87vw] mb-[1vw]">
          <div className="slider-container ">
            {/* Slider component with specified settings */}
            <Slider {...settings}>
                {/* Card component with padding, rounded corners */}
              <div className={`${styles.card} px-[1vw] pt-[1.1vw] rounded-3xl`}>
                {/* Header section with flex layout, justified content, centered items, padding bottom, bottom border, and bottom margin */}
                <div className=" flex justify-between items-center pb-[0.7vw] border-b-[1px] border-b-[#2A2B2A] mb-[0.8vw]">
                  <h3>Street Politics</h3>
                  <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                    Politics
                  </span>
                </div>
                 {/* Scrollable content area with fixed height, padding right, and padding */}
                <div className=" overflow-y-scroll h-[32vh] pr-2 py-[0.2vw]">
                     {/* Inner card with padding and rounded corners */}
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                     {/* Header section with flex layout, justified content, centered items, padding bottom, bottom margin, and bottom border */}
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#FC471E]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                        Politics
                      </span>
                    </div>
                    {/* Description heading */}
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                     {/* Acquisition date section with flex layout, justified content, and centered items */}
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                  {/* Repeating inner card with the same structure */}
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#FC471E]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                        Politics
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeating card with slightly different content */}
              <div className={`${styles.card} px-[1vw] pt-[1.1vw] rounded-3xl`}>
                <div className=" flex justify-between items-center pb-[0.7vw] border-b-[1px] border-b-[#2A2B2A] mb-[0.8vw]">
                  <h3>Street Politics</h3>
                  <span className="px-[0.4vw] py-[0.2vw] bg-[#E1C655B2] rounded-sm">
                    Politics
                  </span>
                </div>
                <div className=" overflow-y-scroll h-[32vh] pr-2 py-[0.2vw]">
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#E1C655]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#E1C655B2] rounded-sm">
                        Entertainment
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#E1C655]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#E1C655B2] rounded-sm">
                        Entertainment
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional repeating cards with same structure */}
              <div className={`${styles.card} px-[1vw] pt-[1.1vw] rounded-3xl`}>
                <div className=" flex justify-between items-center pb-[0.7vw] border-b-[1px] border-b-[#2A2B2A] mb-[0.8vw]">
                  <h3>Street Politics</h3>
                  <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                    Politics
                  </span>
                </div>
                <div className=" overflow-y-scroll h-[32vh] pr-2 py-[0.2vw]">
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#FC471E]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                        Politics
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#FC471E]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                        Politics
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional repeating cards with slight variations in content */}
              <div className={`${styles.card} px-[1vw] pt-[1.1vw] rounded-3xl`}>
                <div className=" flex justify-between items-center pb-[0.7vw] border-b-[1px] border-b-[#2A2B2A] mb-[0.8vw]">
                  <h3>Street Politics</h3>
                  <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                    Politics
                  </span>
                </div>
                <div className=" overflow-y-scroll h-[32vh] pr-2 py-[0.2vw]">
                  <div className={`${styles.info} p-[0.7vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#FC471E]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                        Politics
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.info} p-[1vw] rounded-3xl`}>
                    <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                      <h4 className=" text-[#FC471E]">PST Canada</h4>
                      <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                        Politics
                      </span>
                    </div>
                    <h5 className=" mb-[0.5vw]">Description</h5>
                    <p className=" mb-[0.5vw]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className=" flex justify-between items-center">
                      <h5>Acquisition Date</h5>
                      <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                        April 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* container */}
        <div>
          {/* Header section with flex layout, justified content, centered items, bottom margin, and relative positioning */}
          <div className=" flex justify-between items-center mb-[1vw] relative downSidebar">
            <h4>Brands</h4>
          </div>

          {/* Container for the slider with specified width */}
          <div className="sliderAudience w-[87vw]">
            {/* Slider container */}
            <div className="slider-container ">
              {/* Slider component with specified settings */}
              <Slider {...settings2}>
                {/* First brand info box with padding, bottom margin, and rounded corners */}
                <div
                  className={`${styles.info} py-[1vw] px-[1.2vw] mb-[0.2vw] rounded-3xl`}
                >
                  {/* Header section for the brand info with flex layout, justified content, centered items, padding bottom, bottom margin, and bottom border */}
                  <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                    <h4 className=" text-[#FC471E]">PST Canada</h4>
                    <span className="px-[0.4vw] py-[0.1vw] bg-[#F36F24B2] rounded-sm">
                      Politics
                    </span>
                  </div>

                  {/* Description heading */}
                  <h5 className=" mb-[0.5vw]">Description</h5>

                  {/* Description text */}
                  <p className=" mb-[0.5vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  {/* Acquisition date section with flex layout, justified content, and centered items */}
                  <div className=" flex justify-between items-center">
                    <h5>Acquisition Date</h5>
                    <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                      April 2023
                    </span>
                  </div>
                </div>

                {/* Second brand info box with similar structure as the first one */}
                <div
                  className={`${styles.info} py-[1vw] px-[1.2vw] mb-[0.2vw] rounded-3xl`}
                >
                  <div className="flex justify-between items-center pb-[0.6vw] mb-[0.5vw] border-b-[var(--dark)] border-b-[1px]">
                    <h4 className=" text-[#E1C655]">PST Canada</h4>
                    <span className="px-[0.4vw] py-[0.1vw] bg-[#E1C655B2] rounded-sm">
                      Entertainment
                    </span>
                  </div>
                  <h5 className=" mb-[0.5vw]">Description</h5>
                  <p className=" mb-[0.5vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className=" flex justify-between items-center">
                    <h5>Acquisition Date</h5>
                    <span className={`${styles.dateSpan} text-[#ACACAC]`}>
                      April 2023
                    </span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* Container for the "New Brand" button, aligned to the right */}
        <div className=" w-fit ms-auto">
          <CustomBtn
          href="/op/brands/new-brand"
            paddingVal="py-[0.4vw] px-[0.9vw]"
            btnColor="black"
            icon={
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.58333 10.0833C4.58333 10.5896 4.99373 11 5.5 11C6.00628 11 6.41667 10.5896 6.41667 10.0833V6.41667H10.0833C10.5896 6.41667 11 6.00628 11 5.5C11 4.99373 10.5896 4.58333 10.0833 4.58333H6.41667V0.916667C6.41667 0.410401 6.00628 0 5.5 0C4.99373 0 4.58333 0.410401 4.58333 0.916667V4.58333H0.916667C0.41041 4.58333 0 4.99373 0 5.5C0 6.00628 0.41041 6.41667 0.916667 6.41667H4.58333V10.0833Z"
                  fill="#FFFFFB"
                />
              </svg>
            }
            word="New Brand"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
