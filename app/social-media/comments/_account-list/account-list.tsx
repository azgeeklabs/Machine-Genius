'use client'
import { AccountsData, ArticleNames, Brands } from '@/app/_data/data';
import CustomCheckBox from '@/app/_components/CustomCheckBox/CustomCheckBox';
import { useState } from 'react';
import CustomSelectInput from '@/app/_components/CustomSelectInput/CustomSelectInput';
import BasicModal from '@/app/_components/Modal/modal';
import $ from 'jquery'
import styles from './account-list.module.css';

const AccountList = () => {

  // icons
  const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M20.2344 9.99538C20.2344 7.34444 19.1813 4.80208 17.3068 2.92758C15.4323 1.05309 12.8899 4.26716e-06 10.239 4.26716e-06C7.72208 -0.00232006 5.29694 0.944983 3.44799 2.65269C1.59905 4.36039 0.462414 6.70278 0.265142 9.21196C0.0678707 11.7211 0.824482 14.2124 2.38384 16.188C3.9432 18.1637 6.19051 19.4783 8.67687 19.8694V12.884H6.1409V9.99538H8.67829V7.79354C8.67829 5.28899 10.1705 3.90391 12.4537 3.90391C13.5475 3.90391 14.6912 4.09954 14.6912 4.09954V6.55983H13.4304C12.1881 6.55983 11.8026 7.3309 11.8026 8.12053V9.99538H14.5741L14.1315 12.884H11.8011V19.8694C14.1522 19.4971 16.2933 18.2981 17.8392 16.488C19.3851 14.678 20.2344 12.3757 20.2344 9.99538Z" fill="#1877F2" />
    <path d="M14.1298 12.8839L14.5724 9.99524H11.8009V8.12039C11.8009 7.33076 12.1864 6.55969 13.4287 6.55969H14.6895V4.09797C14.6895 4.09797 13.5458 3.90234 12.452 3.90234C10.1673 3.90234 8.67659 5.28742 8.67659 7.79197V9.99524H6.14062V12.8839H8.67802V19.8692C9.71308 20.0321 10.7672 20.0321 11.8023 19.8692V12.8839H14.1298Z" fill="white" />
  </svg>
  const telegramIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M10.2344 20C15.7572 20 20.2344 15.5228 20.2344 10C20.2344 4.47715 15.7572 0 10.2344 0C4.71153 0 0.234375 4.47715 0.234375 10C0.234375 15.5228 4.71153 20 10.2344 20Z" fill="url(#paint0_linear_908_8728)" />
    <path d="M15.2237 5.86343C15.3127 5.28809 14.7657 4.83396 14.2541 5.05857L4.06527 9.532C3.69842 9.69307 3.72526 10.2488 4.10574 10.3699L6.2069 11.0391C6.60797 11.1668 7.04219 11.1007 7.3924 10.8588L12.1297 7.58593C12.2725 7.48721 12.4283 7.69036 12.3062 7.81614L8.89619 11.3319C8.5654 11.6729 8.63104 12.2509 9.02897 12.5004L12.8468 14.8945C13.275 15.163 13.8259 14.8933 13.906 14.3758L15.2237 5.86343Z" fill="white" />
    <defs>
      <linearGradient id="paint0_linear_908_8728" x1="10.2344" y1="0" x2="10.2344" y2="20" gradientUnits="userSpaceOnUse">
        <stop stop-color="#37BBFE" />
        <stop offset="1" stop-color="#007DBB" />
      </linearGradient>
    </defs>
  </svg>
  const redditIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M10.2344 0C4.71875 0 0.234375 4.48437 0.234375 10C0.234375 15.5156 4.71875 20 10.2344 20C15.75 20 20.2344 15.5156 20.2344 10C20.2344 4.48437 15.75 0 10.2344 0Z" fill="#FC471E" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1042 4.93522C13.0951 4.9926 13.0904 5.05147 13.0904 5.11147C13.0904 5.71722 13.5701 6.20829 14.1618 6.20829C14.7535 6.20829 15.2333 5.71722 15.2333 5.11147C15.2333 4.50571 14.7535 4.01465 14.1618 4.01465C13.8982 4.01465 13.6568 4.11215 13.47 4.27385L10.6877 3.57129L9.68204 7.68922C8.34426 7.77936 7.14112 8.19408 6.23347 8.82022C5.97576 8.5615 5.62272 8.40193 5.23326 8.40193C4.44428 8.40193 3.80469 9.05672 3.80469 9.86436C3.80469 10.4265 4.11444 10.9145 4.56874 11.1593C4.53592 11.3337 4.51897 11.5117 4.51897 11.6924C4.51897 13.9136 7.07733 15.7141 10.2333 15.7141C13.3892 15.7141 15.9475 13.9136 15.9475 11.6924C15.9475 11.5117 15.9306 11.3337 15.8978 11.1593C16.352 10.9145 16.6618 10.4265 16.6618 9.86436C16.6618 9.05672 16.0223 8.40193 15.2333 8.40193C14.8438 8.40193 14.4908 8.5615 14.233 8.82022C13.2442 8.13807 11.9046 7.70679 10.4223 7.67293L11.2074 4.45802L13.1042 4.93522ZM7.73326 12.0581C8.32497 12.0581 8.80469 11.567 8.80469 10.9612C8.80469 10.3554 8.32497 9.86436 7.73326 9.86436C7.14154 9.86436 6.66183 10.3554 6.66183 10.9612C6.66183 11.567 7.14154 12.0581 7.73326 12.0581ZM12.7333 12.0581C13.325 12.0581 13.8047 11.567 13.8047 10.9612C13.8047 10.3554 13.325 9.86436 12.7333 9.86436C12.1415 9.86436 11.6618 10.3554 11.6618 10.9612C11.6618 11.567 12.1415 12.0581 12.7333 12.0581ZM7.93133 13.2163C7.76726 13.1043 7.54554 13.1496 7.43612 13.3176C7.32669 13.4857 7.37104 13.7127 7.53512 13.8247C8.31233 14.3551 9.27283 14.6203 10.2333 14.6203C11.1937 14.6203 12.1542 14.3551 12.9313 13.8247C13.0955 13.7127 13.1398 13.4857 13.0304 13.3176C12.921 13.1496 12.6993 13.1043 12.5351 13.2163C11.8779 13.6648 11.0556 13.8891 10.2333 13.8891C9.74562 13.8891 9.2579 13.8102 8.80469 13.6525C8.49369 13.5442 8.19883 13.3988 7.93133 13.2163Z" fill="white" />
  </svg>

// apply effect on selected/clicked topic (change background and color and apply the same on button)
  const handleSelectedBg = (e: any) => {
    $('.articleRow').removeClass('selected')
    $(e.target).parents('.articleRow').toggleClass('selected')
    $('.articleRow').removeClass('changeSvgBg')
    $(e.target).parents('.articleRow').toggleClass('changeSvgBg')
  }
// return all accounts
  const renderAccounts = AccountsData.map((oneAccount, idx) => (
    <ul
      key={idx}
      className={`${styles.tableBody} borderBottom articleRow`}
      onClick={(e) => { handleSelectedBg(e) }}
    >
      <li className="w-[16%] flex justify-center text-center gap-[1vw]">
        <p>{oneAccount.account_name}</p>
        {oneAccount.account_type === 'facebook' ? facebookIcon : oneAccount.account_type === 'reddit' ? redditIcon : telegramIcon}
      </li>
      <li className={`w-[16%] `}>
        {oneAccount.user_name}
      </li>
      <li className="w-[16%] ">
        <a href="#">{oneAccount.link}</a>
      </li>
      <li className="w-[16%]  ">
        <span
          className={
            oneAccount.brand === "PST USA"
              ? "bg-[#31B2E9B2]"
              : oneAccount.brand === "Canada"
                ? "bg-[#E9313EB2]"
                : oneAccount.brand === "PST Asia"
                  ? "bg-[#E1C655B2]"
                  : oneAccount.brand === "Investocracy"
                    ? "bg-[#5FA85BB5]"
                    : "bg-[#F36F24B2]"
          }
        >
          {oneAccount.brand}
        </span>
      </li>
      <li className="w-[16%] ">{oneAccount.niche}</li>
      <li className="w-[16%] flex justify-center">
        <span className={`flex gap-[0.5vw] items-center w-fit ${oneAccount.Campaign_type === 'Auto Comment' ? 'bg-[#5FA85BB5]' : 'bg-[#E1C655B2]'}`}>
          <p>{oneAccount.Campaign_type}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
            <path className='svgPath' d="M17.0995 -1.0324e-06L0.898999 -2.44869e-06C0.734977 0.00034086 0.574202 0.0305532 0.433978 0.0873808C0.293753 0.144208 0.179391 0.225499 0.1032 0.322504C0.0270088 0.41951 -0.00812266 0.528557 0.00158192 0.637905C0.0112865 0.747255 0.0654628 0.852764 0.158278 0.94308L8.25851 8.75702C8.59422 9.08099 9.40244 9.08099 9.73905 8.75702L17.8393 0.943082C17.933 0.852955 17.988 0.747392 17.9983 0.63786C18.0085 0.52833 17.9736 0.419021 17.8973 0.32181C17.8211 0.224599 17.7064 0.143203 17.5657 0.0864677C17.425 0.0297327 17.2638 -0.000173633 17.0995 -1.0324e-06Z" fill='#2A2B2A' />
          </svg>
        </span>
      </li>
    </ul>
  ));

  // for storing the order of subscribers and engagement (descending or ascending)
  const [subscriberOrder, setsubscriberOrder] = useState<boolean>(true);
  const [engagementOrder, setengagementOrder] = useState<boolean>(true);
  return (
    <div className={`${styles.postInReddit} w-full h-full pt-[0.5vw]`}>

      {/* filters options to filter and edit data in table */}
      <div className={`flex flex-col gap-[0.7vw] w-full pageHeader`}>
        <div className="flex justify-between">
          <div className={`${styles.redditPage} w-8/12 flex gap-[1vw]`}>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Account Name</h5>
              <div className={`${styles.changeOrder} `} >
                <p>Account Name</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M9.3793 11.8304H7.80262V0.332387C7.80265 0.14886 7.65379 0 7.47026 0H2.33924C2.15571 0 2.00688 0.14886 2.00688 0.332387V11.8304H0.430167C-0.0286343 11.8304 -0.137701 12.0934 0.186816 12.418L4.31725 16.5484C4.64177 16.8729 5.1677 16.8729 5.49224 16.5484L9.62265 12.418C9.9472 12.0934 9.83831 11.8304 9.3793 11.8304Z" fill="black" />
                  <path d="M14.1666 7.304C14.1389 7.23488 14.0718 7.18945 13.9973 7.18945H13.0255C12.9504 7.18945 12.8829 7.2356 12.8555 7.30564L11.0828 11.8571C11.0609 11.9133 11.0682 11.9766 11.1021 12.0262C11.136 12.076 11.1924 12.1058 11.2526 12.1058H12.2275C12.3043 12.1058 12.3727 12.0578 12.3989 11.9856L12.731 11.0718H14.2971L14.6495 11.9887C14.6765 12.0591 14.7444 12.1056 14.8197 12.1056H15.8194C15.8799 12.1056 15.9365 12.0755 15.9704 12.0253C16.0044 11.9752 16.0113 11.9115 15.9886 11.8553L14.1666 7.304ZM13.8653 9.9402H13.1464L13.5023 8.96239L13.8653 9.9402Z" fill="black" />
                  <path d="M11.5039 4.28387V5.1128C11.5039 5.21349 11.5856 5.29522 11.6863 5.29522H15.3841C15.4848 5.29522 15.5665 5.21349 15.5665 5.1128V4.34588C15.5665 4.24518 15.4848 4.16345 15.3841 4.16345H13.1778L15.4295 1.39022C15.4559 1.35776 15.4703 1.31708 15.4703 1.27532V0.56133C15.4703 0.460639 15.3886 0.378906 15.2879 0.378906H11.9565C11.8558 0.378906 11.7741 0.460639 11.7741 0.56133V1.33135C11.7741 1.43204 11.8558 1.51378 11.9565 1.51378H13.6947L11.5446 4.16914C11.5184 4.20161 11.5039 4.24211 11.5039 4.28387Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Username</h5>
              <div className={`${styles.changeOrder} `} >
                <p>Username</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M9.3793 11.8304H7.80262V0.332387C7.80265 0.14886 7.65379 0 7.47026 0H2.33924C2.15571 0 2.00688 0.14886 2.00688 0.332387V11.8304H0.430167C-0.0286343 11.8304 -0.137701 12.0934 0.186816 12.418L4.31725 16.5484C4.64177 16.8729 5.1677 16.8729 5.49224 16.5484L9.62265 12.418C9.9472 12.0934 9.83831 11.8304 9.3793 11.8304Z" fill="black" />
                  <path d="M14.1666 7.304C14.1389 7.23488 14.0718 7.18945 13.9973 7.18945H13.0255C12.9504 7.18945 12.8829 7.2356 12.8555 7.30564L11.0828 11.8571C11.0609 11.9133 11.0682 11.9766 11.1021 12.0262C11.136 12.076 11.1924 12.1058 11.2526 12.1058H12.2275C12.3043 12.1058 12.3727 12.0578 12.3989 11.9856L12.731 11.0718H14.2971L14.6495 11.9887C14.6765 12.0591 14.7444 12.1056 14.8197 12.1056H15.8194C15.8799 12.1056 15.9365 12.0755 15.9704 12.0253C16.0044 11.9752 16.0113 11.9115 15.9886 11.8553L14.1666 7.304ZM13.8653 9.9402H13.1464L13.5023 8.96239L13.8653 9.9402Z" fill="black" />
                  <path d="M11.5039 4.28387V5.1128C11.5039 5.21349 11.5856 5.29522 11.6863 5.29522H15.3841C15.4848 5.29522 15.5665 5.21349 15.5665 5.1128V4.34588C15.5665 4.24518 15.4848 4.16345 15.3841 4.16345H13.1778L15.4295 1.39022C15.4559 1.35776 15.4703 1.31708 15.4703 1.27532V0.56133C15.4703 0.460639 15.3886 0.378906 15.2879 0.378906H11.9565C11.8558 0.378906 11.7741 0.460639 11.7741 0.56133V1.33135C11.7741 1.43204 11.8558 1.51378 11.9565 1.51378H13.6947L11.5446 4.16914C11.5184 4.20161 11.5039 4.24211 11.5039 4.28387Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col w-[25%] gap-[0.3vw]">
              <h5>Followers</h5>
              <div className={`${styles.changeOrder} `} onClick={() => { setengagementOrder(!engagementOrder) }}>
                <p>{engagementOrder ? 'Ascend' : 'Descend'}</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.80002 10.2959C8.7281 10.1444 8.61483 10.0164 8.47327 9.92664C8.33171 9.83684 8.16764 9.78889 8 9.78834H5.33327V0.889318C5.33327 0.653584 5.23961 0.427504 5.07291 0.260815C4.90621 0.0941257 4.68011 0.000481606 4.44436 0.000481606C4.2086 0.000481606 3.9825 0.0941257 3.8158 0.260815C3.6491 0.427504 3.55544 0.653584 3.55544 0.889318V9.78834H0.888709C0.721067 9.78889 0.556998 9.83684 0.41544 9.92664C0.273883 10.0164 0.160607 10.1444 0.0886892 10.2959C0.0155567 10.4455 -0.0132581 10.613 0.00564103 10.7785C0.0245402 10.944 0.0903656 11.1007 0.195359 11.23L3.751 15.6795C3.83646 15.78 3.94272 15.8607 4.06244 15.916C4.18215 15.9713 4.31247 16 4.44436 16C4.57624 16 4.70656 15.9713 4.82627 15.916C4.94599 15.8607 5.05225 15.78 5.13771 15.6795L8.69335 11.23C8.79834 11.1007 8.86417 10.944 8.88307 10.7785C8.90197 10.613 8.87315 10.4455 8.80002 10.2959ZM15.9113 5.70414C15.8394 5.85556 15.7261 5.98356 15.5846 6.07336C15.443 6.16316 15.2789 6.21111 15.1113 6.21166H12.4446V15.1107C12.4446 15.3464 12.3509 15.5725 12.1842 15.7392C12.0175 15.9059 11.7914 15.9995 11.5556 15.9995C11.3199 15.9995 11.0938 15.9059 10.9271 15.7392C10.7604 15.5725 10.6667 15.3464 10.6667 15.1107V6.21166H8C7.83236 6.21111 7.66829 6.16316 7.52673 6.07336C7.38517 5.98356 7.2719 5.85556 7.19998 5.70414C7.12685 5.55446 7.09803 5.387 7.11693 5.22148C7.13583 5.05597 7.20166 4.89931 7.30665 4.76997L10.8623 0.320463C10.9477 0.22001 11.054 0.139324 11.1737 0.083992C11.2934 0.0286589 11.4238 0 11.5556 0C11.6875 0 11.8178 0.0286589 11.9376 0.083992C12.0573 0.139324 12.1635 0.22001 12.249 0.320463L15.8046 4.76997C15.9096 4.89931 15.9755 5.05597 15.9944 5.22148C16.0133 5.387 15.9844 5.55446 15.9113 5.70414Z"
                    fill="#2A2B2A"
                  />
                </svg>
              </div>
            </div>

            <div className={`flex flex-col w-[25%] gap-[0.3vw] `}>
              <h5>Engagement</h5>
              <div className={`${styles.changeOrder} `} onClick={() => { setsubscriberOrder(!subscriberOrder) }}>
                <p>{subscriberOrder ? 'Ascend' : 'Descend'}</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.80002 10.2959C8.7281 10.1444 8.61483 10.0164 8.47327 9.92664C8.33171 9.83684 8.16764 9.78889 8 9.78834H5.33327V0.889318C5.33327 0.653584 5.23961 0.427504 5.07291 0.260815C4.90621 0.0941257 4.68011 0.000481606 4.44436 0.000481606C4.2086 0.000481606 3.9825 0.0941257 3.8158 0.260815C3.6491 0.427504 3.55544 0.653584 3.55544 0.889318V9.78834H0.888709C0.721067 9.78889 0.556998 9.83684 0.41544 9.92664C0.273883 10.0164 0.160607 10.1444 0.0886892 10.2959C0.0155567 10.4455 -0.0132581 10.613 0.00564103 10.7785C0.0245402 10.944 0.0903656 11.1007 0.195359 11.23L3.751 15.6795C3.83646 15.78 3.94272 15.8607 4.06244 15.916C4.18215 15.9713 4.31247 16 4.44436 16C4.57624 16 4.70656 15.9713 4.82627 15.916C4.94599 15.8607 5.05225 15.78 5.13771 15.6795L8.69335 11.23C8.79834 11.1007 8.86417 10.944 8.88307 10.7785C8.90197 10.613 8.87315 10.4455 8.80002 10.2959ZM15.9113 5.70414C15.8394 5.85556 15.7261 5.98356 15.5846 6.07336C15.443 6.16316 15.2789 6.21111 15.1113 6.21166H12.4446V15.1107C12.4446 15.3464 12.3509 15.5725 12.1842 15.7392C12.0175 15.9059 11.7914 15.9995 11.5556 15.9995C11.3199 15.9995 11.0938 15.9059 10.9271 15.7392C10.7604 15.5725 10.6667 15.3464 10.6667 15.1107V6.21166H8C7.83236 6.21111 7.66829 6.16316 7.52673 6.07336C7.38517 5.98356 7.2719 5.85556 7.19998 5.70414C7.12685 5.55446 7.09803 5.387 7.11693 5.22148C7.13583 5.05597 7.20166 4.89931 7.30665 4.76997L10.8623 0.320463C10.9477 0.22001 11.054 0.139324 11.1737 0.083992C11.2934 0.0286589 11.4238 0 11.5556 0C11.6875 0 11.8178 0.0286589 11.9376 0.083992C12.0573 0.139324 12.1635 0.22001 12.249 0.320463L15.8046 4.76997C15.9096 4.89931 15.9755 5.05597 15.9944 5.22148C16.0133 5.387 15.9844 5.55446 15.9113 5.70414Z"
                    fill="#2A2B2A"
                  />
                </svg>
              </div>
            </div>

          </div>

          <div className='flex gap-[0.5vw] items-end'>
            <BasicModal btnWord={'Add Account'} btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58333 10.0833C4.58333 10.5896 4.99373 11 5.5 11C6.00628 11 6.41667 10.5896 6.41667 10.0833V6.41667H10.0833C10.5896 6.41667 11 6.00628 11 5.5C11 4.99373 10.5896 4.58333 10.0833 4.58333H6.41667V0.916667C6.41667 0.410401 6.00628 0 5.5 0C4.99373 0 4.58333 0.410401 4.58333 0.916667V4.58333H0.916667C0.41041 4.58333 0 4.99373 0 5.5C0 6.00628 0.41041 6.41667 0.916667 6.41667H4.58333V10.0833Z" fill="#FFFFFB" />
            </svg>} btnColor={'black'} modalTitle={'Add Account'} forWhat={'add_account'} />

            <BasicModal btnWord={'Remove Accounts'} btnColor={'white'} modalTitle={'Remove Accounts?'} forWhat={'remove_account'} />
          </div>

        </div>
      </div>

      {/* // table has all accounts data  */}
      <div className="flex w-full">
        <div className={`${styles.box} w-full px-[0.5vw] `}>
          <div className={`${styles.tableContent}`}>
            <ul
              className={`${styles.tableHeader} flex justify-center items-center py-[2vh]`}
            >

              <li className="w-[16%] flex justify-center">
                <div className="flex items-center gap-[0.7vw]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M10.032 0C11.3623 0 12.6382 0.526784 13.5788 1.46447C14.5195 2.40215 15.048 3.67392 15.048 5C15.048 6.32608 14.5195 7.59785 13.5788 8.53553C12.6382 9.47322 11.3623 10 10.032 10C8.70167 10 7.42584 9.47322 6.48515 8.53553C5.54447 7.59785 5.016 6.32608 5.016 5C5.016 3.67392 5.54447 2.40215 6.48515 1.46447C7.42584 0.526784 8.70167 0 10.032 0ZM10.032 12.5C15.5747 12.5 20.064 14.7375 20.064 17.5V20H0V17.5C0 14.7375 4.48932 12.5 10.032 12.5Z" fill="black" />
                  </svg>
                  <p>Account Name</p>
                </div>
              </li>

              <li className="w-[16%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M20.064 9.99695V10.1431C20.0312 11.5143 19.5209 13.0739 17.3631 13.0739C15.131 13.0739 14.6622 11.4008 14.6622 9.99695V6.1508C14.6624 6.04535 14.6409 5.94097 14.5989 5.84416C14.557 5.74735 14.4955 5.66017 14.4184 5.58803C14.3412 5.51589 14.25 5.46034 14.1504 5.42482C14.0508 5.3893 13.9449 5.37458 13.8393 5.38157C13.6406 5.39858 13.4557 5.49011 13.3219 5.63769C13.1882 5.78527 13.1156 5.97791 13.1188 6.17676V6.56138C12.4221 5.939 11.5527 5.54157 10.625 5.42144C9.69728 5.30131 8.75484 5.46412 7.92179 5.88841C7.08874 6.31271 6.40416 6.97859 5.95824 7.79834C5.51231 8.61809 5.32595 9.55327 5.42371 10.4807C5.52147 11.4081 5.89876 12.2842 6.50588 12.9937C7.113 13.7031 7.92147 14.2126 8.8248 14.4551C9.72813 14.6975 10.6839 14.6615 11.5663 14.3518C12.4487 14.042 13.2163 13.4732 13.768 12.72C13.8644 12.8882 13.9734 13.0489 14.094 13.2008C14.612 13.8431 15.5988 14.6123 17.3631 14.6123C17.661 14.6133 17.9586 14.5892 18.2525 14.5402C18.3251 14.5281 18.3997 14.5371 18.4675 14.5659C18.5352 14.5947 18.5932 14.6423 18.6347 14.703C18.6762 14.7636 18.6994 14.8349 18.7016 14.9083C18.7038 14.9817 18.6848 15.0541 18.647 15.1171C17.74 16.6336 16.4466 17.8839 14.8982 18.7409C13.3497 19.598 11.6012 20.0313 9.8304 19.997C4.54623 19.8912 0.212215 15.6566 0.00771685 10.3921C-0.0445894 9.06357 0.169421 7.73794 0.637228 6.4928C1.10504 5.24766 1.81725 4.10802 2.7322 3.14054C3.64714 2.17305 4.74646 1.39716 5.96583 0.858251C7.1852 0.31934 8.50015 0.0282305 9.83374 0.00195328C11.1673 -0.024324 12.4928 0.214759 13.7326 0.705214C14.9723 1.19567 16.1016 1.92765 17.0542 2.85833C18.0067 3.78902 18.7636 4.89972 19.2804 6.12546C19.7972 7.35119 20.0636 8.66736 20.064 9.99695ZM6.94523 9.99695C6.94523 10.6055 7.12627 11.2004 7.46545 11.7064C7.80462 12.2124 8.28671 12.6068 8.85074 12.8397C9.41478 13.0725 10.0354 13.1335 10.6342 13.0148C11.233 12.896 11.783 12.603 12.2147 12.1727C12.6464 11.7423 12.9404 11.1941 13.0595 10.5972C13.1786 10.0004 13.1174 9.3817 12.8838 8.81946C12.6502 8.25723 12.2545 7.77668 11.7469 7.43858C11.2393 7.10049 10.6425 6.92003 10.032 6.92003C9.21334 6.92003 8.42821 7.2442 7.84932 7.82124C7.27044 8.39827 6.94523 9.1809 6.94523 9.99695Z" fill="black" />
                </svg>
                <p>Username</p>
              </div></li>

              <li className="w-[16%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                  <path d="M9.09794 13.8545C9.19468 13.9506 9.27143 14.0647 9.3238 14.1905C9.37617 14.3162 9.40312 14.451 9.40312 14.5871C9.40312 14.7232 9.37617 14.858 9.3238 14.9837C9.27143 15.1094 9.19468 15.2236 9.09794 15.3197L8.65523 15.761C8.18528 16.2312 7.62648 16.6039 7.01115 16.8574C6.39582 17.111 5.73616 17.2405 5.07032 17.2383C4.06759 17.2387 3.08729 16.9425 2.25345 16.3873C1.41961 15.8322 0.769695 15.043 0.385924 14.1195C0.00215327 13.1961 -0.0982264 12.18 0.0974847 11.1997C0.293196 10.2194 0.776203 9.31894 1.4854 8.61233L4.49012 5.61719C5.12923 4.98022 5.92752 4.52509 6.80235 4.29894C7.67717 4.07279 8.59674 4.08383 9.46585 4.33092C10.335 4.578 11.122 5.05215 11.7456 5.70428C12.3691 6.35641 12.8064 7.16282 13.0123 8.04002C13.0464 8.17339 13.0534 8.31221 13.033 8.44834C13.0126 8.58446 12.9652 8.71515 12.8934 8.83276C12.8217 8.95036 12.7271 9.05252 12.6153 9.13323C12.5034 9.21394 12.3766 9.27158 12.2421 9.30279C12.1076 9.33399 11.9682 9.33813 11.8321 9.31495C11.696 9.29177 11.5659 9.24175 11.4494 9.16781C11.333 9.09387 11.2325 8.99751 11.1539 8.88437C11.0752 8.77122 11.0201 8.64357 10.9916 8.5089C10.8694 7.99109 10.6107 7.5152 10.2422 7.13043C9.87377 6.74566 9.40889 6.46597 8.89566 6.32028C8.38243 6.17458 7.83947 6.16818 7.32292 6.30171C6.80637 6.43525 6.33498 6.70389 5.95747 7.07985L2.95274 10.075C2.53391 10.4922 2.24858 11.0238 2.13285 11.6026C2.01712 12.1814 2.07619 12.7814 2.30258 13.3268C2.52897 13.8721 2.91251 14.3383 3.40471 14.6663C3.8969 14.9944 4.47564 15.1696 5.06772 15.1697C5.46112 15.1708 5.85084 15.0942 6.21432 14.9442C6.5778 14.7941 6.90782 14.5738 7.1853 14.2958L7.62714 13.8545C7.72355 13.7579 7.83815 13.6813 7.96435 13.629C8.09056 13.5767 8.22588 13.5498 8.36254 13.5498C8.49921 13.5498 8.63453 13.5767 8.76073 13.629C8.88693 13.6813 9.00153 13.7579 9.09794 13.8545ZM18.579 1.48002C17.628 0.532362 16.3384 0 14.9937 0C13.649 0 12.3593 0.532362 11.4083 1.48002L10.9665 1.92046C10.7716 2.11476 10.6621 2.37829 10.6621 2.65308C10.6621 2.92787 10.7716 3.1914 10.9665 3.3857C11.1614 3.58001 11.4258 3.68917 11.7015 3.68917C11.9771 3.68917 12.2415 3.58001 12.4364 3.3857L12.8791 2.94441C13.441 2.38435 14.203 2.06972 14.9976 2.06972C15.7921 2.06972 16.5542 2.38435 17.116 2.94441C17.6779 3.50446 17.9935 4.26405 17.9935 5.05609C17.9935 5.84812 17.6779 6.60771 17.116 7.16777L14.1061 10.1586C13.8287 10.4367 13.4987 10.6571 13.1352 10.8071C12.7717 10.9571 12.3819 11.0338 11.9885 11.0326C11.3137 11.0321 10.6587 10.8044 10.13 10.3863C9.6012 9.96832 9.22961 9.38449 9.07546 8.72955C9.01309 8.46232 8.84677 8.23074 8.6131 8.08575C8.37943 7.94076 8.09756 7.89424 7.82947 7.95641C7.56139 8.01859 7.32907 8.18438 7.18362 8.4173C7.03816 8.65022 6.99149 8.9312 7.05387 9.19843C7.31422 10.3076 7.94284 11.2966 8.83776 12.005C9.73268 12.7134 10.8414 13.0996 11.9842 13.1012H11.9885C12.6547 13.103 13.3146 12.9731 13.9301 12.7191C14.5456 12.4651 15.1044 12.0919 15.5743 11.6213L18.579 8.62612C19.0498 8.15694 19.4233 7.5999 19.6781 6.98683C19.9329 6.37376 20.064 5.71667 20.064 5.05307C20.064 4.38947 19.9329 3.73238 19.6781 3.11931C19.4233 2.50624 19.0498 1.9492 18.579 1.48002Z" fill="black" />
                </svg>
                <p>Link</p>
              </div></li>

              <li className="w-[16%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.09889 11.2856L10.6333 20H1.11111C0.497778 20 0 19.5022 0 18.8889V12.8911L9.09889 11.2856ZM18.8889 0C19.5022 0 20 0.497778 20 1.11111V18.8889C20 19.5022 19.5022 20 18.8889 20H12.8911L9.36445 0H18.8889ZM7.10778 0L8.71222 9.09778L0 10.6333V1.11111C0 0.497778 0.497778 0 1.11111 0H7.10778Z" fill="#2A2B2A" />
                </svg>
                <p>Brand</p>
              </div>
              </li>

              <li className="w-[16%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
                  <path d="M9.4475 5.25409C9.57794 5.25409 9.6432 5.17839 9.67581 5.05948C10.0128 3.25406 9.9911 3.21084 11.8828 2.85405C12.0132 2.83247 12.0893 2.75677 12.0893 2.62702C12.0893 2.49731 12.0132 2.42162 11.8828 2.39999C10.002 2.02166 10.0563 1.97839 9.67581 0.194606C9.6432 0.0756929 9.57794 0 9.4475 0C9.31702 0 9.2518 0.0756929 9.21919 0.194606C8.83869 1.97839 8.90391 2.02166 7.01224 2.39999C6.89266 2.42162 6.80569 2.49731 6.80569 2.62702C6.80569 2.75677 6.89266 2.83247 7.01224 2.85405C8.90391 3.23247 8.88215 3.25406 9.21919 5.05948C9.2518 5.17839 9.31702 5.25409 9.4475 5.25409ZM4.18563 12.6919C4.39218 12.6919 4.53352 12.5622 4.55523 12.3676C4.94663 9.48108 5.04446 9.48108 8.04507 8.90815C8.24077 8.87568 8.38206 8.74597 8.38206 8.54057C8.38206 8.34596 8.24077 8.20542 8.04507 8.17299C5.04446 7.76219 4.93573 7.66487 4.55523 4.72433C4.53352 4.52977 4.39218 4.38922 4.18563 4.38922C3.98993 4.38922 3.84859 4.52977 3.82683 4.73517C3.46809 7.63244 3.31585 7.62165 0.33704 8.17299C0.141338 8.21626 0 8.34596 0 8.54057C0 8.75676 0.141338 8.87568 0.380503 8.90815C3.3376 9.3838 3.46809 9.45949 3.82683 12.346C3.84859 12.5622 3.98993 12.6919 4.18563 12.6919ZM11.5566 24.6595C11.8393 24.6595 12.0459 24.4541 12.1002 24.1622C12.8721 18.2378 13.7092 17.3406 19.6016 16.6919C19.9061 16.6595 20.1126 16.4324 20.1126 16.1514C20.1126 15.8703 19.9061 15.654 19.6016 15.6108C13.7092 14.9622 12.8721 14.0649 12.1002 8.14056C12.0459 7.84868 11.8393 7.65407 11.5566 7.65407C11.2739 7.65407 11.0674 7.84868 11.0239 8.14056C10.252 14.0649 9.40404 14.9622 3.5224 15.6108C3.20716 15.654 3.00061 15.8703 3.00061 16.1514C3.00061 16.4324 3.20716 16.6595 3.5224 16.6919C9.39314 17.4595 10.2085 18.2487 11.0239 24.1622C11.0674 24.4541 11.2739 24.6595 11.5566 24.6595Z" fill="#2A2B2A" />
                </svg>
                <p>Niche</p>
              </div>
              </li>

              <li className="w-[16%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.5H13.125V3.75H11.25V12.5ZM18.75 0L14.375 2.91687V13.3331L18.75 16.25C19.44 16.25 20 15.69 20 15V1.25C20 0.56 19.44 0 18.75 0ZM0 8.125C0 10.4581 1.60062 11.9675 3.76187 12.3812L3.75 12.5V17.5C3.75 18.19 4.31 18.75 5 18.75H6.875C7.565 18.75 8.125 18.19 8.125 17.5V12.5H10V3.75H5C2.23875 3.75 0 5.36375 0 8.125Z" fill="#2A2B2A" />
                </svg>
                <p>Campaign Type</p>
              </div>
              </li>

            </ul>
            <div className={styles.tableBodyWrapper}>
              {renderAccounts}
            </div>
          </div>
        </div>
        {/* for chat */}
        <div className=' flex items-end pb-[6vw]  w-[5%] justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
            <circle cx="21.5" cy="21.5" r="21.5" fill="#2A2B2A" />
            <path d="M21.825 9.77246C24.8479 9.77587 27.7459 10.9782 29.8834 13.1157C32.0208 15.2531 33.2232 18.1512 33.2266 21.174V30.7893C33.226 31.2628 33.0376 31.7169 32.7028 32.0517C32.3679 32.3866 31.9139 32.575 31.4403 32.5755H21.825C18.8012 32.5755 15.9012 31.3743 13.763 29.2361C11.6248 27.0979 10.4235 24.1978 10.4235 21.174C10.4235 18.1501 11.6248 15.2501 13.763 13.1119C15.9012 10.9737 18.8012 9.77246 21.825 9.77246ZM18.6328 24.3664H25.4738C25.7157 24.3664 25.9477 24.2703 26.1187 24.0992C26.2898 23.9282 26.3859 23.6962 26.3859 23.4543C26.3859 23.2124 26.2898 22.9804 26.1187 22.8093C25.9477 22.6383 25.7157 22.5422 25.4738 22.5422H18.6328C18.3909 22.5422 18.1589 22.6383 17.9879 22.8093C17.8168 22.9804 17.7207 23.2124 17.7207 23.4543C17.7207 23.6962 17.8168 23.9282 17.9879 24.0992C18.1589 24.2703 18.3909 24.3664 18.6328 24.3664ZM18.6328 20.7179H25.4738C25.7157 20.7179 25.9477 20.6218 26.1187 20.4508C26.2898 20.2797 26.3859 20.0477 26.3859 19.8058C26.3859 19.5639 26.2898 19.3319 26.1187 19.1608C25.9477 18.9898 25.7157 18.8937 25.4738 18.8937H18.6328C18.3909 18.8937 18.1589 18.9898 17.9879 19.1608C17.8168 19.3319 17.7207 19.5639 17.7207 19.8058C17.7207 20.0477 17.8168 20.2797 17.9879 20.4508C18.1589 20.6218 18.3909 20.7179 18.6328 20.7179Z" fill="#FFFFFB" />
          </svg>
        </div>
      </div>
    </div>
  )
}
export default AccountList