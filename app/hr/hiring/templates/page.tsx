'use client'
import React from 'react'
import styles from './templates.module.css'
import CustomBtn from '@/app/_components/Button/CustomBtn'
import { SimplePagination } from '@/app/_components/Pagination/pagination'


const addIcon = <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.58333 10.0833C4.58333 10.5896 4.99373 11 5.5 11C6.00628 11 6.41667 10.5896 6.41667 10.0833V6.41667H10.0833C10.5896 6.41667 11 6.00628 11 5.5C11 4.99373 10.5896 4.58333 10.0833 4.58333H6.41667V0.916667C6.41667 0.410401 6.00628 0 5.5 0C4.99373 0 4.58333 0.410401 4.58333 0.916667V4.58333H0.916667C0.41041 4.58333 0 4.99373 0 5.5C0 6.00628 0.41041 6.41667 0.916667 6.41667H4.58333V10.0833Z" fill="#FFFFFB"/>
</svg>

const Page = () => {




  return (
    <div className="flex flex-col h-full">
      <div className={"flex flex-col w-full py-[1vw] " + styles.templates_group_wrapper}>
        <div className={styles.templates_group_header + ' flex items-center justify-between mb-[0.8vw]'}>
          <h6>Template Groups</h6>
          <SimplePagination />
        </div>

        <div className={styles.templates_group_slider + " grid lg:grid-cols-3 xl:grid-cols-4 gap-[1vw]"}>
          <div className={styles.box}>
            <div className={styles.header}>
              <div className='flex items-center gap-[1vw]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="25" viewBox="0 0 36 25" fill="none">
                  <path d="M32.431 0H3.2832C1.47014 0 0 1.54727 0 3.45676V21.5433C0 23.4521 1.47014 25 3.2832 25H32.4311C34.2441 25 35.7143 23.4521 35.7143 21.5433V3.45676C35.7142 1.54727 34.2441 0 32.431 0ZM8.5975 5.99299C10.4087 5.99299 11.8778 7.5396 11.8778 9.44725C11.8778 11.3548 10.4087 12.9008 8.5975 12.9008C6.7857 12.9008 5.3173 11.3548 5.3173 9.44725C5.3173 7.5396 6.7857 5.99299 8.5975 5.99299ZM8.5975 19.3239C6.34409 19.3239 4.03633 18.5023 4.39627 16.2281C4.54289 15.3045 5.26875 14.01 5.81974 13.4298C5.89061 13.3552 6.21399 13.3358 6.30209 13.3931C6.97069 13.8269 7.7557 14.0808 8.5975 14.0808C9.4393 14.0808 10.2237 13.8269 10.8923 13.3931C10.9804 13.3358 11.3037 13.3552 11.3753 13.4298C11.9256 14.01 12.6515 15.3045 12.7981 16.2281C13.1582 18.5023 10.8504 19.3239 8.5975 19.3239ZM25.5597 18.1911H16.1965V16.2082H25.5596V18.1911H25.5597ZM31.1583 13.3129H16.1965V11.3299H31.1583V13.3129ZM31.1583 8.43456H16.1965V6.45163H31.1583V8.43456Z" fill="#2A2B2A" />
                </svg>
                <p>Job Listings </p>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="25" viewBox="0 0 7 25" fill="none">
                  <path d="M0 22.1641L0 21.4801C0.0168611 21.4245 0.0443718 21.3747 0.0559083 21.3191C0.29995 19.8803 1.61955 18.744 3.16722 18.6482C4.89769 18.538 6.36194 19.4328 6.83849 20.891C6.89972 21.0825 6.94409 21.2837 6.99911 21.4793V22.1633C6.98225 22.2084 6.95474 22.2486 6.94942 22.2993C6.7107 23.6271 5.65733 24.6379 4.21526 24.9244C4.10433 24.9445 3.99341 24.9751 3.88248 25H3.12817C3.07847 24.9847 3.02789 24.9598 2.97819 24.9549C1.53613 24.7441 0.438388 23.813 0.105604 22.5206C0.0727691 22.3951 0.0337221 22.28 0 22.1641ZM7 2.83107V3.5151C6.98314 3.57062 6.95563 3.62052 6.9503 3.67604C6.70094 5.12457 5.37513 6.25604 3.8106 6.34697C2.08545 6.44756 0.626521 5.54223 0.155299 4.07841C0.0940671 3.89252 0.0496957 3.70099 0 3.5151L0 2.83107C0.0168611 2.786 0.0443718 2.74577 0.0559083 2.7007C0.322135 1.393 1.15986 0.537565 2.55756 0.130368C2.74036 0.0748407 2.93471 0.0450653 3.12284 0L3.87715 0C3.92685 0.01529 3.97743 0.0402369 4.02713 0.0450654C5.47452 0.26154 6.56782 1.18699 6.90061 2.4794C6.93433 2.60011 6.96628 2.71599 7 2.83107ZM6.99911 12.1556V12.8396C6.98225 12.8951 6.95474 12.945 6.9432 13.0005C6.69384 14.4442 5.31833 15.6063 3.76534 15.6666C2.018 15.7367 0.537779 14.7814 0.121577 13.308C0.0772059 13.1518 0.0381592 12.9965 0 12.8404L0 12.1564C0.0168611 12.1008 0.0443718 12.051 0.0559083 11.9954C0.29995 10.5517 1.68078 9.38969 3.23377 9.3245C4.98111 9.24886 6.46133 10.2097 6.87753 11.6832C6.92191 11.8441 6.96095 12.0003 6.99911 12.1564V12.1556Z" fill="#2A2B2A" />
                </svg>
              </button>
            </div>
            <div className={styles.body + " space-y-[0.6vw]"}>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.header}>
              <div className='flex items-center gap-[1vw]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                  <mask id="path-1-inside-1_427_3034" fill="white">
                    <path d="M20.0192 2.29809H14.0852C13.848 1.62844 13.3954 1.04642 12.7914 0.634109C12.1873 0.221797 11.4623 0 10.7184 0C9.97456 0 9.24948 0.221797 8.64543 0.634109C8.04138 1.04642 7.58885 1.62844 7.35165 2.29809H1.64835C1.44651 2.27036 1.24078 2.2836 1.04473 2.33694C0.848673 2.39028 0.666758 2.48251 0.510986 2.60753C0.355214 2.73255 0.229127 2.88753 0.141046 3.06224C0.0529648 3.23695 0.00489195 3.42741 0 3.62106V23.677C0.00107915 23.8518 0.0383894 24.0246 0.1098 24.1857C0.181211 24.3468 0.285323 24.4929 0.416193 24.6157C0.547063 24.7386 0.702127 24.8357 0.872532 24.9017C1.04294 24.9676 1.22534 25.001 1.40934 25H20.0192C20.2032 25.001 20.3856 24.9676 20.556 24.9017C20.7264 24.8357 20.8815 24.7386 21.0124 24.6157C21.1432 24.4929 21.2474 24.3468 21.3188 24.1857C21.3902 24.0246 21.4275 23.8518 21.4286 23.677V3.62106C21.4275 3.44629 21.3902 3.27344 21.3188 3.11238C21.2474 2.95131 21.1432 2.80518 21.0124 2.68233C20.8815 2.55948 20.7264 2.46231 20.556 2.39639C20.3856 2.33046 20.2032 2.29706 20.0192 2.29809ZM5.18407 4.64656C5.18407 4.43894 5.2709 4.23983 5.42546 4.09302C5.58002 3.94621 5.78966 3.86373 6.00824 3.86373H8.84341V3.37055C8.84341 2.88992 9.04443 2.42897 9.40224 2.08911C9.76005 1.74925 10.2453 1.55832 10.7514 1.55832C11.2574 1.55832 11.7427 1.74925 12.1005 2.08911C12.4583 2.42897 12.6593 2.88992 12.6593 3.37055V3.90288H15.4945C15.7131 3.90288 15.9227 3.98535 16.0773 4.13216C16.2318 4.27897 16.3187 4.47808 16.3187 4.6857V6.09478H5.1511L5.18407 4.64656ZM17.1511 11.872L9.63462 19.0114L5.31593 14.9094C5.09735 14.7018 4.97455 14.4202 4.97455 14.1266C4.97455 13.8329 5.09735 13.5513 5.31593 13.3437C5.53452 13.1361 5.83098 13.0195 6.14011 13.0195C6.44924 13.0195 6.7457 13.1361 6.96429 13.3437L9.6511 15.8957L15.5357 10.3064C15.7543 10.0988 16.0508 9.98212 16.3599 9.98212C16.669 9.98212 16.9655 10.0988 17.1841 10.3064C17.4027 10.514 17.5255 10.7956 17.5255 11.0892C17.5255 11.3828 17.4027 11.6644 17.1841 11.872H17.1511Z" />
                  </mask>
                  <path d="M20.0192 2.29809H14.0852C13.848 1.62844 13.3954 1.04642 12.7914 0.634109C12.1873 0.221797 11.4623 0 10.7184 0C9.97456 0 9.24948 0.221797 8.64543 0.634109C8.04138 1.04642 7.58885 1.62844 7.35165 2.29809H1.64835C1.44651 2.27036 1.24078 2.2836 1.04473 2.33694C0.848673 2.39028 0.666758 2.48251 0.510986 2.60753C0.355214 2.73255 0.229127 2.88753 0.141046 3.06224C0.0529648 3.23695 0.00489195 3.42741 0 3.62106V23.677C0.00107915 23.8518 0.0383894 24.0246 0.1098 24.1857C0.181211 24.3468 0.285323 24.4929 0.416193 24.6157C0.547063 24.7386 0.702127 24.8357 0.872532 24.9017C1.04294 24.9676 1.22534 25.001 1.40934 25H20.0192C20.2032 25.001 20.3856 24.9676 20.556 24.9017C20.7264 24.8357 20.8815 24.7386 21.0124 24.6157C21.1432 24.4929 21.2474 24.3468 21.3188 24.1857C21.3902 24.0246 21.4275 23.8518 21.4286 23.677V3.62106C21.4275 3.44629 21.3902 3.27344 21.3188 3.11238C21.2474 2.95131 21.1432 2.80518 21.0124 2.68233C20.8815 2.55948 20.7264 2.46231 20.556 2.39639C20.3856 2.33046 20.2032 2.29706 20.0192 2.29809ZM5.18407 4.64656C5.18407 4.43894 5.2709 4.23983 5.42546 4.09302C5.58002 3.94621 5.78966 3.86373 6.00824 3.86373H8.84341V3.37055C8.84341 2.88992 9.04443 2.42897 9.40224 2.08911C9.76005 1.74925 10.2453 1.55832 10.7514 1.55832C11.2574 1.55832 11.7427 1.74925 12.1005 2.08911C12.4583 2.42897 12.6593 2.88992 12.6593 3.37055V3.90288H15.4945C15.7131 3.90288 15.9227 3.98535 16.0773 4.13216C16.2318 4.27897 16.3187 4.47808 16.3187 4.6857V6.09478H5.1511L5.18407 4.64656ZM17.1511 11.872L9.63462 19.0114L5.31593 14.9094C5.09735 14.7018 4.97455 14.4202 4.97455 14.1266C4.97455 13.8329 5.09735 13.5513 5.31593 13.3437C5.53452 13.1361 5.83098 13.0195 6.14011 13.0195C6.44924 13.0195 6.7457 13.1361 6.96429 13.3437L9.6511 15.8957L15.5357 10.3064C15.7543 10.0988 16.0508 9.98212 16.3599 9.98212C16.669 9.98212 16.9655 10.0988 17.1841 10.3064C17.4027 10.514 17.5255 10.7956 17.5255 11.0892C17.5255 11.3828 17.4027 11.6644 17.1841 11.872H17.1511Z" fill="#2A2B2A" />
                  <path d="M20.0192 2.29809V24.5203H20.0815L20.1438 24.52L20.0192 2.29809ZM14.0852 2.29809L-6.8618 9.71779L-1.61854 24.5203H14.0852V2.29809ZM7.35165 2.29809V24.5203H23.0554L28.2986 9.71779L7.35165 2.29809ZM1.64835 2.29809L-1.37608 24.3135L0.12907 24.5203H1.64835V2.29809ZM0 3.62106L-22.2151 3.05986L-22.2222 3.34042V3.62106H0ZM0 23.677H-22.2222V23.7456L-22.2218 23.8142L0 23.677ZM1.40934 25V2.77776H1.34708L1.28482 2.7781L1.40934 25ZM20.0192 25L20.1438 2.7781L20.0815 2.77776H20.0192V25ZM21.4286 23.677L43.6504 23.8142L43.6508 23.7456V23.677H21.4286ZM21.4286 3.62106H43.6508V3.55245L43.6504 3.48384L21.4286 3.62106ZM5.18407 4.64656L27.4005 5.15229L27.4063 4.89946V4.64656H5.18407ZM8.84341 3.86373V26.086H31.0656V3.86373H8.84341ZM8.84341 3.37055L-13.3788 3.37055V3.37055H8.84341ZM10.7514 1.55832V23.7805V1.55832ZM12.6593 3.37055H34.8816V3.37055L12.6593 3.37055ZM12.6593 3.90288H-9.56288V26.1251H12.6593V3.90288ZM16.3187 6.09478V28.317H38.5409V6.09478H16.3187ZM5.1511 6.09478L-17.0654 5.58905L-17.5827 28.317H5.1511V6.09478ZM17.1511 11.872V-10.3502H8.2795L1.84703 -4.24048L17.1511 11.872ZM9.63462 19.0114L-5.66945 35.1239L9.63462 49.6601L24.9387 35.1239L9.63462 19.0114ZM5.31593 14.9094L-9.98814 31.0219L-9.98814 31.0219L5.31593 14.9094ZM6.14011 13.0195V35.2417V13.0195ZM6.96429 13.3437L22.2684 -2.76876L22.2684 -2.76877L6.96429 13.3437ZM9.6511 15.8957L-5.65298 32.0082L9.65109 46.5444L24.9552 32.0082L9.6511 15.8957ZM15.5357 10.3064L30.8398 26.4189L30.8398 26.4189L15.5357 10.3064ZM16.3599 9.98212V-12.2401V9.98212ZM17.5255 11.0892H-4.69677H17.5255ZM17.1841 11.872V34.0942H26.0557L32.4881 27.9845L17.1841 11.872ZM20.0192 -19.9241H14.0852V24.5203H20.0192V-19.9241ZM35.0321 -5.12161C33.1711 -10.3755 29.6961 -14.7326 25.3195 -17.72L0.263229 18.9882C-2.90522 16.8255 -5.47519 13.6324 -6.8618 9.71779L35.0321 -5.12161ZM25.3195 -17.72C20.9568 -20.6979 15.8509 -22.2222 10.7184 -22.2222V22.2222C7.07366 22.2222 3.41785 21.1415 0.263229 18.9882L25.3195 -17.72ZM10.7184 -22.2222C5.58595 -22.2222 0.479985 -20.6979 -3.88273 -17.72L21.1736 18.9882C18.019 21.1415 14.3632 22.2222 10.7184 22.2222V-22.2222ZM-3.88273 -17.72C-8.25928 -14.7326 -11.7343 -10.3755 -13.5953 -5.12161L28.2986 9.71779C26.912 13.6324 24.342 16.8255 21.1736 18.9882L-3.88273 -17.72ZM7.35165 -19.9241H1.64835V24.5203H7.35165V-19.9241ZM4.67278 -19.7174C1.51798 -20.1508 -1.70087 -19.9461 -4.78922 -19.1058L6.87867 23.7797C4.18243 24.5133 1.37505 24.6915 -1.37608 24.3135L4.67278 -19.7174ZM-4.78922 -19.1058C-7.87887 -18.2652 -10.8202 -16.7925 -13.3986 -14.7231L14.4206 19.9381C12.1537 21.7576 9.57621 23.0458 6.87867 23.7797L-4.78922 -19.1058ZM-13.3986 -14.7231C-15.9801 -12.6511 -18.1524 -10.0154 -19.7019 -6.94191L19.984 13.0664C18.6106 15.7905 16.6906 18.1162 14.4206 19.9381L-13.3986 -14.7231ZM-19.7019 -6.94191C-21.2537 -3.86407 -22.1264 -0.452034 -22.2151 3.05986L22.2151 4.18225C22.1362 7.30685 21.3596 10.338 19.984 13.0664L-19.7019 -6.94191ZM-22.2222 3.62106V23.677H22.2222V3.62106H-22.2222ZM-22.2218 23.8142C-22.2017 27.0707 -21.5051 30.2609 -20.2053 33.1925L20.4249 15.1788C21.5819 17.7883 22.2038 20.6329 22.2218 23.5398L-22.2218 23.8142ZM-20.2053 33.1925C-18.9069 36.121 -17.0479 38.7011 -14.793 40.8178L15.6254 8.41364C17.6185 10.2846 19.2694 12.5725 20.4249 15.1788L-20.2053 33.1925ZM-14.793 40.8178C-12.5405 42.9323 -9.93285 44.5486 -7.14586 45.6268L8.89092 4.17651C11.3371 5.12291 13.6346 6.54485 15.6254 8.41364L-14.793 40.8178ZM-7.14586 45.6268C-4.36034 46.7045 -1.41429 47.2384 1.53386 47.2218L1.28482 2.7781C3.86498 2.76365 6.44622 3.23067 8.89092 4.17651L-7.14586 45.6268ZM1.40934 47.2222H20.0192V2.77776H1.40934V47.2222ZM19.8947 47.2218C22.8429 47.2384 25.7889 46.7045 28.5744 45.6268L12.5377 4.17651C14.9823 3.23068 17.5636 2.76365 20.1438 2.7781L19.8947 47.2218ZM28.5744 45.6268C31.3614 44.5486 33.969 42.9323 36.2216 40.8178L5.8032 8.41364C7.794 6.54484 10.0915 5.12291 12.5377 4.17651L28.5744 45.6268ZM36.2216 40.8178C38.4765 38.7011 40.3355 36.121 41.6339 33.1925L1.00366 15.1788C2.15917 12.5726 3.80998 10.2847 5.8032 8.41364L36.2216 40.8178ZM41.6339 33.1925C42.9336 30.2609 43.6303 27.0707 43.6504 23.8142L-0.793226 23.5398C-0.775276 20.6328 -0.15327 17.7883 1.00366 15.1788L41.6339 33.1925ZM43.6508 23.677V3.62106H-0.79365V23.677H43.6508ZM43.6504 3.48384C43.6303 0.227319 42.9336 -2.96289 41.6339 -5.89447L1.00366 12.1192C-0.153258 9.50978 -0.775276 6.66527 -0.793226 3.75827L43.6504 3.48384ZM41.6339 -5.89447C40.3356 -8.82285 38.4766 -11.403 36.2216 -13.5198L5.8032 18.8844C3.80994 17.0133 2.15915 14.7255 1.00366 12.1192L41.6339 -5.89447ZM36.2216 -13.5198C33.969 -15.6343 31.3614 -17.2505 28.5744 -18.3288L12.5377 23.1216C10.0915 22.1752 7.794 20.7532 5.8032 18.8844L36.2216 -13.5198ZM28.5744 -18.3288C25.7888 -19.4065 22.8428 -19.9403 19.8947 -19.9238L20.1438 24.52C17.5637 24.5344 14.9825 24.0674 12.5377 23.1216L28.5744 -18.3288ZM27.4063 4.64656C27.4063 10.7126 24.8587 16.2835 20.7295 20.2055L-9.87861 -12.0195C-14.3169 -7.80386 -17.0382 -1.83468 -17.0382 4.64656H27.4063ZM20.7295 20.2055C16.6392 24.0906 11.3248 26.086 6.00824 26.086V-18.3585C0.254482 -18.3585 -5.47916 -16.1982 -9.87861 -12.0195L20.7295 20.2055ZM6.00824 26.086H8.84341V-18.3585H6.00824V26.086ZM31.0656 3.86373V3.37055H-13.3788V3.86373H31.0656ZM31.0656 3.37056C31.0656 9.16355 28.6322 14.4727 24.7063 18.2016L-5.90183 -14.0234C-10.5434 -9.61473 -13.3788 -3.38371 -13.3788 3.37055L31.0656 3.37056ZM24.7063 18.2016C20.8192 21.8937 15.7805 23.7805 10.7514 23.7805V-20.6639C4.71019 -20.6639 -1.29913 -18.3952 -5.90183 -14.0234L24.7063 18.2016ZM10.7514 23.7805C5.72223 23.7805 0.683515 21.8937 -3.20356 18.2016L27.4046 -14.0234C22.8019 -18.3952 16.7926 -20.6639 10.7514 -20.6639V23.7805ZM-3.20356 18.2016C-7.12948 14.4727 -9.56288 9.16355 -9.56288 3.37056L34.8816 3.37055C34.8816 -3.38371 32.0461 -9.61473 27.4046 -14.0234L-3.20356 18.2016ZM-9.56288 3.37055V3.90288H34.8816V3.37055H-9.56288ZM12.6593 26.1251H15.4945V-18.3193H12.6593V26.1251ZM15.4945 26.1251C10.1779 26.1251 4.86355 24.1298 0.773215 20.2447L31.3814 -11.9803C26.9819 -16.1591 21.2482 -18.3193 15.4945 -18.3193V26.1251ZM0.773215 20.2447C-3.356 16.3226 -5.90354 10.7516 -5.90354 4.6857H38.5409C38.5409 -1.79548 35.8197 -7.76468 31.3814 -11.9803L0.773215 20.2447ZM-5.90354 4.6857V6.09478H38.5409V4.6857H-5.90354ZM16.3187 -16.1274H5.1511V28.317H16.3187V-16.1274ZM27.3676 6.60051L27.4005 5.15229L-17.0324 4.14083L-17.0654 5.58905L27.3676 6.60051ZM1.84703 -4.24048L-5.66945 2.89888L24.9387 35.1239L32.4552 27.9845L1.84703 -4.24048ZM24.9387 2.89888L20.62 -1.20312L-9.98814 31.0219L-5.66945 35.1239L24.9387 2.89888ZM20.62 -1.20312C24.6852 2.65809 27.1968 8.14658 27.1968 14.1266L-17.2477 14.1266C-17.2477 20.6938 -14.4905 26.7454 -9.98814 31.0219L20.62 -1.20312ZM27.1968 14.1266C27.1968 20.1065 24.6852 25.595 20.62 29.4562L-9.98814 -2.76877C-14.4905 1.50768 -17.2477 7.55935 -17.2477 14.1266L27.1968 14.1266ZM20.62 29.4562C16.5937 33.2805 11.3661 35.2417 6.14011 35.2417L6.14011 -9.20275C0.29584 -9.20275 -5.52465 -7.00831 -9.98814 -2.76877L20.62 29.4562ZM6.14011 35.2417C0.91409 35.2417 -4.31347 33.2805 -8.33978 29.4562L22.2684 -2.76877C17.8049 -7.0083 11.9844 -9.20275 6.14011 -9.20275L6.14011 35.2417ZM-8.33979 29.4562L-5.65298 32.0082L24.9552 -0.216759L22.2684 -2.76876L-8.33979 29.4562ZM24.9552 32.0082L30.8398 26.4189L0.231647 -5.80613L-5.65297 -0.216765L24.9552 32.0082ZM30.8398 26.4189C26.8135 30.2431 21.5859 32.2043 16.3599 32.2043V-12.2401C10.5156 -12.2401 4.69511 -10.0456 0.231644 -5.80612L30.8398 26.4189ZM16.3599 32.2043C11.1338 32.2043 5.90629 30.2431 1.88 26.4189L32.4881 -5.80612C28.0247 -10.0456 22.2042 -12.2401 16.3599 -12.2401V32.2043ZM1.88 26.4189C-2.18518 22.5577 -4.69677 17.0692 -4.69677 11.0892H39.7477C39.7477 4.522 36.9905 -1.52967 32.4881 -5.80612L1.88 26.4189ZM-4.69677 11.0892C-4.69677 5.10923 -2.18518 -0.379261 1.88 -4.24047L32.4881 27.9845C36.9905 23.7081 39.7477 17.6564 39.7477 11.0892H-4.69677ZM17.1841 -10.3502H17.1511V34.0942H17.1841V-10.3502Z" fill="#DFDFDF" mask="url(#path-1-inside-1_427_3034)" />
                </svg>
                <p>Tasks </p>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="25" viewBox="0 0 7 25" fill="none">
                  <path d="M0 22.1641L0 21.4801C0.0168611 21.4245 0.0443718 21.3747 0.0559083 21.3191C0.29995 19.8803 1.61955 18.744 3.16722 18.6482C4.89769 18.538 6.36194 19.4328 6.83849 20.891C6.89972 21.0825 6.94409 21.2837 6.99911 21.4793V22.1633C6.98225 22.2084 6.95474 22.2486 6.94942 22.2993C6.7107 23.6271 5.65733 24.6379 4.21526 24.9244C4.10433 24.9445 3.99341 24.9751 3.88248 25H3.12817C3.07847 24.9847 3.02789 24.9598 2.97819 24.9549C1.53613 24.7441 0.438388 23.813 0.105604 22.5206C0.0727691 22.3951 0.0337221 22.28 0 22.1641ZM7 2.83107V3.5151C6.98314 3.57062 6.95563 3.62052 6.9503 3.67604C6.70094 5.12457 5.37513 6.25604 3.8106 6.34697C2.08545 6.44756 0.626521 5.54223 0.155299 4.07841C0.0940671 3.89252 0.0496957 3.70099 0 3.5151L0 2.83107C0.0168611 2.786 0.0443718 2.74577 0.0559083 2.7007C0.322135 1.393 1.15986 0.537565 2.55756 0.130368C2.74036 0.0748407 2.93471 0.0450653 3.12284 0L3.87715 0C3.92685 0.01529 3.97743 0.0402369 4.02713 0.0450654C5.47452 0.26154 6.56782 1.18699 6.90061 2.4794C6.93433 2.60011 6.96628 2.71599 7 2.83107ZM6.99911 12.1556V12.8396C6.98225 12.8951 6.95474 12.945 6.9432 13.0005C6.69384 14.4442 5.31833 15.6063 3.76534 15.6666C2.018 15.7367 0.537779 14.7814 0.121577 13.308C0.0772059 13.1518 0.0381592 12.9965 0 12.8404L0 12.1564C0.0168611 12.1008 0.0443718 12.051 0.0559083 11.9954C0.29995 10.5517 1.68078 9.38969 3.23377 9.3245C4.98111 9.24886 6.46133 10.2097 6.87753 11.6832C6.92191 11.8441 6.96095 12.0003 6.99911 12.1564V12.1556Z" fill="#2A2B2A" />
                </svg>
              </button>
            </div>
            <div className={styles.body + " space-y-[0.6vw]"}>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.header}>
              <div className='flex items-center gap-[1vw]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.11929 1.12118 0 2.50423 0H16.2059L21.7033 5.48815V22.5C21.7033 23.8807 20.5821 25 19.1991 25H2.50423C1.12118 25 0 23.8807 0 22.5V2.5ZM10.0169 6.66667H5.00845V8.33333H10.0169V6.66667ZM16.6948 11.6667H5.00845V13.3333H16.6948V11.6667ZM8.85611 18.1797C8.18189 18.3605 7.65535 18.8745 7.46981 19.4302L5.88598 18.9032C6.25694 17.7922 7.23294 16.8893 8.42297 16.5702C9.60349 16.2535 10.9494 16.5187 12.1148 17.589C12.4649 17.4862 12.8117 17.4283 13.1547 17.41C14.054 17.3618 14.8622 17.5883 15.5551 17.8765C16.0639 18.0882 16.5573 18.3558 16.9721 18.5808C17.1045 18.6527 17.2292 18.7203 17.3436 18.7803C17.8834 19.0632 18.1804 19.1667 18.3643 19.1667V20.8333C17.7134 20.8333 17.0713 20.52 16.5676 20.256C16.4122 20.1745 16.2618 20.093 16.1134 20.0125C15.7172 19.7977 15.3352 19.5907 14.913 19.415C14.3537 19.1823 13.8054 19.0442 13.244 19.0743C13.1624 19.0787 13.079 19.0867 12.994 19.0988L12.996 19.121C13.0406 19.6623 12.8168 20.1075 12.5285 20.4272C11.9967 21.0172 11.1302 21.3267 10.4792 21.4448C10.1401 21.5063 9.77533 21.5322 9.45417 21.4853C9.29696 21.4623 9.09425 21.4142 8.90328 21.3007C8.70022 21.18 8.45956 20.9492 8.39787 20.5797C8.34049 20.236 8.47006 19.9527 8.58329 19.7785C8.70008 19.5988 8.85735 19.4435 9.01984 19.3093C9.33607 19.0478 9.79677 18.7652 10.4123 18.4543L10.4572 18.4218C9.87575 18.0827 9.31736 18.056 8.85611 18.1797Z" fill="#2A2B2A" />
                </svg>
                <p>Offers </p>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="25" viewBox="0 0 7 25" fill="none">
                  <path d="M0 22.1641L0 21.4801C0.0168611 21.4245 0.0443718 21.3747 0.0559083 21.3191C0.29995 19.8803 1.61955 18.744 3.16722 18.6482C4.89769 18.538 6.36194 19.4328 6.83849 20.891C6.89972 21.0825 6.94409 21.2837 6.99911 21.4793V22.1633C6.98225 22.2084 6.95474 22.2486 6.94942 22.2993C6.7107 23.6271 5.65733 24.6379 4.21526 24.9244C4.10433 24.9445 3.99341 24.9751 3.88248 25H3.12817C3.07847 24.9847 3.02789 24.9598 2.97819 24.9549C1.53613 24.7441 0.438388 23.813 0.105604 22.5206C0.0727691 22.3951 0.0337221 22.28 0 22.1641ZM7 2.83107V3.5151C6.98314 3.57062 6.95563 3.62052 6.9503 3.67604C6.70094 5.12457 5.37513 6.25604 3.8106 6.34697C2.08545 6.44756 0.626521 5.54223 0.155299 4.07841C0.0940671 3.89252 0.0496957 3.70099 0 3.5151L0 2.83107C0.0168611 2.786 0.0443718 2.74577 0.0559083 2.7007C0.322135 1.393 1.15986 0.537565 2.55756 0.130368C2.74036 0.0748407 2.93471 0.0450653 3.12284 0L3.87715 0C3.92685 0.01529 3.97743 0.0402369 4.02713 0.0450654C5.47452 0.26154 6.56782 1.18699 6.90061 2.4794C6.93433 2.60011 6.96628 2.71599 7 2.83107ZM6.99911 12.1556V12.8396C6.98225 12.8951 6.95474 12.945 6.9432 13.0005C6.69384 14.4442 5.31833 15.6063 3.76534 15.6666C2.018 15.7367 0.537779 14.7814 0.121577 13.308C0.0772059 13.1518 0.0381592 12.9965 0 12.8404L0 12.1564C0.0168611 12.1008 0.0443718 12.051 0.0559083 11.9954C0.29995 10.5517 1.68078 9.38969 3.23377 9.3245C4.98111 9.24886 6.46133 10.2097 6.87753 11.6832C6.92191 11.8441 6.96095 12.0003 6.99911 12.1564V12.1556Z" fill="#2A2B2A" />
                </svg>
              </button>
            </div>
            <div className={styles.body + " space-y-[0.6vw]"}>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.header}>
              <div className='flex items-center gap-[1vw]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="25" viewBox="0 0 36 25" fill="none">
                  <path d="M32.431 0H3.2832C1.47014 0 0 1.54727 0 3.45676V21.5433C0 23.4521 1.47014 25 3.2832 25H32.4311C34.2441 25 35.7143 23.4521 35.7143 21.5433V3.45676C35.7142 1.54727 34.2441 0 32.431 0ZM8.5975 5.99299C10.4087 5.99299 11.8778 7.5396 11.8778 9.44725C11.8778 11.3548 10.4087 12.9008 8.5975 12.9008C6.7857 12.9008 5.3173 11.3548 5.3173 9.44725C5.3173 7.5396 6.7857 5.99299 8.5975 5.99299ZM8.5975 19.3239C6.34409 19.3239 4.03633 18.5023 4.39627 16.2281C4.54289 15.3045 5.26875 14.01 5.81974 13.4298C5.89061 13.3552 6.21399 13.3358 6.30209 13.3931C6.97069 13.8269 7.7557 14.0808 8.5975 14.0808C9.4393 14.0808 10.2237 13.8269 10.8923 13.3931C10.9804 13.3358 11.3037 13.3552 11.3753 13.4298C11.9256 14.01 12.6515 15.3045 12.7981 16.2281C13.1582 18.5023 10.8504 19.3239 8.5975 19.3239ZM25.5597 18.1911H16.1965V16.2082H25.5596V18.1911H25.5597ZM31.1583 13.3129H16.1965V11.3299H31.1583V13.3129ZM31.1583 8.43456H16.1965V6.45163H31.1583V8.43456Z" fill="#2A2B2A" />
                </svg>
                <p>Job Listings </p>
              </div>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="25" viewBox="0 0 7 25" fill="none">
                  <path d="M0 22.1641L0 21.4801C0.0168611 21.4245 0.0443718 21.3747 0.0559083 21.3191C0.29995 19.8803 1.61955 18.744 3.16722 18.6482C4.89769 18.538 6.36194 19.4328 6.83849 20.891C6.89972 21.0825 6.94409 21.2837 6.99911 21.4793V22.1633C6.98225 22.2084 6.95474 22.2486 6.94942 22.2993C6.7107 23.6271 5.65733 24.6379 4.21526 24.9244C4.10433 24.9445 3.99341 24.9751 3.88248 25H3.12817C3.07847 24.9847 3.02789 24.9598 2.97819 24.9549C1.53613 24.7441 0.438388 23.813 0.105604 22.5206C0.0727691 22.3951 0.0337221 22.28 0 22.1641ZM7 2.83107V3.5151C6.98314 3.57062 6.95563 3.62052 6.9503 3.67604C6.70094 5.12457 5.37513 6.25604 3.8106 6.34697C2.08545 6.44756 0.626521 5.54223 0.155299 4.07841C0.0940671 3.89252 0.0496957 3.70099 0 3.5151L0 2.83107C0.0168611 2.786 0.0443718 2.74577 0.0559083 2.7007C0.322135 1.393 1.15986 0.537565 2.55756 0.130368C2.74036 0.0748407 2.93471 0.0450653 3.12284 0L3.87715 0C3.92685 0.01529 3.97743 0.0402369 4.02713 0.0450654C5.47452 0.26154 6.56782 1.18699 6.90061 2.4794C6.93433 2.60011 6.96628 2.71599 7 2.83107ZM6.99911 12.1556V12.8396C6.98225 12.8951 6.95474 12.945 6.9432 13.0005C6.69384 14.4442 5.31833 15.6063 3.76534 15.6666C2.018 15.7367 0.537779 14.7814 0.121577 13.308C0.0772059 13.1518 0.0381592 12.9965 0 12.8404L0 12.1564C0.0168611 12.1008 0.0443718 12.051 0.0559083 11.9954C0.29995 10.5517 1.68078 9.38969 3.23377 9.3245C4.98111 9.24886 6.46133 10.2097 6.87753 11.6832C6.92191 11.8441 6.96095 12.0003 6.99911 12.1564V12.1556Z" fill="#2A2B2A" />
                </svg>
              </button>
            </div>
            <div className={styles.body + " space-y-[0.6vw]"}>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
            </div>
          </div>

        </div>

        <CustomBtn btnColor='black' word='New Group' icon={addIcon}/>
      </div>

      <div className={"flex flex-col w-full pb-[1vw] " + styles.templates_wrapper}>
      <div className={styles.templates_header + ' flex items-center justify-between mb-[0.8vw]'}>
          <h6>Template Groups</h6>
          <SimplePagination />
        </div>

        <div className={styles.templates_slider + " grid lg:grid-cols-3 xl:grid-cols-4 gap-[1vw]"}>
        <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_header}>
                  <p>Video Editor</p>
                  <span>Beginner</span>
                </div>
                <div className={styles.item_body}>
                  <div className={styles.line}></div>
                  <CustomBtn btnColor='black' word='View Template' width='w-full' href='/hr/hiring/templates/view-template'/>
                </div>
              </div>

        </div> 

        <CustomBtn btnColor='black' word='New Template' icon={addIcon} href='/hr/hiring/templates/new-template'/>

      </div>
    </div>
  )
}

export default Page
