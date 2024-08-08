"use client";

// Import React and useState from React library
import React, { useState } from "react";

// Import CSS styles
import styles from "./creative.module.css";

// Import components
import dynamic from "next/dynamic";
const SideNav = dynamic(() => import("../_components/SideNav/SideNav"), {
  ssr: false,
});
import TitleOfPage from "../_components/TitleOfPage/TitleOfPage";
// import { usePathname } from 'next/navigation';

// Define the layout component
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // State variables to manage side nav and current page
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [CurrentPage, setCurrentPage] = useState<string>("HR");

  // Array of side nav links
  const sideNavLinks = [
    {
      name: "Dashboard",
      path: "/hr/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
          <path d="M12.9595 19.9992C14.2241 19.9992 15.3092 19.9328 16.2158 19.7313C17.134 19.5273 17.9299 19.1716 18.5507 18.5507C19.1716 17.9299 19.5273 17.134 19.7313 16.2158C19.9328 15.3092 19.9992 14.2241 19.9992 12.9595V9.90791C19.9992 8.79323 19.0957 7.88965 17.981 7.88965H9.90791C8.79323 7.88965 7.88965 8.79323 7.88965 9.90791V17.981C7.88965 19.0957 8.79323 19.9992 9.90791 19.9992H12.9595Z" />
          <path d="M0 12.9594C0 14.224 0.0664414 15.3091 0.267945 16.2157C0.471992 17.1339 0.827701 17.9298 1.44854 18.5506C2.06938 19.1714 2.86526 19.5271 3.78339 19.7312C3.87132 19.7507 3.95969 19.769 4.04842 19.7862C5.14283 19.9976 6.0548 19.0713 6.0548 17.9566V9.90779C6.0548 8.7931 5.15119 7.88953 4.03653 7.88953H2.01827C0.903608 7.88953 0 8.7931 0 9.90779V12.9594Z" />
          <path d="M7.03965 0C5.77507 0 4.69 0.0664414 3.78333 0.267945C2.8652 0.471992 2.06932 0.827701 1.44848 1.44854C0.827639 2.06938 0.47193 2.86526 0.267883 3.78339C0.251132 3.85878 0.235369 3.93442 0.220565 4.01027C0.00422724 5.119 0.947443 6.0548 2.07707 6.0548H18.1401C19.2548 6.0548 20.1811 5.14283 19.9697 4.04842C19.9525 3.95969 19.9342 3.87132 19.9147 3.78339C19.7106 2.86526 19.3549 2.06938 18.734 1.44854C18.1132 0.827701 17.3173 0.471992 16.3992 0.267945C15.4925 0.0664414 14.4075 0 13.1429 0H7.03965Z" />
        </svg>
      ),
    },
    {
      name: "Hiring",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
        >
          <path
            d="M18.0418 2.84453H13.0287L13.0026 2.66515C12.933 1.91344 12.611 1.28132 12.0366 0.768793C11.4621 0.256264 10.7833 0 10 0C9.21671 0 8.53786 0.256264 7.96345 0.768793C7.38903 1.28132 7.06701 1.91344 6.99739 2.66515L6.97128 2.84453H1.95822C1.41862 2.84453 0.957354 3.03246 0.574413 3.40831C0.191471 3.78417 0 4.2369 0 4.76651V20.5524C0 21.082 0.191471 21.539 0.574413 21.9234C0.957354 22.3078 1.41862 22.5 1.95822 22.5H18.0418C18.5814 22.5 19.0426 22.3078 19.4256 21.9234C19.8085 21.539 20 21.082 20 20.5524V4.79214C20 4.24544 19.8085 3.78417 19.4256 3.40831C19.0426 3.03246 18.5814 2.84453 18.0418 2.84453ZM10 1.79385C10.3133 1.79385 10.5831 1.9049 10.8094 2.12699C11.0357 2.34909 11.1488 2.61817 11.1488 2.93423C11.1488 3.25028 11.0357 3.51936 10.8094 3.74146C10.5831 3.96355 10.3133 4.0746 10 4.0746C9.68668 4.0746 9.41688 3.96355 9.1906 3.74146C8.96432 3.51936 8.85117 3.25028 8.85117 2.93423C8.85117 2.61817 8.96432 2.34909 9.1906 2.12699C9.41688 1.9049 9.68668 1.79385 10 1.79385ZM10.8094 17.4516H4.69974C4.56049 17.4516 4.43864 17.4046 4.3342 17.3106C4.22976 17.2167 4.17755 17.1014 4.17755 16.9647V15.7346C4.17755 15.5979 4.22976 15.4826 4.3342 15.3887C4.43864 15.2947 4.56049 15.2477 4.69974 15.2477H10.8094C10.9487 15.2477 11.0705 15.2947 11.1749 15.3887C11.2794 15.4826 11.3316 15.5979 11.3316 15.7346V16.9647C11.3316 17.1014 11.2794 17.2167 11.1749 17.3106C11.0705 17.4046 10.9487 17.4516 10.8094 17.4516ZM15.3003 13.6076H4.69974C4.56049 13.6076 4.43864 13.5606 4.3342 13.4667C4.22976 13.3727 4.17755 13.2574 4.17755 13.1207V11.8907C4.17755 11.754 4.22976 11.6344 4.3342 11.5319C4.43864 11.4294 4.56049 11.3781 4.69974 11.3781H15.3003C15.4395 11.3781 15.5614 11.4294 15.6658 11.5319C15.7702 11.6344 15.8225 11.754 15.8225 11.8907V13.1207C15.8225 13.2574 15.7702 13.3727 15.6658 13.4667C15.5614 13.5606 15.4395 13.6076 15.3003 13.6076ZM15.3003 9.76367H4.69974C4.56049 9.76367 4.43864 9.71669 4.3342 9.62272C4.22976 9.52876 4.17755 9.4049 4.17755 9.25114V8.0467C4.17755 7.91002 4.22976 7.79043 4.3342 7.68793C4.43864 7.58542 4.56049 7.53417 4.69974 7.53417H15.3003C15.4395 7.53417 15.5614 7.58542 15.6658 7.68793C15.7702 7.79043 15.8225 7.91002 15.8225 8.0467V9.25114C15.8225 9.4049 15.7702 9.52876 15.6658 9.62272C15.5614 9.71669 15.4395 9.76367 15.3003 9.76367Z"
            fill="#2A2B2A"
          />
        </svg>
      ),
      subLinks: [
        { name: "Templates", path: "/hr/hiring/templates" },
        { name: "Job Openings", path: "/hr/hiring/job-openings" },
        { name: "Interview Questions", path: "/hr/hiring/interview-questions" },
      ],
    },
    {
      name: "Candidate Database",
      path: "/hr/candidate-database",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            d="M0 0H20V2.25H0V0ZM1.36364 3.15V18H18.6364V3.15H1.36364ZM13.1818 7.2H6.36364V5.85H13.1818V7.2Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
    },
    {
      name: "Attendance",
      path: "/hr/attendance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
        >
          <path
            d="M14.3195 15.2373C14.3195 14.114 13.4021 13.2034 12.2703 13.2034C11.1386 13.2034 10.2212 14.114 10.2212 15.2373C10.2212 16.3606 11.1386 17.2712 12.2703 17.2712M12.2703 20.322C9.44105 20.322 7.14746 18.0455 7.14746 15.2373C7.14746 12.4291 9.44105 10.1525 12.2703 10.1525C15.0996 10.1525 17.3932 12.4291 17.3932 15.2373C17.3932 16.0798 18.0813 16.7627 18.9301 16.7627C19.7789 16.7627 20.467 16.0798 20.467 15.2373C20.467 10.7441 16.7972 7.1017 12.2703 7.1017C7.74348 7.1017 4.07373 10.7441 4.07373 15.2373C4.07373 19.7305 7.74348 23.3729 12.2703 23.3729H14.3195M1 15.2373C1 17.9547 1.97617 20.4457 3.59944 22.3839M21 8.16144C18.9332 5.65243 15.7902 4.05085 12.2703 4.05085C8.78312 4.05085 5.66582 5.62285 3.59849 8.09184M18.9566 2.63813C16.9601 1.59215 14.6849 1 12.2703 1C9.87413 1 7.61515 1.58319 5.62961 2.61437"
            stroke="#FFFFFB"
            strokeWidth="2"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Personnel",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="27"
          viewBox="0 0 20 27"
          fill="none"
        >
          <path
            d="M6.85445 21.2498C7.68656 21.2498 9.99979 21.2498 9.99979 21.2498C9.99979 21.2498 12.3126 21.2498 13.1452 21.2498C13.9769 21.2498 14.3545 20.0397 13.8731 19.1844C13.5105 18.5399 12.9165 17.8091 11.9497 17.394C11.3963 17.7814 10.7241 18.0093 9.99979 18.0093C9.27469 18.0093 8.60331 17.7814 8.04991 17.394C7.08276 17.8091 6.48906 18.5399 6.12612 19.1844C5.64516 20.0397 6.02235 21.2498 6.85445 21.2498Z"
            fill="#FFFFFB"
          />
          <path
            d="M9.99818 17.1998C11.4191 17.1998 12.5702 16.0491 12.5702 14.6282V14.0121C12.5702 12.5912 11.4191 11.4397 9.99818 11.4397C8.5773 11.4397 7.42578 12.5912 7.42578 14.0121V14.6282C7.42578 16.0491 8.5773 17.1998 9.99818 17.1998Z"
            fill="#FFFFFB"
          />
          <path
            d="M17.638 2.91675H13.75V3.75008C13.75 5.35815 12.4414 6.66676 10.8334 6.66676H9.16669C7.55862 6.66676 6.25002 5.35815 6.25002 3.75008V2.91675H2.36209C1.05754 2.91675 0 3.97429 0 5.27879V23.888C0 25.1925 1.05754 26.2501 2.36209 26.2501H17.638C18.9425 26.2501 20 25.1925 20 23.888V5.27879C20.0001 3.97429 18.9425 2.91675 17.638 2.91675ZM17.5 23.7501H2.50001V7.7084H17.5V23.7501Z"
            fill="#FFFFFB"
          />
          <path
            d="M9.16537 5.83335H10.832C11.9808 5.83335 12.9154 4.8987 12.9154 3.75001V2.08334C12.9154 0.934644 11.9807 0 10.832 0H9.16537C8.01668 0 7.08203 0.934644 7.08203 2.08334V3.75001C7.08203 4.89865 8.01668 5.83335 9.16537 5.83335ZM8.7487 2.08334C8.7487 1.85304 8.93507 1.66667 9.16537 1.66667H10.832C11.0624 1.66667 11.2487 1.85304 11.2487 2.08334V2.91667C11.2487 3.14698 11.0624 3.33334 10.832 3.33334H9.16537C8.93507 3.33334 8.7487 3.14698 8.7487 2.91667V2.08334Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
      subLinks: [
        { name: "Employee Database", path: "/hr/personnel/employee-database" },
        { name: "Required Papers ", path: "/hr/personnel/required-papers" },
        { name: "Complaints", path: "/hr/personnel/complaints" },
        { name: "Exit Interviews", path: "/hr/personnel/exit-interviews" },
        { name: "Surveys", path: "/hr/personnel/surveys" },
      ],
    },
    {
      name: "Events",
      path: "/hr/events",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.33333 12H10.6667V10.6667H9.33333V12ZM9.33333 17.3333H10.6667V16H9.33333V17.3333ZM14.6667 12H16V10.6667H14.6667V12ZM14.6667 17.3333H16V16H14.6667V17.3333ZM4 17.3333H5.33333V16H4V17.3333ZM18.6667 5.33333H1.33333V4C1.33333 3.264 1.93067 2.66667 2.66667 2.66667H5.33333V3.33333C5.33333 3.702 5.63133 4 6 4C6.36867 4 6.66667 3.702 6.66667 3.33333V2.66667H13.3333V3.33333C13.3333 3.702 13.6313 4 14 4C14.3687 4 14.6667 3.702 14.6667 3.33333V2.66667H17.3333C18.0693 2.66667 18.6667 3.264 18.6667 4V5.33333ZM17.3333 12C17.3333 12.736 16.736 13.3333 16 13.3333H14.6667C13.9307 13.3333 13.3333 12.736 13.3333 12V10.6667C13.3333 9.93067 13.9307 9.33333 14.6667 9.33333H16C16.736 9.33333 17.3333 9.93067 17.3333 10.6667V12ZM17.3333 17.3333C17.3333 18.0693 16.736 18.6667 16 18.6667H14.6667C13.9307 18.6667 13.3333 18.0693 13.3333 17.3333V16C13.3333 15.264 13.9307 14.6667 14.6667 14.6667H16C16.736 14.6667 17.3333 15.264 17.3333 16V17.3333ZM12 12C12 12.736 11.4027 13.3333 10.6667 13.3333H9.33333C8.59733 13.3333 8 12.736 8 12V10.6667C8 9.93067 8.59733 9.33333 9.33333 9.33333H10.6667C11.4027 9.33333 12 9.93067 12 10.6667V12ZM12 17.3333C12 18.0693 11.4027 18.6667 10.6667 18.6667H9.33333C8.59733 18.6667 8 18.0693 8 17.3333V16C8 15.264 8.59733 14.6667 9.33333 14.6667H10.6667C11.4027 14.6667 12 15.264 12 16V17.3333ZM6.66667 12C6.66667 12.736 6.06933 13.3333 5.33333 13.3333H4C3.264 13.3333 2.66667 12.736 2.66667 12V10.6667C2.66667 9.93067 3.264 9.33333 4 9.33333H5.33333C6.06933 9.33333 6.66667 9.93067 6.66667 10.6667V12ZM6.66667 17.3333C6.66667 18.0693 6.06933 18.6667 5.33333 18.6667H4C3.264 18.6667 2.66667 18.0693 2.66667 17.3333V16C2.66667 15.264 3.264 14.6667 4 14.6667H5.33333C6.06933 14.6667 6.66667 15.264 6.66667 16V17.3333ZM17.3333 1.33333H14.6667V0.666667C14.6667 0.298667 14.3687 0 14 0C13.6313 0 13.3333 0.298667 13.3333 0.666667V1.33333H6.66667V0.666667C6.66667 0.298667 6.36867 0 6 0C5.63133 0 5.33333 0.298667 5.33333 0.666667V1.33333H2.66667C1.194 1.33333 0 2.52733 0 4V18.6667C0 20.1393 1.194 21.3333 2.66667 21.3333H17.3333C18.806 21.3333 20 20.1393 20 18.6667V4C20 2.52733 18.806 1.33333 17.3333 1.33333ZM4 12H5.33333V10.6667H4V12Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
    },
    {
      name: "Outreach",
      path: "/hr/dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
        >
          <path
            d="M4.22951 17.2687L3.94893 22.8211H11.961L12.5751 20.2682C12.5751 20.2682 12.9221 20.8515 14.9937 21.0269C17.0637 21.2024 16.8115 18.6748 16.8115 18.6748C16.8115 18.6748 18.19 18.0662 18.19 17.6109C18.19 17.1541 17.3743 16.566 17.3743 16.566C17.3743 16.566 18.2508 16.7233 18.5694 16.3542C18.8847 15.9851 18.1821 14.6517 18.1821 14.6517C18.1821 14.6517 19.2633 14.6241 19.9011 13.923C20.5374 13.2219 17.8944 11.1496 17.8944 9.81383C19.3898 2.48782 13.4366 -0.864969 6.83065 0.190186C0.223086 1.24376 0.471265 5.2407 0.0823984 7.14789C-0.690592 11.9273 4.22951 17.2687 4.22951 17.2687Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
    },
    {
      name: "On Boarding ",
      path: "/hr/on-boarding ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
        >
          <path
            d="M11.3615 11.494C8.1683 11.4938 7.01937 8.29661 6.71861 5.67031C6.34811 2.43499 7.87806 0 11.3615 0C14.8445 0 16.3752 2.43481 16.0044 5.67031C15.7033 8.29661 14.5548 11.4942 11.3615 11.494Z"
            fill="#FFFFFB"
          />
          <path
            d="M4.37864 12.8249C4.27589 12.8249 4.1738 12.828 4.07242 12.8336C4.22438 12.6168 4.40028 12.4256 4.60611 12.2719C5.21968 11.814 6.01434 11.6637 6.71684 11.3877C7.05881 11.2534 7.36503 11.1199 7.65249 10.968C8.62271 12.032 9.88791 12.5886 11.3612 12.5888C12.8341 12.5888 14.0992 12.0322 15.0693 10.968C15.3568 11.12 15.663 11.2534 16.0049 11.3877C16.7074 11.6638 17.5021 11.814 18.1157 12.2719C19.1768 13.064 19.4511 14.8457 19.6665 16.0611C19.8444 17.0643 19.9638 18.0882 19.9987 19.1072C20.0257 19.8966 19.636 20.0073 18.9756 20.2456C18.1487 20.5438 17.295 20.7652 16.4355 20.9467C14.7756 21.2972 13.0646 21.5665 11.361 21.5786C10.5355 21.5727 9.70831 21.5061 8.88605 21.3995C9.49488 20.5173 9.85197 19.4488 9.85197 18.2983C9.85193 15.2802 7.39663 12.8249 4.37864 12.8249Z"
            fill="#FFFFFB"
          />
          <path
            d="M4.37912 13.9197C6.79733 13.9197 8.75781 15.8802 8.75781 18.2984C8.75781 20.7166 6.79737 22.6771 4.37912 22.6771C1.96088 22.6771 0.000396729 20.7166 0.000396729 18.2984C0.000433922 15.8801 1.96092 13.9197 4.37912 13.9197ZM2.46344 19.0496H3.62786V20.214C3.62786 20.6289 3.96419 20.9653 4.37909 20.9653C4.79402 20.9653 5.13039 20.6289 5.13039 20.214V19.0496H6.29477C6.7097 19.0496 7.04607 18.7133 7.04607 18.2983C7.04607 17.8834 6.70974 17.547 6.29477 17.547H5.13039V16.3826C5.13039 15.9677 4.79402 15.6313 4.37909 15.6313C3.96416 15.6313 3.62786 15.9677 3.62786 16.3826V17.547H2.46344C2.04851 17.547 1.71214 17.8834 1.71214 18.2983C1.71217 18.7133 2.04847 19.0496 2.46344 19.0496Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
    },
    {
      name: "Research",
      path: "/hr/research",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.45744 16.9149C9.91021 16.9163 11.3385 16.5409 12.6029 15.8255L16.1104 19.3327C16.5377 19.76 17.1172 20 17.7215 20C18.3258 20 18.9054 19.76 19.3326 19.3327C19.7599 18.9054 20 18.326 20 17.7217C20 17.1175 19.7599 16.538 19.3326 16.1107L15.8251 12.6035C16.8282 10.8229 17.1522 8.73923 16.7373 6.73812C16.3224 4.73702 15.1966 2.95392 13.5683 1.71878C11.94 0.483647 9.91933 -0.119913 7.88028 0.0197868C5.84123 0.159487 3.9218 1.03299 2.47717 2.47866C1.29437 3.66132 0.48886 5.16815 0.162519 6.80858C-0.163823 8.449 0.0036586 10.1494 0.643783 11.6946C1.28391 13.2399 2.36792 14.5606 3.75875 15.4898C5.14957 16.419 6.78473 16.915 8.45744 16.9149ZM3.96566 3.96702C5.0048 2.92845 6.37192 2.28226 7.8341 2.13855C9.29628 1.99485 10.7631 2.36251 11.9845 3.17891C13.206 3.99531 14.1066 5.20992 14.5329 6.61583C14.9592 8.02173 14.8848 9.53194 14.3224 10.8892C13.76 12.2464 12.7444 13.3666 11.4486 14.059C10.1528 14.7515 8.65701 14.9732 7.21603 14.6865C5.77505 14.3999 4.47805 13.6225 3.54601 12.4868C2.61396 11.3512 2.10454 9.92752 2.10453 8.45842C2.10198 7.62386 2.26518 6.7971 2.58466 6.0261C2.90415 5.2551 3.37356 4.55521 3.96566 3.96702Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
    },
    {
      name: "Training Resources",
      path: "/hr/training-resources",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            d="M0 0H20V2.25H0V0ZM1.36364 3.15V18H18.6364V3.15H1.36364ZM13.1818 7.2H6.36364V5.85H13.1818V7.2Z"
            fill="#FFFFFB"
          />
        </svg>
      ),
    },
  ];

  // Return the layout component
  return (
    <>
      {/* Side nav wrapper */}
      <div
        className={`${styles.Side_Nav_Wrapper} ${
          isSideNavOpen ? "" : styles.close
        }`}
      >
        <SideNav
          isSideNavOpen={isSideNavOpen}
          setIsSideNavOpen={setIsSideNavOpen}
          setCurrentPage={setCurrentPage}
          sideNavLinks={sideNavLinks}
        />
      </div>
      {/* Main page wrapper */}
      <div className={styles.Page_Wrapper}>
        {/* Title of the current page */}
        <TitleOfPage title={CurrentPage} />
        {/* Children components */}
        <div className="h-full">{children}</div>
      </div>
    </>
  );
};

// Export the layout component
export default layout;
