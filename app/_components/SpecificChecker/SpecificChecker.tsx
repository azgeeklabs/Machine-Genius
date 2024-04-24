interface ICheckerProps {
    word:string,
    pass:boolean
}

import styles from './SpecificChecker.module.css';

// component for type of check and result of check
const SpecificChecker = ({word,pass}:ICheckerProps)=>{
    return(
        <div className={`${styles.properityAndResult}`}>
            {/* type of check */}
            <p>{word}</p>
            {/* right icon with green or red background based on the recieved result */}
            <div className={pass ? styles.greenColor : styles.redColor} >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_623_11864)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.4485 8.75147C16.9171 9.2201 16.9171 9.97992 16.4485 10.4485L12.0292 14.8679C11.3503 15.5467 10.2497 15.5467 9.57082 14.8679L7.55147 12.8485C7.08284 12.3799 7.08284 11.6201 7.55147 11.1515C8.0201 10.6829 8.7799 10.6829 9.24853 11.1515L10.8 12.703L14.7515 8.75147C15.2201 8.28284 15.9799 8.28284 16.4485 8.75147Z" />
            </g>5FA85B
            <defs>
            <filter id="filter0_i_623_11864" x="0" y="0" width="24" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_623_11864"/>
            </filter>
            </defs>
            </svg>
            </div>
     

        </div>
    )
}

export default SpecificChecker