interface ILogoAndTitle{
    title:string,
    needTxt:boolean,
    textNeeded?:string
}
import styles from './logoAndTitle.module.css';
// design of logo and title of proccess
const LogoAndTitle = ({title,needTxt,textNeeded}:ILogoAndTitle)=>{
    return(
        <div className={styles.logoAndTitle} >
            <div className='flex justify-center '>
                {/* logo part */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 93" fill="none">
                        <path d="M55 92.16C51.98 92.16 49.23 91.52 46.77 90.24C44.31 88.96 42.37 87.09 40.95 84.62C39.54 82.16 38.83 79.15 38.83 75.6C38.83 74.81 38.86 73.97 38.93 73.09C39 72.2 39.09 71.33 39.23 70.48C33.84 70.94 28.78 70.45 24.05 69C19.32 67.55 15.15 65.25 11.53 62.1C7.91 58.95 5.09 55.12 3.05 50.62C1.01 46.12 0 41.04 0 35.39C0 30.53 0.84 25.96 2.51 21.69C4.19 17.42 6.57 13.66 9.66 10.4C12.75 7.15 16.46 4.6 20.8 2.76C25.14 0.92 29.97 0 35.29 0C40.61 0 45.54 0.9 49.88 2.71C54.22 4.52 57.93 7.03 61.02 10.25C64.11 13.47 66.47 17.2 68.12 21.44C69.76 25.68 70.58 30.2 70.58 34.99V74.91C70.58 78.53 69.94 81.61 68.66 84.18C67.38 86.74 65.56 88.71 63.19 90.09C60.82 91.47 58.1 92.16 55.01 92.16H55ZM35.29 64.36C36.47 64.36 37.52 64.31 38.44 64.21C39.36 64.11 40.38 63.96 41.5 63.77C42.42 61.27 43.75 58.71 45.49 56.08C47.23 53.45 49.56 50.87 52.49 48.34C55.41 45.81 59.08 43.39 63.48 41.09V34.98C63.48 30.91 62.77 27.13 61.36 23.64C59.95 20.16 57.98 17.12 55.45 14.52C52.92 11.93 49.94 9.92 46.53 8.51C43.11 7.1 39.37 6.39 35.29 6.39C31.21 6.39 27.55 7.11 24.1 8.56C20.65 10.01 17.66 12.03 15.13 14.62C12.6 17.22 10.63 20.29 9.22 23.84C7.81 27.39 7.1 31.23 7.1 35.37C7.1 39.51 7.81 43.35 9.22 46.9C10.63 50.45 12.6 53.52 15.13 56.12C17.66 58.72 20.65 60.74 24.1 62.18C27.55 63.63 31.28 64.35 35.29 64.35V64.36ZM54.51 85.55C57.01 85.55 59.13 84.7 60.87 82.99C62.61 81.28 63.48 78.69 63.48 75.2V48.59C59.86 50.63 56.89 52.75 54.56 54.95C52.23 57.15 50.42 59.4 49.14 61.7C47.86 64 46.95 66.28 46.43 68.55C45.9 70.82 45.64 72.94 45.64 74.91C45.64 77.21 46.05 79.16 46.87 80.78C47.69 82.39 48.79 83.59 50.17 84.38C51.55 85.17 52.99 85.56 54.51 85.56V85.55Z" fill="url(#paint0_linear_756_669)" />
                        <defs>
                            <linearGradient id="paint0_linear_756_669" x1="35" y1="40.5" x2="35" y2="103.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2B2B2B" />
                                <stop offset="10" stop-color="#F36F24" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </div>

                    <h1>{title}</h1>
                    {needTxt ? <p>{textNeeded}</p> : null}
        </div>

    )

}

export default LogoAndTitle