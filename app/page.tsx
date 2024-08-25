"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import img from "../public/seoModule.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedWheel, setSelectedWheel] = useState("hr");
  const [selectedNum, setSelectedNum] = useState<number>(0);

  const [leftArrowHovered ,setLeftArrowHovered] = useState(false)
  const [rightArrowHovered ,setRightArrowHovered] = useState(false)

useEffect(()=>{
if (selectedNum == 0) {
  setSelectedWheel("hr")
} else if (selectedNum == 1) {
  setSelectedWheel("video")
} else if (selectedNum == -1) {
  setSelectedWheel("seo")
} else if (selectedNum == -2) {
  setSelectedWheel("social")
} else if (selectedNum == -3) {
  setSelectedWheel("content")
}
},[selectedNum])
  return (
    <>
      <div className=" w-full relative overflow-x-clip text-[#FFFFFB]">
        <div className="px-[--98px] flex justify-between items-center left-0 right-0 absolute top-[56px] z-50">
          <Link href={"/"}>
            <svg
              className=" w-[--128px]"
              viewBox="0 0 129 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.11719 23.6576V14.0262C1.11719 12.7537 1.42652 11.5867 2.04518 10.5321C2.66384 9.47056 3.55669 8.62693 4.72371 8.00827C5.89073 7.38257 7.29679 7.07324 8.9489 7.07324C9.74332 7.07324 10.4745 7.16464 11.1494 7.34039C11.8243 7.52318 12.45 7.7833 13.0264 8.12075C13.6029 8.4582 14.1091 8.86596 14.538 9.32996H14.5731C15.023 8.86596 15.5363 8.4582 16.1127 8.12075C16.6892 7.7833 17.3219 7.52318 18.0109 7.34039C18.6928 7.15761 19.431 7.07324 20.2254 7.07324C21.8705 7.07324 23.2836 7.38257 24.4506 8.00827C25.6176 8.63396 26.5105 9.47759 27.1292 10.5321C27.7478 11.5867 28.0571 12.7607 28.0571 14.0262V23.6576H23.6562V14.0262C23.6562 13.4356 23.5015 12.8943 23.1922 12.4022C22.8829 11.9101 22.4681 11.5234 21.9549 11.2281C21.4417 10.9329 20.8652 10.7852 20.2184 10.7852C19.5716 10.7852 19.0233 10.9329 18.503 11.2281C17.9758 11.5234 17.561 11.9171 17.2516 12.4022C16.9423 12.8873 16.7876 13.4286 16.7876 14.0262V23.6576H12.3867V14.0262C12.3867 13.4356 12.232 12.8943 11.9227 12.4022C11.6134 11.9171 11.1986 11.5234 10.6854 11.2281C10.1722 10.9329 9.59568 10.7852 8.9489 10.7852C8.30211 10.7852 7.75375 10.9329 7.23351 11.2281C6.70624 11.5234 6.29146 11.9171 5.98213 12.4022C5.6728 12.8873 5.51813 13.4286 5.51813 14.0262V23.6576H1.11719Z"
                fill="#FFFFFB"
              />
              <path
                d="M38.456 24.0375C36.9585 24.0375 35.6509 23.6578 34.5401 22.8915C33.4294 22.1323 32.5646 21.1058 31.953 19.8263C31.3414 18.5468 31.0391 17.1267 31.0391 15.5801C31.0391 14.0334 31.3835 12.55 32.0795 11.2564C32.7755 9.96287 33.7738 8.94349 35.0815 8.19125C36.3891 7.43901 37.9498 7.06641 39.7706 7.06641C41.5915 7.06641 43.1663 7.44604 44.4247 8.21234C45.6901 8.97161 46.6533 10.0051 47.3141 11.2986C47.975 12.5922 48.3124 14.0193 48.3124 15.5871V23.6649H43.9115V20.9652H43.8482C43.5248 21.5347 43.1241 22.0549 42.646 22.526C42.1609 22.9899 41.5774 23.3626 40.8955 23.6367C40.2136 23.9109 39.398 24.0515 38.456 24.0515V24.0375ZM39.7074 20.3184C40.5651 20.3184 41.3032 20.1075 41.9219 19.6857C42.5406 19.2639 43.0186 18.6874 43.349 17.9563C43.6795 17.2251 43.8482 16.4167 43.8482 15.5238C43.8482 14.631 43.6795 13.8365 43.349 13.1265C43.0186 12.4164 42.5406 11.847 41.9219 11.4252C41.3032 11.0034 40.5651 10.7924 39.7074 10.7924C38.8497 10.7924 38.0764 11.0034 37.4436 11.4252C36.8109 11.847 36.3328 12.4164 35.9954 13.1265C35.665 13.8365 35.4962 14.638 35.4962 15.5238C35.4962 16.4096 35.665 17.2251 35.9954 17.9563C36.3258 18.6874 36.8109 19.2639 37.4436 19.6857C38.0764 20.1075 38.8286 20.3184 39.7074 20.3184Z"
                fill="#FFFFFB"
              />
              <path
                d="M60.1308 23.6585C58.4365 23.6585 56.932 23.2999 55.6033 22.5758C54.2746 21.8587 53.2271 20.8885 52.4537 19.6653C51.6804 18.449 51.3008 17.0711 51.3008 15.5455C51.3008 14.02 51.6874 12.6491 52.4537 11.4258C53.2271 10.2096 54.2746 9.23939 55.6033 8.51528C56.932 7.79116 58.4365 7.43262 60.1308 7.43262H62.1836V11.1516H60.1308C59.2309 11.1516 58.4576 11.3414 57.8038 11.7211C57.15 12.1007 56.6508 12.628 56.2923 13.2959C55.9408 13.9637 55.765 14.7089 55.765 15.5385C55.765 16.3681 55.9408 17.1133 56.2923 17.7812C56.6438 18.449 57.15 18.9763 57.8038 19.3559C58.4576 19.7356 59.2309 19.9254 60.1308 19.9254H62.1836V23.6444H60.1308V23.6585Z"
                fill="#FFFFFB"
              />
              <path
                d="M65.0078 23.6581V0.451172H69.4088V8.59221C70.0907 8.04385 70.8289 7.65016 71.6233 7.41816C72.4177 7.18616 73.1981 7.06665 73.9644 7.06665C75.5462 7.06665 76.8608 7.39707 77.8943 8.05088C78.9348 8.7047 79.7081 9.59051 80.2213 10.6872C80.7345 11.791 80.9946 13.0072 80.9946 14.343V23.6581H76.5937V14.343C76.5937 13.6892 76.432 13.0846 76.1156 12.5503C75.7922 12.0089 75.3634 11.5801 74.815 11.2637C74.2667 10.9474 73.6621 10.7857 73.0012 10.7857C72.3404 10.7857 71.7639 10.9403 71.2226 11.2497C70.6742 11.559 70.2383 11.9738 69.9079 12.487C69.5775 13.0072 69.4088 13.5837 69.4088 14.2164V23.6581H65.0078Z"
                fill="#FFFFFB"
              />
              <path
                d="M87.1621 5.50568C86.4099 5.50568 85.7631 5.23853 85.2218 4.6972C84.6804 4.15587 84.4062 3.51611 84.4062 2.7709C84.4062 2.0257 84.6804 1.38594 85.2218 0.844613C85.7701 0.303283 86.4169 0.0361328 87.1621 0.0361328C87.9073 0.0361328 88.5611 0.303283 89.1025 0.844613C89.6508 1.38594 89.918 2.0257 89.918 2.7709C89.918 3.51611 89.6438 4.15587 89.1025 4.6972C88.5611 5.23853 87.9073 5.50568 87.1621 5.50568ZM84.9476 23.6578V7.44603H89.3766V23.6578H84.9476Z"
                fill="#FFFFFB"
              />
              <path
                d="M93.3008 23.6578V14.3427C93.3008 13.007 93.6171 11.7907 94.2499 10.687C94.8826 9.58324 95.7965 8.70446 96.9987 8.05064C98.2009 7.39683 99.6351 7.06641 101.301 7.06641C102.967 7.06641 104.43 7.39683 105.618 8.05064C106.806 8.70446 107.713 9.59027 108.346 10.687C108.978 11.7907 109.295 13.007 109.295 14.3427V23.6578H104.894V14.3427C104.894 13.6889 104.732 13.0843 104.416 12.55C104.092 12.0087 103.663 11.5798 103.115 11.2635C102.567 10.9471 101.962 10.7854 101.301 10.7854C100.64 10.7854 100.036 10.9471 99.4874 11.2635C98.9391 11.5798 98.5102 12.0087 98.1868 12.55C97.8634 13.0913 97.7088 13.6889 97.7088 14.3427V23.6578H93.3078H93.3008Z"
                fill="#FFFFFB"
              />
              <path
                d="M121.49 23.657C119.627 23.657 118.003 23.3055 116.625 22.5955C115.247 21.8854 114.172 20.9152 113.412 19.6849C112.653 18.4546 112.273 17.0767 112.273 15.5511C112.273 13.8358 112.625 12.3383 113.335 11.0658C114.045 9.79337 115.008 8.80913 116.224 8.1061C117.448 7.40308 118.826 7.05859 120.365 7.05859C122.207 7.05859 123.698 7.43823 124.844 8.20453C125.989 8.96379 126.826 9.99021 127.36 11.2697C127.895 12.5492 128.162 13.9764 128.162 15.5441C128.162 15.755 128.148 16.0081 128.127 16.2893C128.106 16.5776 128.07 16.7955 128.028 16.9431H116.949C117.117 17.597 117.413 18.1523 117.834 18.5953C118.249 19.0382 118.776 19.3756 119.409 19.5935C120.042 19.8185 120.752 19.924 121.546 19.924H126.109V23.643H121.483L121.49 23.657ZM116.927 14.0256H123.768C123.726 13.6249 123.648 13.2452 123.543 12.8937C123.437 12.5422 123.283 12.2329 123.093 11.9587C122.903 11.6845 122.678 11.4525 122.418 11.2627C122.158 11.0729 121.863 10.9252 121.518 10.8198C121.174 10.7143 120.801 10.6581 120.393 10.6581C119.859 10.6581 119.381 10.7565 118.966 10.9463C118.551 11.1361 118.2 11.3892 117.926 11.7056C117.645 12.022 117.427 12.3805 117.265 12.7883C117.103 13.189 116.991 13.6038 116.927 14.0256Z"
                fill="#FFFFFB"
              />
              <path
                d="M17.2663 58.9568C16.022 58.9568 14.9604 58.7388 14.0746 58.303C13.1888 57.8671 12.5139 57.2414 12.0499 56.4118C11.5859 55.5823 11.3609 54.6121 11.3609 53.4872C11.3609 53.2131 11.3679 52.9318 11.3961 52.6436C11.4171 52.3554 11.4523 52.0671 11.4945 51.7719C9.73691 51.7719 8.1551 51.4836 6.74202 50.9001C5.32894 50.3166 4.11973 49.5151 3.11441 48.4817C2.10908 47.4553 1.33575 46.2601 0.80145 44.9033C0.26715 43.5464 0 42.1052 0 40.5797C0 39.0541 0.26715 37.5848 0.80145 36.242C1.33575 34.8992 2.10908 33.7111 3.11441 32.6847C4.11973 31.6583 5.32894 30.8498 6.74202 30.2663C8.1551 29.6828 9.72988 29.3945 11.4593 29.3945C13.1888 29.3945 14.7635 29.6757 16.1766 30.2382C17.5897 30.8006 18.7989 31.5809 19.8042 32.5933C20.8096 33.5986 21.5829 34.7586 22.1172 36.0592C22.6515 37.3598 22.9187 38.7659 22.9187 40.2703V52.9248C22.9187 54.0286 22.7148 55.0409 22.307 55.9619C21.8993 56.8829 21.2806 57.614 20.444 58.1553C19.6074 58.6967 18.5529 58.9638 17.2663 58.9638V58.9568ZM11.4523 47.7646C11.7546 47.7646 12.0428 47.7505 12.317 47.7154C12.5982 47.6873 12.8724 47.6381 13.1536 47.5748C13.5192 47.0264 13.948 46.471 14.4402 45.9227C14.9323 45.3743 15.5017 44.833 16.1415 44.2987C16.7812 43.7714 17.5124 43.2582 18.3279 42.7731V40.2633C18.3279 39.2861 18.1592 38.3862 17.8147 37.5426C17.4702 36.706 16.9921 35.9819 16.3735 35.3632C15.7548 34.7516 15.0237 34.2665 14.1871 33.915C13.3505 33.5635 12.4436 33.3877 11.4593 33.3877C10.4751 33.3877 9.56818 33.5705 8.73158 33.9291C7.89498 34.2876 7.17087 34.7938 6.54517 35.4406C5.92651 36.0873 5.44142 36.8536 5.10397 37.7324C4.75949 38.6112 4.59076 39.5603 4.59076 40.5797C4.59076 41.5991 4.75949 42.5482 5.10397 43.4269C5.44845 44.3057 5.92651 45.072 6.54517 45.7188C7.16384 46.3656 7.89498 46.8718 8.73158 47.2303C9.56818 47.5888 10.4751 47.7716 11.4593 47.7716L11.4523 47.7646ZM16.9781 54.8863C17.428 54.8863 17.7655 54.7105 17.9904 54.359C18.2154 54.0075 18.3279 53.5505 18.3279 52.974V47.3779C17.8569 47.7787 17.4491 48.1864 17.1046 48.6012C16.7601 49.016 16.486 49.4519 16.268 49.9018C16.0571 50.3588 15.8954 50.8368 15.79 51.35C15.6845 51.8562 15.6283 52.3975 15.6283 52.974C15.6283 53.3748 15.6845 53.7192 15.804 54.0075C15.9235 54.2957 16.0852 54.5137 16.3032 54.6613C16.5141 54.8089 16.739 54.8863 16.9781 54.8863Z"
                fill="#FFFFFB"
              />
              <path
                d="M37.0409 52.0242C35.1779 52.0242 33.5539 51.6727 32.1759 50.9627C30.798 50.2526 29.7224 49.2824 28.9631 48.0521C28.2039 46.8218 27.8242 45.4439 27.8242 43.9183C27.8242 42.203 28.1757 40.7055 28.8858 39.433C29.5958 38.1606 30.559 37.1763 31.7752 36.4733C32.9915 35.7703 34.3764 35.4258 35.916 35.4258C37.758 35.4258 39.2484 35.8054 40.3943 36.5717C41.5403 37.331 42.3769 38.3574 42.9112 39.6369C43.4455 40.9164 43.7126 42.3436 43.7126 43.9113C43.7126 44.1222 43.6985 44.3753 43.6775 44.6565C43.6564 44.9377 43.6212 45.1627 43.579 45.3103H32.4993C32.6681 45.9712 32.9633 46.5195 33.3852 46.9624C33.807 47.4053 34.3272 47.7428 34.9599 47.9607C35.5927 48.1857 36.3027 48.2912 37.0971 48.2912H41.6598V52.0102H37.0339L37.0409 52.0242ZM32.4783 42.3928H39.3187C39.2765 41.992 39.1992 41.6124 39.0937 41.2679C38.9883 40.9164 38.8336 40.6071 38.6438 40.3329C38.454 40.0587 38.229 39.8267 37.9689 39.6299C37.7088 39.433 37.4135 39.2924 37.069 39.187C36.7245 39.0815 36.3519 39.0253 35.9442 39.0253C35.4099 39.0253 34.9318 39.1237 34.517 39.3135C34.1022 39.5033 33.7507 39.7564 33.4765 40.0728C33.1953 40.3891 32.9774 40.7547 32.8157 41.1554C32.654 41.5562 32.5415 41.971 32.4783 42.3928Z"
                fill="#FFFFFB"
              />
              <path
                d="M49.0234 52.025V42.7099C49.0234 41.3742 49.3398 40.1579 49.9725 39.0542C50.6052 37.9504 51.5192 37.0716 52.7214 36.4178C53.9235 35.764 55.3577 35.4336 57.0239 35.4336C58.6901 35.4336 60.1523 35.764 61.3405 36.4178C62.5286 37.0716 63.4355 37.9575 64.0682 39.0542C64.7009 40.1579 65.0173 41.3742 65.0173 42.7099V52.025H60.6163V42.7099C60.6163 42.0561 60.4546 41.4515 60.1383 40.9102C59.8149 40.3688 59.386 39.94 58.8377 39.6236C58.2893 39.3073 57.6847 39.1456 57.0239 39.1456C56.363 39.1456 55.7584 39.3073 55.2101 39.6236C54.6617 39.94 54.2329 40.3688 53.9095 40.9102C53.5861 41.4515 53.4314 42.0491 53.4314 42.7099V52.025H49.0305H49.0234Z"
                fill="#FFFFFB"
              />
              <path
                d="M73.584 33.8729C72.8317 33.8729 72.185 33.6057 71.6436 33.0644C71.0953 32.5231 70.8281 31.8833 70.8281 31.1381C70.8281 30.3929 71.1023 29.7531 71.6436 29.2118C72.185 28.6705 72.8388 28.4033 73.584 28.4033C74.3292 28.4033 74.983 28.6705 75.5243 29.2118C76.0657 29.7531 76.3398 30.3929 76.3398 31.1381C76.3398 31.8833 76.0657 32.5231 75.5243 33.0644C74.976 33.6057 74.3292 33.8729 73.584 33.8729ZM71.3695 52.025V35.8132H75.7985V52.025H71.3695Z"
                fill="#FFFFFB"
              />
              <path
                d="M90.1137 52.4117C88.4476 52.4117 87.0134 52.0813 85.8112 51.4275C84.609 50.7737 83.6951 49.8949 83.0624 48.7911C82.4296 47.6874 82.1133 46.4712 82.1133 45.1354V35.8203H86.5142V45.1354C86.5142 45.7892 86.6759 46.3938 86.9923 46.9281C87.3157 47.4695 87.7445 47.8983 88.2929 48.2147C88.8412 48.531 89.4458 48.6927 90.1067 48.6927C90.7675 48.6927 91.3721 48.531 91.9205 48.2147C92.4689 47.8983 92.8977 47.4695 93.2211 46.9281C93.5445 46.3868 93.6992 45.7892 93.6992 45.1354V35.8203H98.1001V45.1354C98.1001 46.4712 97.7837 47.6874 97.151 48.7911C96.5183 49.8949 95.6114 50.7737 94.4233 51.4275C93.2352 52.0813 91.7939 52.4117 90.1067 52.4117H90.1137Z"
                fill="#FFFFFB"
              />
              <path
                d="M104.531 52.0253V48.3063H112.525C112.785 48.3063 113.01 48.25 113.214 48.1446C113.417 48.0391 113.579 47.8915 113.699 47.7017C113.818 47.5118 113.874 47.3009 113.874 47.0689C113.874 46.8158 113.818 46.5909 113.699 46.401C113.579 46.2112 113.417 46.0566 113.214 45.9371C113.01 45.8175 112.778 45.7613 112.525 45.7613H109.445C108.398 45.7613 107.449 45.5996 106.605 45.2692C105.761 44.9388 105.087 44.4115 104.58 43.6803C104.081 42.9492 103.828 41.9931 103.828 40.805C103.828 39.891 104.06 39.0615 104.517 38.3092C104.974 37.557 105.6 36.9524 106.38 36.4954C107.16 36.0384 108.025 35.8135 108.967 35.8135H116.644V39.5325H109.389C109.066 39.5325 108.784 39.6379 108.538 39.8488C108.292 40.0598 108.166 40.3339 108.166 40.6784C108.166 41.0229 108.285 41.2971 108.517 41.522C108.749 41.747 109.045 41.8525 109.382 41.8525H112.461C113.635 41.8525 114.655 42.0282 115.512 42.3797C116.37 42.7313 117.031 43.2726 117.502 44.0178C117.973 44.763 118.205 45.7332 118.205 46.9424C118.205 47.8774 117.966 48.7281 117.502 49.5014C117.031 50.2747 116.398 50.8864 115.611 51.3433C114.816 51.8003 113.931 52.0253 112.946 52.0253H104.531Z"
                fill="#FFFFFB"
              />
              <path
                d="M126.011 52.4123C125.196 52.4123 124.5 52.117 123.909 51.5405C123.319 50.957 123.023 50.261 123.023 49.4595C123.023 48.6581 123.319 47.9621 123.909 47.3786C124.5 46.7951 125.196 46.5068 126.011 46.5068C126.827 46.5068 127.523 46.7951 128.113 47.3786C128.704 47.9621 128.999 48.6581 128.999 49.4595C128.999 49.9868 128.866 50.4789 128.598 50.9359C128.331 51.3929 127.973 51.7514 127.523 52.0186C127.073 52.2857 126.567 52.4193 126.011 52.4193V52.4123Z"
                fill="#FFFFFB"
              />
            </svg>
          </Link>
          <ul className=" rounded-[--58px] p-[--6px] bg-[#3D3E3D] bg-opacity-60 flex">
            <li className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#2A2B2A] transition-colors duration-200 cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#2A2B2A] transition-colors duration-200 cursor-pointer">
              <Link href={"/modules"}>Modules</Link>
            </li>
            <li className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#2A2B2A] transition-colors duration-200 cursor-pointer">
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#2A2B2A] transition-colors duration-200 cursor-pointer">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#2A2B2A] transition-colors duration-200 cursor-pointer">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
          <div className=" rounded-[--58px] p-[--6px] bg-[#3D3E3D] bg-opacity-60 flex">
            <Link
              href={"signin"}
              className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] bg-[#2A2B2A] rounded-[--30px] border-[1px] border-[#fffffb]"
            >
              Log In
            </Link>
            <Link
              href={"#"}
              className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--30px]"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className=" absolute  -right-1/4 -top-[550px]">
          <svg
            className=" w-[clamp(10px,_calc(78.333vw_+_0.1rem),_3000px)] h-[clamp(100vh,_131.26vh,_140vh)] animate-rotateRight"
            viewBox="0 0 1128 1114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1101.06 535.793C1100 518.655 1110.12 497.853 1107.73 480.848C1095.4 392.844 1061.58 306.567 1005.09 230.058C991.057 211.06 976.04 193.221 960.16 176.56C948.372 164.193 924.283 159.34 911.311 148.22C898.342 137.103 889.856 114.073 875.822 104.332C769.101 30.2563 640.034 -3.07117 512.731 7.97746C495.863 9.44138 478.51 23.8287 461.973 27.4623C445.162 31.1563 421.507 23.4246 404.995 28.2859C344.742 46.0249 286.516 74.4257 233.058 113.901C126.777 192.383 56.7861 301.76 26.3272 420.477C22.1362 436.811 29.7446 457.537 27.7991 474.288C25.8095 491.419 10.6518 511.224 9.71907 528.445C3.0254 652.029 37.6391 778.592 116.901 885.929C159.6 943.751 211.441 990.832 268.957 1026.65C283.599 1035.77 309.051 1034.66 324.174 1042.96C338.924 1051.05 351.483 1069.11 367.243 1075C402.675 1088.24 439.318 1097.78 476.545 1103.55C573.741 1118.59 674.906 1107.82 768.875 1069.55C784.412 1063.22 796.391 1046.19 811.258 1038.41C826.131 1030.64 846.973 1030.53 861.052 1021.4C870.475 1015.28 879.772 1008.85 888.929 1002.09C1026.69 900.355 1103.48 746.714 1112.24 588.109C1113.17 571.262 1102.1 552.634 1101.06 535.793ZM928.696 127.94C915.587 116.703 894.191 112.87 880.055 102.955C772.424 27.4656 641.91 -6.62885 513.143 4.37751C495.611 5.87605 473.426 -2.40316 456.241 1.37308C439.528 5.04521 423.482 19.2528 407.04 23.9908C345.316 41.7775 285.652 70.6499 230.949 111.045C124.434 189.7 54.135 299.188 23.2763 418.088C18.8445 435.164 3.30105 453.683 1.26582 471.207C-0.704412 488.171 7.38052 507.972 6.35794 525.019C-1.16432 650.423 33.5811 779.074 114.045 888.038C157.882 947.402 211.296 995.517 270.58 1031.82C285.041 1040.68 296.459 1058.22 311.326 1066.38C326.825 1074.88 350.998 1072.77 367.576 1078.91C402.745 1091.93 439.089 1101.34 476.002 1107.06C572.511 1121.99 672.914 1111.64 766.413 1074.37C782.614 1067.91 808.18 1070.16 823.635 1062.08C839.089 1054 851.83 1031.75 866.39 1022.15C874.709 1016.67 882.928 1010.93 891.038 1004.94C1029 903.069 1106.2 749.471 1115.65 590.695C1116.69 573.154 1128.81 551.684 1127.72 534.145C1126.65 516.818 1113.68 497.727 1111.28 480.534C1098.88 391.901 1064.84 305.003 1007.94 227.949C993.266 208.075 977.517 189.462 960.834 172.13C948.865 159.697 941.799 139.172 928.696 127.94Z"
              fill="#5EA95B"
            />
          </svg>
          <svg
            className=" w-[70%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotateLeftTransform"
            viewBox="0 0 941 946"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M336.053 33.1191C322.276 37.6661 303.105 33.8687 289.722 39.4694C220.463 68.4542 157.227 114.616 106.845 177.215C94.3344 192.759 82.9836 208.86 72.781 225.415C65.2074 237.704 66.4165 258.431 60.1167 271.419C53.8178 284.404 36.8216 296.286 31.8766 309.845C-5.72924 412.961 -5.23861 525.583 31.1339 627.233C35.9532 640.701 51.4369 651.791 57.9581 664.523C64.5876 677.467 63.3509 698.456 70.87 710.904C98.3069 756.328 134.021 797.806 177.76 833.008C264.718 902.995 369.126 936.692 472.674 936.081C486.922 935.997 502.224 925.328 516.33 923.32C530.755 921.266 550.195 929.398 564.467 926.461C666.888 905.385 762.871 849.916 833.553 762.093C871.63 714.783 898.966 662.308 915.878 607.617C920.184 593.695 913.813 573.135 917.343 558.996C920.787 545.205 932.845 531.064 934.273 516.921C937.481 485.125 937.412 453.132 934.124 421.475C925.538 338.823 895.006 258.472 843.554 189.907C835.046 178.57 818.55 172.441 809.004 161.963C799.455 151.48 794.896 134.472 784.407 124.93C777.387 118.544 770.131 112.33 762.638 106.3C649.92 15.5804 507.882 -14.1652 376.401 12.7502C362.435 15.6092 349.59 28.6511 336.053 33.1191ZM39.8111 261.569C33.4445 274.695 34.9076 293 29.8425 306.68C-8.72334 410.844 -8.54882 524.814 28.1038 627.669C33.0941 641.673 31.0942 661.579 37.8713 674.811C44.4616 687.678 59.5177 697.738 66.9209 710.155C94.713 756.771 131.121 799.323 175.879 835.345C263.029 905.487 367.595 939.411 471.38 939.087C486.285 939.041 504.755 947.763 519.511 945.662C533.796 943.629 548.238 932.77 562.388 929.944C666.474 909.154 764.136 853.129 835.89 763.974C874.983 715.402 902.825 661.421 919.759 605.18C923.889 591.461 935.768 578.364 939.239 564.463C942.857 549.973 935.943 530.673 937.398 515.809C940.483 484.274 940.368 452.555 937.107 421.165C928.582 339.097 898.556 259.279 848.021 190.883C839.265 179.032 835.611 157.658 825.688 146.765C815.766 135.873 794.844 130.242 783.874 120.406C777.607 114.787 771.155 109.303 764.519 103.962C651.643 13.1158 509.551 -16.9765 377.781 9.40989C363.224 12.3249 343.078 7.03484 328.979 11.688C315.051 16.2851 302.237 30.9845 288.705 36.6424C218.944 65.81 155.248 112.289 104.508 175.334C91.4203 191.595 79.5938 208.462 69.0154 225.817C61.4266 238.268 46.1747 248.45 39.8111 261.569Z"
              fill="#E1C655"
            />
          </svg>
          <svg
            className=" w-[55%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotateRightTransform"
            viewBox="0 0 833 835"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M490.002 814.505C477.859 817.103 465.853 826.504 453.485 827.614C441.169 828.72 428.697 829.284 416.094 829.284C301.417 829.284 197.661 782.549 122.824 707.079C48.8082 632.438 3.09375 529.702 3.09375 416.284C3.09375 388.397 5.85782 361.154 11.1269 334.817C13.658 322.165 27.085 309.088 30.4244 296.625C33.6962 284.415 30.2633 268.106 35.1592 256.451C97.6357 107.727 244.668 3.28418 416.094 3.28418C597.74 3.28418 751.996 120.552 807.288 283.51C811.402 295.635 806.483 312.806 809.352 325.284C812.223 337.764 824.174 351.06 825.786 363.764C827.969 380.963 829.094 398.492 829.094 416.284C829.094 604.603 703.053 763.483 530.727 813.168C518.418 816.717 502.53 811.826 490.002 814.505ZM828.844 320.801C831.74 333.394 826.867 348.899 828.546 361.711C830.886 379.571 832.094 397.786 832.094 416.284C832.094 605.718 705.475 765.578 532.254 815.85C519.775 819.471 506.892 831.345 494.186 834.063C481.316 836.816 463.559 829.814 450.442 830.886C439.115 831.812 427.659 832.284 416.094 832.284C300.584 832.284 196.071 785.206 120.693 709.191C46.1435 634.011 0.09375 530.525 0.09375 416.284C0.09375 387.117 3.09539 358.652 8.80662 331.179C11.3862 318.771 7.82567 303.691 11.1059 291.449C14.5154 278.724 27.4546 267.007 32.5702 254.867C95.6014 105.288 243.585 0.28418 416.094 0.28418C599.64 0.28418 755.422 119.154 810.657 284.11C814.762 296.369 825.946 308.202 828.844 320.801Z"
              fill="#E9313E"
            />
          </svg>
          <span className="text-[--58px] font-bold absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-full">Lorem Epsum</span>
        </div>
        <div className=" h-[100vh] w-full flex items-center">
          <p className=" text-[--32px] font-bold w-fit text-[#FFFFFB] ml-[--187px]">
            The Last Software You Will Ever Buy..
          </p>
        </div>
        <div className=" pt-[--sy-136px]">
          <div className="relative w-fit mx-auto text-white mb-[--sy-50px]">
            <div className=" flex flex-col place-items-center">
              <p className=" uppercase text-center text-[--128px] font-bold">
                From Staff
              </p>
              <p className=" uppercase text-center text-[--128px] font-bold ">
                To Software
              </p>
            </div>
            <p className="text-[--23px] bg-[radial-gradient(closest-side,_rgba(94,_169,_91,_.4)_0%,_rgba(94,_169,_91,_0)_100%)] p-[3rem] w-full text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-1">
              By shifting from traditional staffing to advanced software
              solutions, <br /> businesses can reduce costs, enhance efficiency,
              and focus resources <br /> on growth and innovation.
            </p>
          </div>
          <div className=" h-[--sy-227px] w-[1px] bg-white mx-auto mb-[--sy-50px]"></div>
          <span className=" text-[--24px] block w-full mx-auto text-center mb-[--sy-50px]">
            Imagine this
          </span>
          <p className=" font-semibold text-[--36px] text-center mb-[--sy-50px]">
            You run a Marketing Agency and have done well for <br /> yourself.
            You have 10 clients that pay a recurring <br /> monthly income of
            $40,000.
          </p>
          <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-80px]"></div>
          <div>
            <h2 className=" text-center text-[--102px] w-fit mx-auto font-bold uppercase mb-[--sy-40px]">
              How many employees <br /> do you need?
            </h2>
            <span className=" text-[--24px] block w-full mx-auto text-center mb-[--sy-100px]">
              Keep Scrolling
            </span>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-44px]"></div>
          </div>
          <div>
            <h2 className=" text-center text-[--102px] w-fit mx-auto font-bold uppercase mb-[--sy-100px]">
              There’s more
            </h2>
            <div className=" flex  font-extrabold mx-auto justify-between gap-[--18px] w-[1200px] mb-[--18px]">
              <div className=" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2]">
                <div className=" group-hover:px-[--21px] group-hover:border-l-[1px] group-hover:border-l-[#FFFFFB] invisible group-hover:visible h-[--sy-243px] overflow-hidden">
                  <div className=" flex flex-col w-0 group-hover:w-auto overflow-hidden">
                    <span className=" px-[--12px] py-[--sy-50px] border-b-[1px] border-b-[#FFFFFB] ">
                      3 EMPLOYEES
                    </span>
                    <span className=" px-[--12px] py-[--sy-50px] ">
                      3 EMPLOYEES
                    </span>
                  </div>
                </div>
                <div className="text-[--36px] py-[--96px]   bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  SEO
                  <br />
                  SPECIALIST
                </div>
              </div>
              <div className=" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2]">
                <div className="text-[--36px] py-[--96px]   bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  SOCIAL MEDIA <br />
                  SPECIALIST
                </div>
                <div className=" group-hover:px-[--21px] group-hover:border-r-[1px] group-hover:border-r-[#FFFFFB] invisible group-hover:visible h-[--sy-243px] overflow-hidden">
                  <div className=" flex flex-col w-0 group-hover:w-auto overflow-hidden">
                    <span className=" px-[--12px] py-[--sy-50px] border-b-[1px] border-b-[#FFFFFB]">
                      3 EMPLOYEES
                    </span>
                    <span className=" px-[--12px] py-[--sy-50px] ">
                      3 EMPLOYEES
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2]">
                <div className="text-[--36px] py-[--96px]   bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  GRAPHIC <br />
                  DESIGNER
                </div>
                <div className=" group-hover:px-[--21px] group-hover:border-r-[1px] group-hover:border-r-[#FFFFFB] invisible group-hover:visible h-[--sy-243px] overflow-hidden">
                  <div className=" flex flex-col w-0 group-hover:w-auto overflow-hidden">
                    <span className=" px-[--12px] py-[--sy-50px] border-b-[1px] border-b-[#FFFFFB]">
                      3 EMPLOYEES
                    </span>
                    <span className=" px-[--12px] py-[--sy-50px] ">
                      3 EMPLOYEES
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex  font-extrabold mx-auto justify-between gap-[--18px] w-[1200px] mb-[--sy-80px]">
              <div className=" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2]">
                <div className=" group-hover:px-[--21px] group-hover:border-l-[1px] group-hover:border-l-[#FFFFFB] invisible group-hover:visible h-[--sy-243px] overflow-hidden">
                  <div className=" flex flex-col w-0 group-hover:w-auto overflow-hidden">
                    <span className=" px-[--12px] py-[--sy-50px] border-b-[1px] border-b-[#FFFFFB] ">
                      3 EMPLOYEES
                    </span>
                    <span className=" px-[--12px] py-[--sy-50px] ">
                      3 EMPLOYEES
                    </span>
                  </div>
                </div>
                <div className="text-[--36px] py-[--96px]   bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  CONTENT
                  <br />
                  WRITER
                </div>
              </div>
              <div className=" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2]">
                <div className="text-[--36px] py-[--96px]   bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  PROJECT
                  <br />
                  MANAGER
                </div>
                <div className=" group-hover:px-[--21px] group-hover:border-r-[1px] group-hover:border-r-[#FFFFFB] invisible group-hover:visible h-[--sy-243px] overflow-hidden">
                  <div className=" flex flex-col w-0 group-hover:w-auto overflow-hidden">
                    <span className=" px-[--12px] py-[--sy-50px] border-b-[1px] border-b-[#FFFFFB]">
                      3 EMPLOYEES
                    </span>
                    <span className=" px-[--12px] py-[--sy-50px] ">
                      3 EMPLOYEES
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2]">
                <div className="text-[--36px] py-[--96px]   bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  HR <br />
                  SPECIALIST
                </div>
                <div className=" group-hover:px-[--21px] group-hover:border-r-[1px] group-hover:border-r-[#FFFFFB] invisible group-hover:visible h-[--sy-243px] overflow-hidden">
                  <div className=" flex flex-col w-0 group-hover:w-auto overflow-hidden">
                    <span className=" px-[--12px] py-[--sy-50px] border-b-[1px] border-b-[#FFFFFB]">
                      3 EMPLOYEES
                    </span>
                    <span className=" px-[--12px] py-[--sy-50px] ">
                      3 EMPLOYEES
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <div className=" rounded-[--58px] p-[--6px] bg-[#3D3E3D] bg-opacity-60 flex mx-auto w-fit mb-[--sy-95px]">
              <button className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] bg-[#5EA95B6E] rounded-[--30px]">
                Staff
              </button>
              <button className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--30px]">
                Teams
              </button>
            </div>
            <p className=" text-[--128px] w-fit text-center mx-auto">
              That’s a total of
            </p>
            <span className=" font-bold text-[--175px] mb-[--sy-118px] block w-fit text-center mx-auto">
              $36,000
            </span>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <span className=" text-[--24px] mb-[--sy-38px] block w-fit text-center mx-auto">
              That’s not all
            </span>
            <p className=" text-[--51px] font-bold mb-[--sy-64px] w-fit mx-auto">
              Pick your Struggle
            </p>
            <div className=" relative mx-auto max-w-[clamp(50vw,_calc(68.5vw_+_0.1rem),_100vw)] mb-[--sy-170px]">
              <div className="py-[--sy-29px]  px-[--50px] shadow-[0px_-16.72px_29.48px_0px_#00000047] bg-[#FFFFFB38] group relative hover:z-10 hover:bg-[#5EA95B] h-[clamp(40vh,_calc(52.37vh_+_0.1rem),_70vh)] hover:-translate-y-[--sy-40px] rounded-[--27px]">
                <p className=" text-[--36px] font-extrabold text-[#2A2B2A7D] ml-auto w-fit group-hover:text-white mb-20">
                  NON-US BASED <br /> FREELANCERS
                </p>
                <p className=" text-[--24px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis nihil fuga perspiciatis magnam dolore ut commodi
                  natus ullam, fugiat soluta, minima necessitatibus! Non labore
                  earum numquam quibusdam, nobis voluptate hic.
                </p>
              </div>
              <div className="absolute top-[clamp(10vh,_calc(14vh_+_0.1rem),_40vh)] py-[--sy-29px] px-[--50px] inset-0 bg-[#92AF8E] group hover:bg-[#5EA95B] shadow-[0px_-16.72px_29.48px_0px_#00000047] h-[clamp(40vh,_calc(52.37vh_+_0.1rem),_70vh)] hover:-translate-y-[--sy-40px] rounded-[--27px]">
                <p className=" text-[--36px] font-extrabold text-white ml-auto w-fit group-hover:text-white mb-20">
                  IN HOUSE <br />
                  DESIGNERS
                </p>
                <p className=" text-[--24px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis nihil fuga perspiciatis magnam dolore ut commodi
                  natus ullam, fugiat soluta, minima necessitatibus! Non labore
                  earum numquam quibusdam, nobis voluptate hic.
                </p>
              </div>
            </div>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <h2 className=" text-[--102px] uppercase w-fit mx-auto mb-[--sy-100px] font-bold">
              {" "}
              no one cares
            </h2>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <p className="mb-[--sy-64px] text-[--36px] font-bold w-fit mx-auto text-center">
              You can replace all this with just yourself and <br /> genius, get
              higher quality work in less time than <br /> it would take the 12
              employees combined
            </p>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-80px] "></div>
            <div className=" w-full mb-[--sy-196px]">
              <h3 className=" text-[--34px] mx-auto w-fit mb-[--sy-20px] font-bold">
                SEO module
              </h3>
              <p className=" text-[--17px] mx-auto w-fit mb-[--sy-40px]">
                Lorem ipsum dolor sit amet consectetur. Habitant quis turpis.
              </p>
              <Image
                src={img}
                alt="SEO Module"
                className="w-[clamp(30vw,_36.25vw,_40vw)]  mx-auto"
              />
            </div>
            <div className=" w-full mb-[--sy-196px]">
              <h3 className=" text-[--34px] mx-auto w-fit mb-[--sy-20px] font-bold">
                SEO module
              </h3>
              <p className=" text-[--17px] mx-auto w-fit mb-[--sy-40px]">
                Lorem ipsum dolor sit amet consectetur. Habitant quis turpis.
              </p>
              <Image
                src={img}
                alt="SEO Module"
                className="w-[clamp(30vw,_36.25vw,_40vw)]  mx-auto"
              />
            </div>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-64px]"></div>
            <p className="mb-[--sy-64px] text-[--36px] font-extrabold w-fit mx-auto text-center">
              Genius doesn't just work for a <br /> marketing agency; it works
              for any <br /> business in the world.
            </p>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-64px]"></div>
            <div className="py-[--sy-50px] px-[--54px] rounded-[--28px] bg-[#2A2B2A61] max-w-[clamp(50vw,_58.39vw,_65vw)] mx-auto mb-[--sy-251px]">
              <div className=" flex justify-between items-center mb-[--sy-64px]">
                <p className=" text-[--32px] font-extrabold uppercase">
                  Master every department of your <br /> business with Machine
                  genius bundles!
                </p>
                <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--22px] font-bold">
                  Shuffle Business
                </button>
              </div>
              <div className=" flex justify-between items-center w-full">
                <div className="flex gap-[--32px] w-full flex-wrap">
                  <div className="rounded-[--32px] bg-[#FFFFFB] text-[#2a2b2a] py-[--sy-48px] px-[--48px] hover:bg-[#5EA95B] w-[calc(50%_-_var(--32px))]">
                    <h4 className="text-[--32px] font-bold mb-[--sy-35px] text-center">
                      SEO <br />
                      MODULE
                    </h4>
                    <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !text-white mx-auto w-fit block">
                      Check Module
                    </button>
                  </div>
                  <div className="rounded-[--32px] bg-[#FFFFFB] text-[#2a2b2a] py-[--sy-48px] px-[--48px] hover:bg-[#5EA95B] w-[calc(50%_-_var(--32px))]">
                    <h4 className="text-[--32px] font-bold mb-[--sy-35px] text-center">
                      SEO <br />
                      MODULE
                    </h4>
                    <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !text-white mx-auto w-fit block">
                      Check Module
                    </button>
                  </div>
                  <div className="rounded-[--32px] bg-[#FFFFFB] text-[#2a2b2a] py-[--sy-48px] px-[--48px] hover:bg-[#5EA95B] w-[calc(50%_-_var(--32px))]">
                    <h4 className="text-[--32px] font-bold mb-[--sy-35px] text-center">
                      SEO <br />
                      MODULEsadwqe
                    </h4>
                    <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !text-white mx-auto w-fit block">
                      Check Module
                    </button>
                  </div>
                  <div className="rounded-[--32px] bg-[#FFFFFB] text-[#2a2b2a] py-[--sy-48px] px-[--48px] hover:bg-[#5EA95B] w-[calc(50%_-_var(--32px))]">
                    <h4 className="text-[--32px] font-bold mb-[--sy-35px] text-center">
                      SEO <br />
                      MODULE
                    </h4>
                    <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !text-white mx-auto w-fit block">
                      Check Module
                    </button>
                  </div>
                </div>
                <div className=" px-[--60px] rounded-[--23px] bg-[#2a2b2a] flex flex-col justify-evenly self-stretch">
                  <div>
                    <h3 className=" font-extrabold text-[--46px] mb-[--sy-35px] text-center mx-auto w-fit">
                      SEO <br />
                      Business
                    </h3>
                    <p className=" font-medium text-[--15px] text-center w-fit mx-auto">
                      Lorem ipsum dolor sit amet consectetur. Nec <br /> id sit
                      velit quis purus. Cras cursus aliquet <br /> quam morbi
                      tristique.
                    </p>
                  </div>
                  <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !text-white mx-auto w-fit block">
                    Check Module
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className=" w-fit mx-auto ">
                <h2 className=" uppercase text-[--60px] font-extrabold mx-auto w-fit text-center mb-[--sy-18px]">
                  Meet Your New <br /> Business Powerhouse
                </h2>
                <div className="relative mb-[--sy-40px]">
                  <span className="uppercase text-[--35px] font-extrabold block w-fit mx-auto">
                    {selectedWheel}
                  </span>
                  <svg
                  onMouseOver={()=>setLeftArrowHovered(true)}
                  onMouseLeave={()=>setLeftArrowHovered(false)}
                    onClick={()=>{
                      setSelectedNum(prev => {
                        if (prev > -3) {
                          return prev - 1
                        } else {
                        return prev }
                      })
                      console.log(selectedNum);
                      
                    }}
                    className=" absolute left-0 top-1/2 -translate-y-1/2 translate-x-full w-[--14px] cursor-pointer"
                    viewBox="0 0 14 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2676 2.12695L13.2676 25.5276C13.2671 25.7645 13.2234 25.9968 13.1414 26.1993C13.0593 26.4019 12.9419 26.5671 12.8017 26.6771C12.6616 26.7872 12.5041 26.8379 12.3462 26.8239C12.1882 26.8099 12.0358 26.7316 11.9053 26.5975L0.618555 14.8972C0.150587 14.4123 0.150587 13.2449 0.618555 12.7587L11.9053 1.05832C12.0355 0.922892 12.188 0.843472 12.3462 0.828692C12.5044 0.813912 12.6623 0.864337 12.8027 0.974489C12.9432 1.08464 13.0607 1.25031 13.1427 1.45349C13.2246 1.65667 13.2678 1.88959 13.2676 2.12695Z"
                      fill={leftArrowHovered ? "#2a2b2a" : "#FFFFFB"}
                      fill-opacity="0.34"
                    />
                  </svg>
                  <svg
                  onMouseOver={()=>setRightArrowHovered(true)}
                  onMouseLeave={()=>setRightArrowHovered(false)}
                    onClick={()=>setSelectedNum((prev) => {
                      if (prev < 1) {
                        return prev + 1
                      } else {
                      return prev}
                    })}
                    className=" absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full w-[--14px] cursor-pointer"
                    viewBox="0 0 14 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.267578 25.5254L0.267578 2.12473C0.268074 1.88781 0.311714 1.65557 0.393798 1.45303C0.475883 1.25048 0.593302 1.08529 0.733422 0.975237C0.87354 0.865185 1.03105 0.814438 1.189 0.828457C1.34695 0.842474 1.49935 0.920729 1.62981 1.0548L12.9166 12.7551C13.3846 13.24 13.3846 14.4075 12.9166 14.8937L1.62981 26.594C1.49963 26.7295 1.34714 26.8089 1.18893 26.8237C1.03072 26.8384 0.872831 26.788 0.732415 26.6779C0.592 26.5677 0.474428 26.402 0.392477 26.1989C0.310526 25.9957 0.267328 25.7627 0.267578 25.5254Z"
                      fill={rightArrowHovered ? "#2a2b2a" : "#FFFFFB"}
                      fill-opacity="0.34"
                    />
                  </svg>
                </div>
                <p className=" text-[--20px] font-medium mx-auto w-fit text-center mb-[--sy-136px]">
                  Lorem ipsum dolor sit amet consectetur. Nec id sit velit quis
                  purus. <br /> Cras cursus aliquet quam morbi tristique odio
                  platea non netus. Turpis <br /> nisi et at tempus duis in
                  sociis.
                </p>
              </div>
              <div className=" w-full  overflow-hidden pt-40">
                <div className=" w-full relative">
                  <svg
                    className=" w-full"
                    viewBox="0 0 2087 2086"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_bd_3307_8969)">
                      <ellipse
                        cx="1043.27"
                        cy="1042.25"
                        rx="963"
                        ry="962.5"
                        transform="rotate(-0.0340149 1043.27 1042.25)"
                        fill="#FFFFFB"
                        fill-opacity="0.49"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M2005.77 1041.68C2006.09 1572.97 1575.42 2003.93 1043.84 2004.25C512.269 2004.56 81.088 1574.12 80.7726 1042.82C80.4572 511.522 511.127 80.5642 1042.7 80.2486C1574.28 79.933 2005.46 510.379 2005.77 1041.68Z"
                        stroke="#FFFFFB"
                        shape-rendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bd_3307_8969"
                        x="0.372459"
                        y="0.848534"
                        width="2085.8"
                        height="2084.8"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="20.95"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_3307_8969"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="39.95" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_3307_8969"
                          result="effect2_dropShadow_3307_8969"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_3307_8969"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div
                    className=" absolute w-[clamp(90vw,_110.625vw,_3000px)] h-[clamp(90vw,_110.625vw,_3000px)] rounded-full border-[2px] border-[#FFFFFB] top-0 left-1/2"
                    style={{
                      transform: `translateX(-50%) ${
                        selectedWheel == "hr"
                          ? "rotate(0)"
                          : selectedWheel == "video"
                          ? "rotate(-31deg)"
                          : selectedWheel == "seo"
                          ? "rotate(31deg)"
                          : selectedWheel == "social"
                          ? "rotate(57deg)"
                          : "rotate(90deg)"
                      }`,
                    }}
                  >
                    <div className=" flex flex-col gap-y-[--sy-12px] absolute -top-[--18px] left-1/2 -translate-x-1/2 z-[20]">
                      <span className=" w-[--36px] h-[--36px] rounded-full bg-white"></span>
                      <span className=" text-[--32px] font-medium">HR</span>
                    </div>
                    <div className=" flex flex-col gap-y-[--sy-12px] absolute place-items-center top-[5.8%] left-[70%] z-[20] uppercase rotate-[31deg]">
                      <span className=" w-[--36px] h-[--36px] rounded-full bg-white"></span>
                      <span className=" text-[--32px] font-medium">
                        Video editing
                      </span>
                    </div>
                    <div className=" flex flex-col gap-y-[--sy-12px] absolute place-items-center top-[5.8%] right-[73.5%] z-[20] uppercase -rotate-[31deg]">
                      <span className=" w-[--36px] h-[--36px] rounded-full bg-white"></span>
                      <span className=" text-[--32px] font-medium">seo</span>
                    </div>
                    <div className=" flex flex-col gap-y-[--sy-12px] absolute place-items-center top-[20%] right-[85.1%] z-[20] uppercase -rotate-[57deg]">
                      <span className=" w-[--36px] h-[--36px] rounded-full bg-white"></span>
                      <span className=" text-[--32px] font-medium">
                        social media
                      </span>
                    </div>
                    <div className=" flex flex-col gap-y-[--sy-12px] place-items-center absolute top-1/2 -translate-y-1/2 right-[calc(100%_-_var(--26px))] translate-x-1/2 -rotate-[90deg] z-[20] uppercase">
                      <span className=" w-[--36px] h-[--36px] rounded-full bg-white"></span>
                      <span className=" text-[--32px] font-medium">
                        content
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
