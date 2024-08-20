"use client";
import React, { useState } from "react";
import img from "../../../../public/blogDet.png";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ params }: { params: { blogDetails: string } }) => {
  console.log(params);
  const [darkMode, setDarkMode] = useState(false);
  function toggleDark(): void {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"} relative`}>
      {darkMode && (
        <Link href={"/"} className=" w-fit absolute top-[56px] left-[--98px] z-[51]">
          <svg
           className=' w-[--128px]'
            viewBox="0 0 129 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.11719 23.6576V14.0262C1.11719 12.7537 1.42652 11.5867 2.04518 10.5321C2.66384 9.47056 3.55669 8.62693 4.72371 8.00827C5.89073 7.38257 7.29679 7.07324 8.9489 7.07324C9.74332 7.07324 10.4745 7.16464 11.1494 7.34039C11.8243 7.52318 12.45 7.7833 13.0264 8.12075C13.6029 8.4582 14.1091 8.86596 14.538 9.32996H14.5731C15.023 8.86596 15.5363 8.4582 16.1127 8.12075C16.6892 7.7833 17.3219 7.52318 18.0109 7.34039C18.6928 7.15761 19.431 7.07324 20.2254 7.07324C21.8705 7.07324 23.2836 7.38257 24.4506 8.00827C25.6176 8.63396 26.5105 9.47759 27.1292 10.5321C27.7478 11.5867 28.0571 12.7607 28.0571 14.0262V23.6576H23.6562V14.0262C23.6562 13.4356 23.5015 12.8943 23.1922 12.4022C22.8829 11.9101 22.4681 11.5234 21.9549 11.2281C21.4417 10.9329 20.8652 10.7852 20.2184 10.7852C19.5716 10.7852 19.0233 10.9329 18.503 11.2281C17.9758 11.5234 17.561 11.9171 17.2516 12.4022C16.9423 12.8873 16.7876 13.4286 16.7876 14.0262V23.6576H12.3867V14.0262C12.3867 13.4356 12.232 12.8943 11.9227 12.4022C11.6134 11.9171 11.1986 11.5234 10.6854 11.2281C10.1722 10.9329 9.59568 10.7852 8.9489 10.7852C8.30211 10.7852 7.75375 10.9329 7.23351 11.2281C6.70624 11.5234 6.29146 11.9171 5.98213 12.4022C5.6728 12.8873 5.51813 13.4286 5.51813 14.0262V23.6576H1.11719Z"
              fill="#2A2B2A"
            />
            <path
              d="M38.456 24.0375C36.9585 24.0375 35.6509 23.6578 34.5401 22.8915C33.4294 22.1323 32.5646 21.1058 31.953 19.8263C31.3414 18.5468 31.0391 17.1267 31.0391 15.5801C31.0391 14.0334 31.3835 12.55 32.0795 11.2564C32.7755 9.96287 33.7738 8.94349 35.0815 8.19125C36.3891 7.43901 37.9498 7.06641 39.7706 7.06641C41.5915 7.06641 43.1663 7.44604 44.4247 8.21234C45.6901 8.97161 46.6533 10.0051 47.3141 11.2986C47.975 12.5922 48.3124 14.0193 48.3124 15.5871V23.6649H43.9115V20.9652H43.8482C43.5248 21.5347 43.1241 22.0549 42.646 22.526C42.1609 22.9899 41.5774 23.3626 40.8955 23.6367C40.2136 23.9109 39.398 24.0515 38.456 24.0515V24.0375ZM39.7074 20.3184C40.5651 20.3184 41.3032 20.1075 41.9219 19.6857C42.5406 19.2639 43.0186 18.6874 43.349 17.9563C43.6795 17.2251 43.8482 16.4167 43.8482 15.5238C43.8482 14.631 43.6795 13.8365 43.349 13.1265C43.0186 12.4164 42.5406 11.847 41.9219 11.4252C41.3032 11.0034 40.5651 10.7924 39.7074 10.7924C38.8497 10.7924 38.0764 11.0034 37.4436 11.4252C36.8109 11.847 36.3328 12.4164 35.9954 13.1265C35.665 13.8365 35.4962 14.638 35.4962 15.5238C35.4962 16.4096 35.665 17.2251 35.9954 17.9563C36.3258 18.6874 36.8109 19.2639 37.4436 19.6857C38.0764 20.1075 38.8286 20.3184 39.7074 20.3184Z"
              fill="#2A2B2A"
            />
            <path
              d="M60.1308 23.6585C58.4365 23.6585 56.932 23.2999 55.6033 22.5758C54.2746 21.8587 53.2271 20.8885 52.4537 19.6653C51.6804 18.449 51.3008 17.0711 51.3008 15.5455C51.3008 14.02 51.6874 12.6491 52.4537 11.4258C53.2271 10.2096 54.2746 9.23939 55.6033 8.51528C56.932 7.79116 58.4365 7.43262 60.1308 7.43262H62.1836V11.1516H60.1308C59.2309 11.1516 58.4576 11.3414 57.8038 11.7211C57.15 12.1007 56.6508 12.628 56.2923 13.2959C55.9408 13.9637 55.765 14.7089 55.765 15.5385C55.765 16.3681 55.9408 17.1133 56.2923 17.7812C56.6438 18.449 57.15 18.9763 57.8038 19.3559C58.4576 19.7356 59.2309 19.9254 60.1308 19.9254H62.1836V23.6444H60.1308V23.6585Z"
              fill="#2A2B2A"
            />
            <path
              d="M65.0078 23.6581V0.451172H69.4088V8.59221C70.0907 8.04385 70.8289 7.65016 71.6233 7.41816C72.4177 7.18616 73.1981 7.06665 73.9644 7.06665C75.5462 7.06665 76.8608 7.39707 77.8943 8.05088C78.9348 8.7047 79.7081 9.59051 80.2213 10.6872C80.7345 11.791 80.9946 13.0072 80.9946 14.343V23.6581H76.5937V14.343C76.5937 13.6892 76.432 13.0846 76.1156 12.5503C75.7922 12.0089 75.3634 11.5801 74.815 11.2637C74.2667 10.9474 73.6621 10.7857 73.0012 10.7857C72.3404 10.7857 71.7639 10.9403 71.2226 11.2497C70.6742 11.559 70.2383 11.9738 69.9079 12.487C69.5775 13.0072 69.4088 13.5837 69.4088 14.2164V23.6581H65.0078Z"
              fill="#2A2B2A"
            />
            <path
              d="M87.1621 5.50568C86.4099 5.50568 85.7631 5.23853 85.2218 4.6972C84.6804 4.15587 84.4062 3.51611 84.4062 2.7709C84.4062 2.0257 84.6804 1.38594 85.2218 0.844613C85.7701 0.303283 86.4169 0.0361328 87.1621 0.0361328C87.9073 0.0361328 88.5611 0.303283 89.1025 0.844613C89.6508 1.38594 89.918 2.0257 89.918 2.7709C89.918 3.51611 89.6438 4.15587 89.1025 4.6972C88.5611 5.23853 87.9073 5.50568 87.1621 5.50568ZM84.9476 23.6578V7.44603H89.3766V23.6578H84.9476Z"
              fill="#2A2B2A"
            />
            <path
              d="M93.3008 23.6578V14.3427C93.3008 13.007 93.6171 11.7907 94.2499 10.687C94.8826 9.58324 95.7965 8.70446 96.9987 8.05064C98.2009 7.39683 99.6351 7.06641 101.301 7.06641C102.967 7.06641 104.43 7.39683 105.618 8.05064C106.806 8.70446 107.713 9.59027 108.346 10.687C108.978 11.7907 109.295 13.007 109.295 14.3427V23.6578H104.894V14.3427C104.894 13.6889 104.732 13.0843 104.416 12.55C104.092 12.0087 103.663 11.5798 103.115 11.2635C102.567 10.9471 101.962 10.7854 101.301 10.7854C100.64 10.7854 100.036 10.9471 99.4874 11.2635C98.9391 11.5798 98.5102 12.0087 98.1868 12.55C97.8634 13.0913 97.7088 13.6889 97.7088 14.3427V23.6578H93.3078H93.3008Z"
              fill="#2A2B2A"
            />
            <path
              d="M121.49 23.657C119.627 23.657 118.003 23.3055 116.625 22.5955C115.247 21.8854 114.172 20.9152 113.412 19.6849C112.653 18.4546 112.273 17.0767 112.273 15.5511C112.273 13.8358 112.625 12.3383 113.335 11.0658C114.045 9.79337 115.008 8.80913 116.224 8.1061C117.448 7.40308 118.826 7.05859 120.365 7.05859C122.207 7.05859 123.698 7.43823 124.844 8.20453C125.989 8.96379 126.826 9.99021 127.36 11.2697C127.895 12.5492 128.162 13.9764 128.162 15.5441C128.162 15.755 128.148 16.0081 128.127 16.2893C128.106 16.5776 128.07 16.7955 128.028 16.9431H116.949C117.117 17.597 117.413 18.1523 117.834 18.5953C118.249 19.0382 118.776 19.3756 119.409 19.5935C120.042 19.8185 120.752 19.924 121.546 19.924H126.109V23.643H121.483L121.49 23.657ZM116.927 14.0256H123.768C123.726 13.6249 123.648 13.2452 123.543 12.8937C123.437 12.5422 123.283 12.2329 123.093 11.9587C122.903 11.6845 122.678 11.4525 122.418 11.2627C122.158 11.0729 121.863 10.9252 121.518 10.8198C121.174 10.7143 120.801 10.6581 120.393 10.6581C119.859 10.6581 119.381 10.7565 118.966 10.9463C118.551 11.1361 118.2 11.3892 117.926 11.7056C117.645 12.022 117.427 12.3805 117.265 12.7883C117.103 13.189 116.991 13.6038 116.927 14.0256Z"
              fill="#2A2B2A"
            />
            <path
              d="M17.2663 58.9568C16.022 58.9568 14.9604 58.7388 14.0746 58.303C13.1888 57.8671 12.5139 57.2414 12.0499 56.4118C11.5859 55.5823 11.3609 54.6121 11.3609 53.4872C11.3609 53.2131 11.3679 52.9318 11.3961 52.6436C11.4171 52.3554 11.4523 52.0671 11.4945 51.7719C9.73691 51.7719 8.1551 51.4836 6.74202 50.9001C5.32894 50.3166 4.11973 49.5151 3.11441 48.4817C2.10908 47.4553 1.33575 46.2601 0.80145 44.9033C0.26715 43.5464 0 42.1052 0 40.5797C0 39.0541 0.26715 37.5848 0.80145 36.242C1.33575 34.8992 2.10908 33.7111 3.11441 32.6847C4.11973 31.6583 5.32894 30.8498 6.74202 30.2663C8.1551 29.6828 9.72988 29.3945 11.4593 29.3945C13.1888 29.3945 14.7635 29.6757 16.1766 30.2382C17.5897 30.8006 18.7989 31.5809 19.8042 32.5933C20.8096 33.5986 21.5829 34.7586 22.1172 36.0592C22.6515 37.3598 22.9187 38.7659 22.9187 40.2703V52.9248C22.9187 54.0286 22.7148 55.0409 22.307 55.9619C21.8993 56.8829 21.2806 57.614 20.444 58.1553C19.6074 58.6967 18.5529 58.9638 17.2663 58.9638V58.9568ZM11.4523 47.7646C11.7546 47.7646 12.0428 47.7505 12.317 47.7154C12.5982 47.6873 12.8724 47.6381 13.1536 47.5748C13.5192 47.0264 13.948 46.471 14.4402 45.9227C14.9323 45.3743 15.5017 44.833 16.1415 44.2987C16.7812 43.7714 17.5124 43.2582 18.3279 42.7731V40.2633C18.3279 39.2861 18.1592 38.3862 17.8147 37.5426C17.4702 36.706 16.9921 35.9819 16.3735 35.3632C15.7548 34.7516 15.0237 34.2665 14.1871 33.915C13.3505 33.5635 12.4436 33.3877 11.4593 33.3877C10.4751 33.3877 9.56818 33.5705 8.73158 33.9291C7.89498 34.2876 7.17087 34.7938 6.54517 35.4406C5.92651 36.0873 5.44142 36.8536 5.10397 37.7324C4.75949 38.6112 4.59076 39.5603 4.59076 40.5797C4.59076 41.5991 4.75949 42.5482 5.10397 43.4269C5.44845 44.3057 5.92651 45.072 6.54517 45.7188C7.16384 46.3656 7.89498 46.8718 8.73158 47.2303C9.56818 47.5888 10.4751 47.7716 11.4593 47.7716L11.4523 47.7646ZM16.9781 54.8863C17.428 54.8863 17.7655 54.7105 17.9904 54.359C18.2154 54.0075 18.3279 53.5505 18.3279 52.974V47.3779C17.8569 47.7787 17.4491 48.1864 17.1046 48.6012C16.7601 49.016 16.486 49.4519 16.268 49.9018C16.0571 50.3588 15.8954 50.8368 15.79 51.35C15.6845 51.8562 15.6283 52.3975 15.6283 52.974C15.6283 53.3748 15.6845 53.7192 15.804 54.0075C15.9235 54.2957 16.0852 54.5137 16.3032 54.6613C16.5141 54.8089 16.739 54.8863 16.9781 54.8863Z"
              fill="#2A2B2A"
            />
            <path
              d="M37.0409 52.0242C35.1779 52.0242 33.5539 51.6727 32.1759 50.9627C30.798 50.2526 29.7224 49.2824 28.9631 48.0521C28.2039 46.8218 27.8242 45.4439 27.8242 43.9183C27.8242 42.203 28.1757 40.7055 28.8858 39.433C29.5958 38.1606 30.559 37.1763 31.7752 36.4733C32.9915 35.7703 34.3764 35.4258 35.916 35.4258C37.758 35.4258 39.2484 35.8054 40.3943 36.5717C41.5403 37.331 42.3769 38.3574 42.9112 39.6369C43.4455 40.9164 43.7126 42.3436 43.7126 43.9113C43.7126 44.1222 43.6985 44.3753 43.6775 44.6565C43.6564 44.9377 43.6212 45.1627 43.579 45.3103H32.4993C32.6681 45.9712 32.9633 46.5195 33.3852 46.9624C33.807 47.4053 34.3272 47.7428 34.9599 47.9607C35.5927 48.1857 36.3027 48.2912 37.0971 48.2912H41.6598V52.0102H37.0339L37.0409 52.0242ZM32.4783 42.3928H39.3187C39.2765 41.992 39.1992 41.6124 39.0937 41.2679C38.9883 40.9164 38.8336 40.6071 38.6438 40.3329C38.454 40.0587 38.229 39.8267 37.9689 39.6299C37.7088 39.433 37.4135 39.2924 37.069 39.187C36.7245 39.0815 36.3519 39.0253 35.9442 39.0253C35.4099 39.0253 34.9318 39.1237 34.517 39.3135C34.1022 39.5033 33.7507 39.7564 33.4765 40.0728C33.1953 40.3891 32.9774 40.7547 32.8157 41.1554C32.654 41.5562 32.5415 41.971 32.4783 42.3928Z"
              fill="#2A2B2A"
            />
            <path
              d="M49.0234 52.025V42.7099C49.0234 41.3742 49.3398 40.1579 49.9725 39.0542C50.6052 37.9504 51.5192 37.0716 52.7214 36.4178C53.9235 35.764 55.3577 35.4336 57.0239 35.4336C58.6901 35.4336 60.1523 35.764 61.3405 36.4178C62.5286 37.0716 63.4355 37.9575 64.0682 39.0542C64.7009 40.1579 65.0173 41.3742 65.0173 42.7099V52.025H60.6163V42.7099C60.6163 42.0561 60.4546 41.4515 60.1383 40.9102C59.8149 40.3688 59.386 39.94 58.8377 39.6236C58.2893 39.3073 57.6847 39.1456 57.0239 39.1456C56.363 39.1456 55.7584 39.3073 55.2101 39.6236C54.6617 39.94 54.2329 40.3688 53.9095 40.9102C53.5861 41.4515 53.4314 42.0491 53.4314 42.7099V52.025H49.0305H49.0234Z"
              fill="#2A2B2A"
            />
            <path
              d="M73.584 33.8729C72.8317 33.8729 72.185 33.6057 71.6436 33.0644C71.0953 32.5231 70.8281 31.8833 70.8281 31.1381C70.8281 30.3929 71.1023 29.7531 71.6436 29.2118C72.185 28.6705 72.8388 28.4033 73.584 28.4033C74.3292 28.4033 74.983 28.6705 75.5243 29.2118C76.0657 29.7531 76.3398 30.3929 76.3398 31.1381C76.3398 31.8833 76.0657 32.5231 75.5243 33.0644C74.976 33.6057 74.3292 33.8729 73.584 33.8729ZM71.3695 52.025V35.8132H75.7985V52.025H71.3695Z"
              fill="#2A2B2A"
            />
            <path
              d="M90.1137 52.4117C88.4476 52.4117 87.0134 52.0813 85.8112 51.4275C84.609 50.7737 83.6951 49.8949 83.0624 48.7911C82.4296 47.6874 82.1133 46.4712 82.1133 45.1354V35.8203H86.5142V45.1354C86.5142 45.7892 86.6759 46.3938 86.9923 46.9281C87.3157 47.4695 87.7445 47.8983 88.2929 48.2147C88.8412 48.531 89.4458 48.6927 90.1067 48.6927C90.7675 48.6927 91.3721 48.531 91.9205 48.2147C92.4689 47.8983 92.8977 47.4695 93.2211 46.9281C93.5445 46.3868 93.6992 45.7892 93.6992 45.1354V35.8203H98.1001V45.1354C98.1001 46.4712 97.7837 47.6874 97.151 48.7911C96.5183 49.8949 95.6114 50.7737 94.4233 51.4275C93.2352 52.0813 91.7939 52.4117 90.1067 52.4117H90.1137Z"
              fill="#2A2B2A"
            />
            <path
              d="M104.531 52.0253V48.3063H112.525C112.785 48.3063 113.01 48.25 113.214 48.1446C113.417 48.0391 113.579 47.8915 113.699 47.7017C113.818 47.5118 113.874 47.3009 113.874 47.0689C113.874 46.8158 113.818 46.5909 113.699 46.401C113.579 46.2112 113.417 46.0566 113.214 45.9371C113.01 45.8175 112.778 45.7613 112.525 45.7613H109.445C108.398 45.7613 107.449 45.5996 106.605 45.2692C105.761 44.9388 105.087 44.4115 104.58 43.6803C104.081 42.9492 103.828 41.9931 103.828 40.805C103.828 39.891 104.06 39.0615 104.517 38.3092C104.974 37.557 105.6 36.9524 106.38 36.4954C107.16 36.0384 108.025 35.8135 108.967 35.8135H116.644V39.5325H109.389C109.066 39.5325 108.784 39.6379 108.538 39.8488C108.292 40.0598 108.166 40.3339 108.166 40.6784C108.166 41.0229 108.285 41.2971 108.517 41.522C108.749 41.747 109.045 41.8525 109.382 41.8525H112.461C113.635 41.8525 114.655 42.0282 115.512 42.3797C116.37 42.7313 117.031 43.2726 117.502 44.0178C117.973 44.763 118.205 45.7332 118.205 46.9424C118.205 47.8774 117.966 48.7281 117.502 49.5014C117.031 50.2747 116.398 50.8864 115.611 51.3433C114.816 51.8003 113.931 52.0253 112.946 52.0253H104.531Z"
              fill="#2A2B2A"
            />
            <path
              d="M126.011 52.4123C125.196 52.4123 124.5 52.117 123.909 51.5405C123.319 50.957 123.023 50.261 123.023 49.4595C123.023 48.6581 123.319 47.9621 123.909 47.3786C124.5 46.7951 125.196 46.5068 126.011 46.5068C126.827 46.5068 127.523 46.7951 128.113 47.3786C128.704 47.9621 128.999 48.6581 128.999 49.4595C128.999 49.9868 128.866 50.4789 128.598 50.9359C128.331 51.3929 127.973 51.7514 127.523 52.0186C127.073 52.2857 126.567 52.4193 126.011 52.4193V52.4123Z"
              fill="#2A2B2A"
            />
          </svg>
        </Link>
      )}
      <div className="px-[--202px] w-full text-[#FFFFFB] dark:text-[#2A2B2A] dark:bg-[#FFFFFB] pt-[--sy-251px]">
        <h2 className="text-center text-[--96px] font-extrabold mx-auto mb-[--sy-136px] uppercase ">
          how does seo work on <br /> machine genius?
        </h2>
        <div className=" w-full border-t-[1px] border-solid border-t-[#FFFFFB] dark:border-t-[#2A2B2A] pt-[--sy-24px] text-[#FFFFFB] dark:text-[#2A2B2A]">
          <div className=" flex justify-between mb-[--sy-50px]">
            <div className=" flex flex-col gap-[--sy-18px]">
              <p className=" text-[--16px] font-light">20.3.2024 - News</p>
              <span className=" text-[--16px] font-light">20 min read</span>
            </div>
            {!darkMode ? (
              <svg
                onClick={toggleDark}
                className="!w-[--38px] cursor-pointer"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.6038 18.9992C29.6038 24.856 24.856 29.6038 18.9992 29.6038C13.1424 29.6038 8.39453 24.856 8.39453 18.9992C8.39453 13.1424 13.1424 8.39453 18.9992 8.39453C24.856 8.39453 29.6038 13.1424 29.6038 18.9992Z"
                  fill="#FFFFFB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 0C19.7321 0 20.3256 0.593489 20.3256 1.32558V3.09302C20.3256 3.82512 19.7321 4.4186 19 4.4186C18.2679 4.4186 17.6744 3.82512 17.6744 3.09302V1.32558C17.6744 0.593489 18.2679 0 19 0ZM5.56499 5.56499C6.08265 5.04732 6.92197 5.04732 7.43964 5.56499L8.13396 6.25931C8.65163 6.77697 8.65163 7.61628 8.13396 8.13396C7.61628 8.65163 6.77697 8.65163 6.25931 8.13396L5.56499 7.43964C5.04732 6.92197 5.04732 6.08265 5.56499 5.56499ZM32.4345 5.56544C32.9522 6.08311 32.9522 6.92243 32.4345 7.4401L31.7403 8.13442C31.2226 8.65209 30.3832 8.65209 29.8655 8.13442C29.3478 7.61674 29.3478 6.77743 29.8655 6.25977L30.56 5.56544C31.0776 5.04778 31.9168 5.04778 32.4345 5.56544ZM0 19C0 18.2679 0.593489 17.6744 1.32558 17.6744H3.09302C3.82512 17.6744 4.4186 18.2679 4.4186 19C4.4186 19.7321 3.82512 20.3256 3.09302 20.3256H1.32558C0.593489 20.3256 0 19.7321 0 19ZM33.5814 19C33.5814 18.2679 34.1749 17.6744 34.907 17.6744H36.6744C37.4065 17.6744 38 18.2679 38 19C38 19.7321 37.4065 20.3256 36.6744 20.3256H34.907C34.1749 20.3256 33.5814 19.7321 33.5814 19ZM29.8655 29.8655C30.3832 29.3478 31.2226 29.3478 31.7403 29.8655L32.4345 30.56C32.9522 31.0776 32.9522 31.9168 32.4345 32.4345C31.9168 32.9522 31.0776 32.9522 30.56 32.4345L29.8655 31.7403C29.3478 31.2226 29.3478 30.3832 29.8655 29.8655ZM8.13396 29.8661C8.65163 30.3837 8.65163 31.2231 8.13396 31.7408L7.43964 32.435C6.92197 32.9527 6.08265 32.9527 5.56499 32.435C5.04732 31.9173 5.04732 31.078 5.56499 30.5603L6.25931 29.8661C6.77697 29.3484 7.61628 29.3484 8.13396 29.8661ZM19 33.5814C19.7321 33.5814 20.3256 34.1749 20.3256 34.907V36.6744C20.3256 37.4065 19.7321 38 19 38C18.2679 38 17.6744 37.4065 17.6744 36.6744V34.907C17.6744 34.1749 18.2679 33.5814 19 33.5814Z"
                  fill="#FFFFFB"
                />
              </svg>
            ) : (
              <svg
                onClick={toggleDark}
                className="!w-[--38px] cursor-pointer"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6532 0.189912C12.3835 -0.585458 13.8826 1.16606 13.3412 2.68683C11.5045 7.84702 12.633 13.7078 16.4455 17.5188C20.2773 21.3492 26.1769 22.475 31.3538 20.6054C32.8602 20.0613 34.5642 21.5457 33.8194 23.2348C33.7974 23.2847 33.7752 23.3344 33.7528 23.3844C32.4273 26.3236 30.307 29.0877 27.5639 30.9409C24.6401 32.9162 21.1921 33.9716 17.6632 33.9716H17.6615C13.558 33.9672 9.58369 32.5359 6.41996 29.9232C3.25622 27.3105 1.10007 23.6789 0.321294 19.651C-0.457478 15.6231 0.18967 11.45 2.15175 7.84683C4.01179 4.43105 7.13957 1.77662 10.6023 0.212787L10.6532 0.189912Z"
                  fill="#2A2B2A"
                />
              </svg>
            )}
            <p className=" text-[--16px] font-light">
              Written by Machine Genius
            </p>
          </div>
          <div
            className=" rounded-[--13px] px-[--21px] py-[--sy-20px] ml-auto w-fit mb-[--sy-64px]"
            style={{
              border: " 1px solid",
              borderImageSource:
                "linear-gradient(83.73deg, #FFFFFB 14.96%, rgba(153, 153, 151, 0) 102.16%);",
            }}
          >
            <p className=" text-[--16px] font-bold">Ranked 7th on Google</p>
            <p className=" text-[--16px] font-bold">
              Modules used: SEO, Content Creation & <br /> Graphic Design
            </p>
          </div>
          <div className=" flex justify-between items-start">
            <h3 className=" text-[--64px] font-extrabold uppercase">
              Phase one
            </h3>
            <div className=" max-w-[clamp(30vw,_calc(40.05vw_+_0.1rem),_1000px)]">
              <p className=" mb-[--sy-64px]">
                Lorem ipsum dolor sit amet consectetur. Etiam senectus habitant
                nibh risus augue. Semper sit ipsum parturient accumsan at. At
                habitant at imperdiet morbi. Pellentesque ac vitae integer
                ultrices faucibus aliquet libero egestas. Et sed arcu faucibus
                vivamus feugiat proin purus. Id a magna dolor quam in viverra.{" "}
                <br /> <br />
                Mi magnis urna et at. Lacus orci nunc etiam consequat non lacus.
                Velit non quis nisi egestas elit maecenas tempus nulla. Netus
                ullamcorper euismod ipsum tempor id bibendum aenean. Neque
                imperdiet mi aliquet vitae quis etiam ipsum sit. Elit viverra
                fames aliquam felis. Massa erat non risus sed in adipiscing. Nec
                cursus enim quis volutpat mi adipiscing pellentesque cum nisl.
                Proin dui nunc sit eu praesent et diam nunc urna. Risus eget at
                ut morbi suspendisse. Magna quis tortor sit malesuada
                scelerisque interdum eget. Urna at viverra posuere quam enim
                aliquam augue. Gravida vulputate varius risus at enim facilisi
                nec eu. Posuere nullam dolor arcu faucibus orci nibh maecenas
                vestibulum diam. Nisi facilisis aenean mauris maecenas
                adipiscing ipsum fringilla.
              </p>
              <div className=" flex justify-between mb-[--sy-64px]">
                <Image
                  src={img}
                  alt="flow image"
                  className=" max-w-[clamp(18vw,_calc(28.13vw_+_0.1rem),_2000px);]"
                />
                <div className=" h-[--sy-291px] w-[1px] bg-[#FFFFFB] dark:bg-[#2A2B2A]"></div>
                <p className=" max-w-[clamp(6vw,_calc(9.06vw_+_0.1rem),_2000px)] self-end font-light text-[--16px]">
                  Image 0.1 (MG SEO flow page 1)
                </p>
              </div>
              <p className=" mb-[--sy-64px]">
                Lorem ipsum dolor sit amet consectetur. Etiam senectus habitant
                nibh risus augue. Semper sit ipsum parturient accumsan at. At
                habitant at imperdiet morbi. Pellentesque ac vitae integer
                ultrices faucibus aliquet libero egestas. Et sed arcu faucibus
                vivamus feugiat proin purus. Id a magna dolor quam in viverra.{" "}
                <br /> <br />
                Mi magnis urna et at. Lacus orci nunc etiam consequat non lacus.
                Velit non quis nisi egestas elit maecenas tempus nulla. Netus
                ullamcorper euismod ipsum tempor id bibendum aenean. Neque
                imperdiet mi aliquet vitae quis etiam ipsum sit. Elit viverra
                fames aliquam felis. Massa erat non risus sed in adipiscing. Nec
                cursus enim quis volutpat mi adipiscing pellentesque cum nisl.
                Proin dui nunc sit eu praesent et diam nunc urna. Risus eget at
                ut morbi suspendisse. Magna quis tortor sit malesuada
                scelerisque interdum eget. Urna at viverra posuere quam enim
                aliquam augue. Gravida vulputate varius risus at enim facilisi
                nec eu. Posuere nullam dolor arcu faucibus orci nibh maecenas
                vestibulum diam. Nisi facilisis aenean mauris maecenas
                adipiscing ipsum fringilla.
              </p>
            </div>
          </div>
          <div className=" flex justify-between items-start">
            <h3 className=" text-[--64px] font-extrabold uppercase">
              Phase Two
            </h3>
            <div className=" max-w-[clamp(30vw,_calc(40.05vw_+_0.1rem),_2000px)]">
              <p className=" mb-[--sy-64px]">
                Lorem ipsum dolor sit amet consectetur. Etiam senectus habitant
                nibh risus augue. Semper sit ipsum parturient accumsan at. At
                habitant at imperdiet morbi. Pellentesque ac vitae integer
                ultrices faucibus aliquet libero egestas. Et sed arcu faucibus
                vivamus feugiat proin purus. Id a magna dolor quam in viverra.{" "}
                <br /> <br />
                Mi magnis urna et at. Lacus orci nunc etiam consequat non lacus.
                Velit non quis nisi egestas elit maecenas tempus nulla. Netus
                ullamcorper euismod ipsum tempor id bibendum aenean. Neque
                imperdiet mi aliquet vitae quis etiam ipsum sit. Elit viverra
                fames aliquam felis. Massa erat non risus sed in adipiscing. Nec
                cursus enim quis volutpat mi adipiscing pellentesque cum nisl.
                Proin dui nunc sit eu praesent et diam nunc urna. Risus eget at
                ut morbi suspendisse. Magna quis tortor sit malesuada
                scelerisque interdum eget. Urna at viverra posuere quam enim
                aliquam augue. Gravida vulputate varius risus at enim facilisi
                nec eu. Posuere nullam dolor arcu faucibus orci nibh maecenas
                vestibulum diam. Nisi facilisis aenean mauris maecenas
                adipiscing ipsum fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
