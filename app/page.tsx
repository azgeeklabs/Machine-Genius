"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import img from "../public/seoModule.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Aos from "aos";
import Footer from "./_components/Footer/Footer";
import styles from "../app/_components/Footer/footer.module.css";

let shuffleNum = 1;
const businessDataMock = [
  {
    title: "SEO MODULE",
  },
  {
    title: "SEO MODULE",
  },
  {
    title: "SEO MODULE",
  },
  {
    title: "SEO MODULE",
  },
];
const businessDataMock2 = [
  {
    title: "HR MODULE",
  },
  {
    title: "HR MODULE",
  },
  {
    title: "HR MODULE",
  },
  {
    title: "HR MODULE",
  },
];

const businessTitleMock = "SEO";
const businessTitleMock2 = "HR";

export default function Home() {
  const [selectedWheel, setSelectedWheel] = useState("hr");
  const [wheelColor, setWheelColor] = useState("#E1C655");
  const [selectedNum, setSelectedNum] = useState<number>(0);

  const [leftArrowHovered, setLeftArrowHovered] = useState(false);
  const [rightArrowHovered, setRightArrowHovered] = useState(false);
  const [trick, setTrick] = useState(false);
  const [counter, setCounter] = useState(0);
  const [subCounter, setSubCounter] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const [businessData, SetBusinessData] = useState(businessDataMock);
  const [businessTitle, SetBusinessTitle] = useState(businessTitleMock);
  const [disabledTab1, setDisabledTab1] = useState(false);
  const [disabledTab2, setDisabledTab2] = useState(false);

  // Register the ScrollTrigger plugin
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

  const infoCard = useRef(null);
  const infoCard2 = useRef(null);
  const cardsss = useRef(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const staffMoveRight = useRef(null);
  const staffMoveLeft = useRef(null);
  const counterWrapperRef = useRef(null);
  const seoSectionRef = useRef(null);
  const movedParagraphRef1 = useRef(null);
  const movedParagraphRef2 = useRef(null);
  const movedParagraphRef3 = useRef(null);
  const seoSectionRef2 = useRef(null);
  const movedParagraphRef12 = useRef(null);
  const movedParagraphRef22 = useRef(null);
  const movedParagraphRef32 = useRef(null);
  const staffRef = useRef(null);
  const logoRef = useRef(null);
  const paragraphRef = useRef(null);
  const hiddenParagraphRef = useRef(null);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      window.scrollTo(0, 0);
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null; // Clean up the event listener
    };
  }, []);

  // useGSAP(() => {
  //   if (!infoCard.current) return;

  //   const movingBesideCard1 = gsap.to(infoCard.current, {
  //     left: "-45%",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: cardsss.current,
  //       start: "top+=1500px 50%",
  //       end: "top+=1500px 20%",
  //     },
  //   });

  //   return () => {
  //     movingBesideCard1.kill();
  //     movingBesideCard1.scrollTrigger?.kill();
  //   };
  // }, []);

  useEffect(() => {
    setCounter(0);
    const increase = setInterval(() => {
      setCounter((prev) => {
        if (prev >= subCounter || hasRun) {
          setDisabledTab1(false);
          setDisabledTab2(false);
          clearInterval(increase);
          setCounter(subCounter);
          return prev;
        }
        setDisabledTab1(true);
        setDisabledTab2(true);
        setHasRun(true);
        return prev + 100;
      });
    }, 1);
  }, [subCounter]);

  useGSAP(() => {
    if (!sectionRef.current || !triggerRef.current || window.scrollY > 0)
      return;

    let sections = gsap.utils.toArray(".scroll-section");

    // gsap.fromTo(sections,{ xPercent: "-20%" }, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     pin: true,
    //     scrub: true,
    //     snap: 1 / (sections.length - 1),
    //     end: "2000 center",
    //     onLeave: () => {
    //       Aos.init();}

    //   }
    // });

    const pinning = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      // duration: 50,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 20%",
        end: "2000 center",
        scrub: true,
        pin: true,
        snap: 1 / (sections.length - 1),
        onLeave: () => {
          AOS.init();
          if (
            infoCard.current &&
            infoCard2.current &&
            movedParagraphRef1.current &&
            movedParagraphRef2.current &&
            movedParagraphRef3.current &&
            movedParagraphRef12.current &&
            movedParagraphRef22.current &&
            movedParagraphRef32.current
          ) {
            const movingBesideCard1 = gsap.to(infoCard.current, {
              left: "-45%",
              duration: 1,
              scrollTrigger: {
                trigger: cardsss.current,
                start: "top 45%",
                end: "top 20%",
                // markers: true,
              },
            });
            const movingBesideCard2 = gsap.to(infoCard2.current, {
              left: "150%",
              duration: 1,
              scrollTrigger: {
                trigger: cardsss.current,
                start: "top 45%",
                end: "top 20%",
                // markers: true,
              },
            });
            const scaleAndMoving1 = gsap.to(movedParagraphRef1.current, {
              translateX: "0",
              translateY: "0",
              opacity: "1",
              scrollTrigger: {
                trigger: seoSectionRef.current,
                start: "50% 70%",
                end: "50% 50%",
                scrub: 0.1,
                // markers: true,
              },
            });
            const scaleAndMoving2 = gsap.to(movedParagraphRef2.current, {
              translateX: "0",
              translateY: "0",
              opacity: "1",
              scrollTrigger: {
                trigger: seoSectionRef.current,
                start: "50% 70%",
                end: "50% 50%",
                scrub: 0.1,
                // markers: true,
              },
            });
            const scaleAndMoving3 = gsap.to(movedParagraphRef3.current, {
              translateX: "0",
              translateY: "0",
              opacity: "1",
              scrollTrigger: {
                trigger: seoSectionRef.current,
                start: "50% 70%",
                end: "50% 50%",
                scrub: 0.1,
                // markers: true,
              },
            });
            const scaleAndMoving12 = gsap.to(movedParagraphRef12.current, {
              translateX: "0",
              translateY: "0",
              opacity: "1",
              scrollTrigger: {
                trigger: seoSectionRef2.current,
                start: "50% 70%",
                end: "50% 50%",
                scrub: 0.1,
              },
            });
            const scaleAndMoving22 = gsap.to(movedParagraphRef22.current, {
              translateX: "0",
              translateY: "0",
              opacity: "1",
              scrollTrigger: {
                trigger: seoSectionRef2.current,
                start: "50% 70%",
                end: "50% 50%",
                scrub: 0.1,
              },
            });
            const scaleAndMoving32 = gsap.to(movedParagraphRef32.current, {
              translateX: "0",
              translateY: "0",
              opacity: "1",
              scrollTrigger: {
                trigger: seoSectionRef2.current,
                start: "50% 70%",
                end: "50% 50%",
                scrub: 0.1,
              },
            });

            return () => {
              movingBesideCard1.kill();
              movingBesideCard1.scrollTrigger?.kill();
              movingBesideCard2.kill();
              movingBesideCard2.scrollTrigger?.kill();
              scaleAndMoving1.kill();
              scaleAndMoving1.scrollTrigger?.kill();
              scaleAndMoving2.kill();
              scaleAndMoving2.scrollTrigger?.kill();
              scaleAndMoving3.kill();
              scaleAndMoving3.scrollTrigger?.kill();
              scaleAndMoving12.kill();
              scaleAndMoving12.scrollTrigger?.kill();
              scaleAndMoving22.kill();
              scaleAndMoving22.scrollTrigger?.kill();
              scaleAndMoving32.kill();
              scaleAndMoving32.scrollTrigger?.kill();
            };
          }
        },
      },
    });

    return () => {
      pinning.kill();
      pinning.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!staffMoveRight.current) return;

    const staffRight = gsap.to(staffMoveRight.current, {
      left: "145%",
      opacity: 1,
      scrollTrigger: {
        trigger: staffMoveRight.current,
        scrub: true,
        start: "10px center",
        end: "10px 40%",
      },
    });

    return () => {
      staffRight.kill();
      staffRight.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!staffMoveLeft.current) return;

    const staffLeft = gsap.to(staffMoveLeft.current, {
      left: "-45%",
      opacity: 1,
      scrollTrigger: {
        trigger: staffMoveRight.current,
        scrub: true,
        start: "10px center",
        end: "10px 40%",
      },
    });

    return () => {
      staffLeft.kill();
      staffLeft.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!counterWrapperRef.current) return;

    const increaseCounter = gsap.to(counterWrapperRef.current, {
      scrollTrigger: {
        trigger: counterWrapperRef.current,
        start: "1600 80%",
        // markers: true,
        onUpdate: () => {
          const increase = setInterval(() => {
            setCounter((prev) => {
              if (prev >= 36000) {
                clearInterval(increase);
                return prev;
              }
              return prev + 100;
            });
          }, 1);
        },
      },
    });

    return () => {
      increaseCounter.kill();
      increaseCounter.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!seoSectionRef.current) return;

    // const scaleAndMoving1 = gsap.to(movedParagraphRef1.current, {
    //   translateX: "0",
    //   translateY: "0",
    //   opacity: "1",
    //   scrollTrigger: {
    //     trigger: seoSectionRef.current,
    //     start: "top+=1400 75%",
    //     end: "top+=1400 15%",
    //     scrub: 0.1,
    //     markers:true
    //   },
    // });
    // const scaleAndMoving2 = gsap.to(movedParagraphRef2.current, {
    //   translateX: "0",
    //   translateY: "0",
    //   opacity: "1",
    //   scrollTrigger: {
    //     trigger: seoSectionRef.current,
    //     start: "top+=1400 75%",
    //     end: "top+=1400 15%",
    //     scrub: 0.1,
    //     markers:true

    //   },
    // });
    // const scaleAndMoving3 = gsap.to(movedParagraphRef3.current, {
    //   translateX: "0",
    //   translateY: "0",
    //   opacity: "1",
    //   scrollTrigger: {
    //     trigger: seoSectionRef.current,
    //     start: "top+=1400 75%",
    //     end: "top+=1400 15%",
    //     scrub: 0.1,
    //     markers:true

    //   },
    // });
    const seoSectionscaled = gsap.to(seoSectionRef.current, {
      scale: 1.3,
      scrollTrigger: {
        trigger: seoSectionRef.current,
        start: "top+=1400 90%",
        end: "top+=1400 10%",
        scrub: 0.1,
      },
    });

    return () => {
      seoSectionscaled.kill();
      // scaleAndMoving3.kill();
      // scaleAndMoving2.kill();
      // scaleAndMoving1.kill();
      seoSectionscaled.scrollTrigger?.kill();
      // scaleAndMoving3.scrollTrigger?.kill();
      // scaleAndMoving2.scrollTrigger?.kill();
      // scaleAndMoving1.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!seoSectionRef2.current) return;

    // const scaleAndMoving12 = gsap.to(movedParagraphRef12.current, {
    //   translateX: "0",
    //   translateY: "0",
    //   opacity: "1",
    //   scrollTrigger: {
    //     trigger: seoSectionRef2.current,
    //     start: "top+=1400 75%",
    //     end: "top+=1400 15%",
    //     scrub: 0.1,
    //   },
    // });
    // const scaleAndMoving22 = gsap.to(movedParagraphRef22.current, {
    //   translateX: "0",
    //   translateY: "0",
    //   opacity: "1",
    //   scrollTrigger: {
    //     trigger: seoSectionRef2.current,
    //     start: "top+=1400 75%",
    //     end: "top+=1400 15%",
    //     scrub: 0.1,
    //   },
    // });
    // const scaleAndMoving32 = gsap.to(movedParagraphRef32.current, {
    //   translateX: "0",
    //   translateY: "0",
    //   opacity: "1",
    //   scrollTrigger: {
    //     trigger: seoSectionRef2.current,
    //     start: "top+=1400 75%",
    //     end: "top+=1400 15%",
    //     scrub: 0.1,
    //   },
    // });
    const seoSectionscaled2 = gsap.to(seoSectionRef2.current, {
      scale: 1.3,
      scrollTrigger: {
        trigger: seoSectionRef2.current,
        start: "top+=1400 90%",
        end: "top+=1400 10%",
        scrub: 0.1,
        // markers:true
      },
    });

    return () => {
      seoSectionscaled2.kill();
      // scaleAndMoving32.kill();
      // scaleAndMoving22.kill();
      // scaleAndMoving12.kill();
      seoSectionscaled2.scrollTrigger?.kill();
      // scaleAndMoving32.scrollTrigger?.kill();
      // scaleAndMoving22.scrollTrigger?.kill();
      // scaleAndMoving12.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!staffRef.current || !logoRef.current || !paragraphRef.current) return;

    const logoMove = gsap.to(logoRef.current, {
      top: "3.5%",
      left: "12%",
      scale: "1",
      ease: "none",
      scrollTrigger: {
        trigger: staffRef.current,
        start: "top 99%",
        end: "top bottom",
        scrub: 0.1,
        pin: true,
      },
    });

    return () => {
      logoMove.kill();
      logoMove.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(() => {
    if (!paragraphRef.current) return;

    const paragraphMove = gsap.to(paragraphRef.current, {
      gap: "clamp(18vh, 20vh, 30vh)",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
    const hiddenParagraphMove = gsap.to(hiddenParagraphRef.current, {
      opacity: "1",
      ease: "none",
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 60%",
        end: "top 20%",
        scrub: true,
      },
    });

    return () => {
      paragraphMove.kill();
      hiddenParagraphMove.kill();
      paragraphMove.scrollTrigger?.kill();
      hiddenParagraphMove.scrollTrigger?.kill();
    };
  }, []);

  // useGSAP(() => {
  //   if (!infoCard2.current) {
  //     return;
  //   }
  //   const movingBesideCard2 = gsap.to(infoCard2.current, {
  //     left: "150%",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: infoCard2.current,
  //       start: "top+=1200px 50%",
  //       end: "top+=1200px 20%",
  //       markers: true,
  //     },
  //   });
  //   return () => {
  //     {
  //       /* A return function for killing the animation on component unmount */
  //     }
  //     movingBesideCard2.kill();
  //   };
  // }, []);

  useEffect(() => {
    if (selectedNum == 0) {
      setSelectedWheel("hr");
      setWheelColor("#E1C655");
    } else if (selectedNum == 1) {
      setSelectedWheel("video");
      setWheelColor("#E9313E");
    } else if (selectedNum == -1) {
      setSelectedWheel("seo");
      setWheelColor("#5EA95B");
    } else if (selectedNum == -2) {
      setSelectedWheel("social");
      setWheelColor("#E1C655");
    } else if (selectedNum == -3) {
      setSelectedWheel("content");
      setWheelColor("#E9313E");
    }
  }, [selectedNum]);
  return (
    <>
      <div className=" w-full relative overflow-x-hidden text-[#FFFFFB] bg-[linear-gradient(180deg,_#2A2B2A_35%,_#5ea95bbd_100%)]">
        <Link
          href={"/"}
          className=" fixed top-1/3 translate-y-1/4 left-1/4 -translate-x-2/3 scale-[3] cursor-pointer z-[99999999]"
          ref={logoRef}
        >
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
        <div className="px-[--98px] flex justify-between items-center left-0 right-0 fixed top-[4%] z-[50000]">
          <Link href={"/"} className=" invisible">
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
          <ul className=" rounded-[--58px] p-[--6px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 bg-[#272727] border border-gray-200 border-opacity-40 flex">
            <li>
              <Link
                className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#5EA95B] transition-colors duration-200 cursor-pointer block"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#5EA95B] transition-colors duration-200 cursor-pointer block"
                href={"/modules"}
              >
                Modules
              </Link>
            </li>
            <li>
              <Link
                className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#5EA95B] transition-colors duration-200 cursor-pointer block"
                href={"/about-us"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#5EA95B] transition-colors duration-200 cursor-pointer block"
                href={"/contact-us"}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--31px] hover:bg-[#5EA95B] transition-colors duration-200 cursor-pointer block"
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className=" rounded-[--58px] p-[--6px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border bg-[#272727] border-gray-200 border-opacity-40 flex">
            <Link
              href={"signin"}
              className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] bg-[#2A2B2A] hover:bg-[#5EA95B] rounded-[--30px] border-[1px] border-[#fffffb]"
            >
              Log In
            </Link>
            <Link
              href={"#"}
              className=" px-[--33px] py-[--sy-16px] font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--30px] hover:text-[#5EA95B]"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className=" absolute  -right-1/4 -top-[clamp(45vh,_70.93vh,_100vh)]">
          <svg
            className=" w-[clamp(30vw,_calc(78.333vw_+_0.1rem),_140vw)] h-[clamp(30vw,_calc(78.333vw_+_0.1rem),_140vw)] animate-rotateRight"
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
            className=" w-[82%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotateLeftTransform"
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
            className=" w-[65%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotateRightTransform"
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
          <span className="text-[--58px] font-bold absolute left-1/2 -translate-x-[55%] top-1/2 translate-y-full">
            Lorem Epsum
          </span>
        </div>
        <div className=" h-[100vh] w-full flex items-center">
          <p className=" text-[--32px] font-bold w-fit text-[#FFFFFB] ml-[--187px] mt-[--sy-64px]">
            The Last Software You Will Ever Buy..
          </p>
        </div>
        <div>
          <div
            className="relative w-fit mx-auto text-white mb-[--sy-243px] pt-[--sy-136px] "
            ref={staffRef}
          >
            <div
              className=" flex flex-col place-items-center gap-y-0 relative"
              ref={paragraphRef}
            >
              <p className=" uppercase text-center text-[--128px] font-bold">
                From Staff
              </p>
              <p className=" uppercase text-center text-[--128px] font-bold text-nowrap">
                To Software
              </p>
              <p
                ref={hiddenParagraphRef}
                className="opacity-0 text-[--23px] bg-[radial-gradient(closest-side,_rgba(94,_169,_91,_.4)_0%,_rgba(94,_169,_91,_0)_100%)] p-[3rem] w-full text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
              >
                By shifting from traditional staffing to advanced software
                solutions, <br /> businesses can reduce costs, enhance
                efficiency, and focus resources <br /> on growth and innovation.
              </p>
              <div
                className=" font-bold text-[--60px] uppercase text-center w-fit absolute top-1/2 left-[89%] -translate-y-1/2 -translate-x-1/2 opacity-0"
                ref={staffMoveRight}
              >
                <p className="text-[--60px] text-nowrap">Start your</p>
                <p className="text-[--60px] text-nowrap">new business</p>
              </div>
              <div
                className=" font-bold  uppercase text-center w-fit absolute top-1/2 left-[11%] -translate-y-1/2 -translate-x-1/2 opacity-0 "
                ref={staffMoveLeft}
              >
                <p className="text-[--60px] text-nowrap">Start your</p>
                <p className="text-[--60px] text-nowrap">new business</p>
              </div>
            </div>
          </div>
          <div className=" h-[--sy-227px] w-[1px] bg-white mx-auto mb-[--sy-50px] mt-[--sy-170px]"></div>
          <span className=" text-[--24px] block w-full mx-auto text-center mb-[--sy-50px]">
            Imagine this
          </span>
          <p className=" font-semibold text-[--36px] text-center mb-[--sy-50px]">
            You run a Marketing Agency and have done well for <br /> yourself.
            You have 10 clients that pay a recurring <br /> monthly income of
            $40,000.
          </p>
          <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-10px]"></div>
          <div>
            <div className="scroll-section-outer !duration-0 mx-[clamp(18vw,_calc(18.222vw_+_0.1rem),_3000px)] overflow-hidden">
              <div ref={triggerRef} className="!duration-0 overflow-hidden">
                <div
                  ref={sectionRef}
                  className="scroll-section-inner !duration-0 "
                >
                  <div className="scroll-section !h-[--sy-380px] !duration-0 flex-col items-start">
                    <h3 className=" text-[--90px] font-bold text-center uppercase px-[clamp(4vw,_calc(5vw_+_0.1rem),_2000px)]">
                      How many employees <br /> do you need?
                    </h3>
                    <p className=" text-[--24px] w-fit px-[clamp(25vw,_calc(26vw_+_0.1rem),_2000px)]">
                      Keep Scrolling
                    </p>
                  </div>
                  <div className="scroll-section !h-[--sy-380px] !duration-0 ">
                    <span className=" text-[--39px] font-bold px-[--45px] py-[--sy-24px] bg-[#5EA95B] rounded-[--7px] mb-[--sy-50px] w-fit">
                      SEO Specialists
                    </span>
                    <p className=" text-[--39px] font-bold mb-[--sy-40px]">
                      You will need at least 3 SEO specialists:
                    </p>
                    <p className=" text-[--29px]  mb-[--sy-40px]">
                      2 for link building and outreach, and another for keyword
                      research,
                      <br /> SEO planning, and all the other stuff.
                    </p>
                  </div>
                  <div className="scroll-section !h-[--sy-380px] !duration-0">
                    <span className=" text-[--39px] font-bold px-[--45px] py-[--sy-24px] bg-[#5EA95B] rounded-[--7px] mb-[--sy-50px] w-fit">
                      Social Media Specialists
                    </span>
                    <p className=" text-[--39px] font-bold mb-[--sy-40px]">
                      You will need at least 3 social media specialists
                    </p>
                    <p className=" text-[--29px]  mb-[--sy-40px]">
                      To create a content calendar, write posts, schedule them,
                      and <br /> come up with creative ideas to grow the
                      accounts.
                    </p>
                  </div>
                  <div className="scroll-section !h-[--sy-380px] !duration-0">
                    <span className=" text-[--39px] font-bold px-[--45px] py-[--sy-24px] bg-[#5EA95B] rounded-[--7px] mb-[--sy-50px] w-fit">
                      Graphic Designer
                    </span>
                    <p className=" text-[--39px] font-bold mb-[--sy-40px]">
                      You will need at least 1 graphic designer
                    </p>
                    <p className=" text-[--29px]  mb-[--sy-40px]">
                      To create images for your posts and articles for SEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-44px]"></div>
          </div>
          <div>
            <h2
              className=" text-center text-[--102px] w-fit mx-auto font-bold uppercase mb-[--sy-100px]"
              data-aos="zoom-in"
            >
              There’s more
            </h2>
            <div
              className=" flex  font-extrabold mx-auto justify-between gap-[--18px] w-[clamp(50vw,_62.5vw,_80vw)] mb-[--18px]"
              data-aos="zoom-in"
            >
              <div
                onMouseOver={() => setTrick(true)}
                onMouseLeave={() => setTrick(false)}
                className={`" flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] ${
                  trick ? "flex-grow-[2]" : "w-[calc(33.333%_-_var(--18px))]"
                }`}
              >
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
                <div className="text-[--36px] h-[clamp(20vh,_28vh,_35vh)] flex justify-center items-center bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
                  SEO
                  <br />
                  SPECIALIST
                </div>
              </div>
              <div
                onMouseOver={() => setTrick(true)}
                onMouseLeave={() => setTrick(false)}
                className={` flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] ${
                  trick ? "flex-grow-[2]" : "w-[calc(33.333%_-_var(--18px))]"
                }`}
              >
                <div className="text-[--36px] h-[clamp(20vh,_28vh,_35vh)] flex justify-center items-center bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
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
              <div
                onMouseOver={() => setTrick(true)}
                onMouseLeave={() => setTrick(false)}
                className={` flex items-center hover:gap-[--18px] group overflow-x-hidden hover:flex-grow-[3] flex-grow-[2] ${
                  trick ? "flex-grow-[2]" : "w-[calc(33.333%_-_var(--18px))]"
                }`}
              >
                <div className="text-[--36px] h-[clamp(20vh,_28vh,_35vh)] flex justify-center items-center bg-[#FFFFFB38] rounded-[--18px] text-center group-hover:bg-[#5EA95B] flex-grow-[2]">
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
            <div
              className=" flex  font-extrabold mx-auto justify-between gap-[--18px] w-[clamp(50vw,_62.5vw,_80vw)] mb-[--sy-64px]"
              data-aos="zoom-in"
            >
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
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-64px]"></div>
            <div
              className=" relative rounded-[--58px] p-[--6px] bg-[#3D3E3D] bg-opacity-60 flex mx-auto w-fit mb-[--sy-95px]"
              data-aos="zoom-in"
            >
              <button
                disabled={disabledTab1}
                onClick={() => {
                  setActiveTab(0);
                  setSubCounter(36000);
                }}
                className={`relative z-50 px-[--33px] py-[--sy-16px] w-1/2 font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--30px]`}
              >
                Staff
              </button>
              <button
                disabled={disabledTab2}
                onClick={() => {
                  setActiveTab(1);
                  setSubCounter(50000);
                  // document.querySelector(".movedTab")?.style.left =
                }}
                className={`relative z-50 px-[--33px] py-[--sy-16px] w-1/2 font-semibold text-[--16px] leading-[19.36px] text-[#FFFFFB] rounded-[--30px]`}
              >
                Teams
              </button>
              <span
                className={` absolute h-[92%] top-1/2 -translate-y-1/2 !w-1/2 ${
                  activeTab == 0 ? "left-0" : "left-1/2"
                } z-30 bg-[#5EA95B] rounded-[--30px] movedTab`}
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.88,-0.35,0.565,1.35)",
                }}
              ></span>
            </div>
            <p
              className=" text-[--128px] w-fit text-center mx-auto"
              data-aos="zoom-in"
            >
              That’s a total of
            </p>
            <span
              className=" font-bold text-[--175px] mb-[--sy-30px] block w-fit text-center mx-auto"
              data-aos="zoom-in"
              ref={counterWrapperRef}
            >
              ${counter}
            </span>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-64px]"></div>
            <span className=" text-[--24px] mb-[--sy-38px] block w-fit text-center mx-auto">
              That’s not all
            </span>
            <p
              className=" text-[--51px] font-bold mb-[--sy-64px] w-fit mx-auto"
              data-aos="zoom-in"
            >
              Pick your Struggle
            </p>
            <div
              className=" relative mx-auto w-[clamp(150px,_calc(38.278vw_+_0.1rem),_4000px)] mb-[--sy-227px] z-[80]"
              ref={cardsss}
            >
              <div className="py-[--sy-29px]  px-[--50px] shadow-[0px_-16.72px_29.48px_0px_#00000047] z-[80] bg-[#666664] group relative hover:z-[81] hover:bg-[#5EA95B] h-[clamp(40vh,_calc(52.37vh_+_0.1rem),_70vh)] hover:-translate-y-[--sy-40px] rounded-[--27px]">
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
              <div className="absolute top-[clamp(10vh,_calc(14vh_+_0.1rem),_40vh)] z-[80] py-[--sy-29px] px-[--50px] inset-0 bg-[#92AF8E] group hover:bg-[#5EA95B] shadow-[0px_-16.72px_29.48px_0px_#00000047] h-[clamp(40vh,_calc(52.37vh_+_0.1rem),_70vh)] hover:-translate-y-[--sy-40px] rounded-[--27px]">
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
              <span
                className=" top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2  z-[5] absolute text-[--220px] font-bold text-nowrap text-[#7e7e7e]"
                ref={infoCard}
              >
                $1800
              </span>
              <span
                className=" top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] absolute text-[--220px] font-bold text-nowrap text-[#7e7e7e]"
                ref={infoCard2}
              >
                $1800
              </span>
            </div>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <div className="mb-[--sy-60px]">
              <p
                className=" uppercase w-fit mx-auto text-[--24px]"
                data-aos="fade-up"
              >
                About Your Business
              </p>
              <h2
                className=" text-[--102px] uppercase w-fit mx-auto font-bold"
                data-aos="zoom-in"
              >
                {" "}
                no one cares
              </h2>
              <p
                className=" uppercase w-fit mx-auto text-[--24px]"
                data-aos="fade-down"
              >
                As Much As you Do
              </p>
            </div>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <p
              className="mb-[--sy-64px] text-[--36px] font-bold w-fit mx-auto text-center"
              data-aos="zoom-in"
            >
              You can replace all this with just yourself and <br /> genius, get
              higher quality work in less time than <br /> it would take the 12
              employees combined
            </p>
            <div className=" h-[--sy-136px] w-[1px] bg-white mx-auto mb-[--sy-136px] "></div>
            <div
              className=" w-full mb-[--sy-271px] relative"
              ref={seoSectionRef}
            >
              <h3 className="uppercase text-[--34px] mx-auto w-fit mb-[--sy-20px] font-bold">
                SEO module
              </h3>
              <p className=" text-[--17px] mx-auto w-fit mb-[--sy-40px]">
                Lorem ipsum dolor sit amet consectetur. Habitant quis turpis.
              </p>
              <Image
                src={img}
                alt="SEO Module"
                className="w-[clamp(30vw,_36.25vw,_40vw)] mx-auto mb-[--sy-40px]"
              />
              <div className=" flex w-fit mx-auto">
                <div
                  className=" flex flex-col gap-y--[--sy-30px] w-[--187px] -translate-y-[50px] opacity-0"
                  ref={movedParagraphRef1}
                >
                  <span className=" font-medium text-[--24px]">How ?</span>
                  <p className=" text-[--14px]">
                    Lorem ipsum dolor sit, amet. Odio dolor officiis blanditiis
                    eveniet perspiciatis dolorum amet odit saepe, placeat
                    voluptatem, impedit tempora
                  </p>
                </div>
                <div
                  className=" flex flex-col gap-y--[--sy-30px] w-[--187px] mx-[--29px] -translate-x-[200px] -translate-y-[50px] opacity-0"
                  ref={movedParagraphRef2}
                >
                  <span className=" font-medium text-[--24px]">How ?</span>
                  <p className=" text-[--14px]">
                    Lorem ipsum dolor sit, amet. Odio dolor officiis blanditiis
                    eveniet perspiciatis dolorum amet odit saepe, placeat
                    voluptatem, impedit tempora
                  </p>
                </div>
                <div
                  className=" flex flex-col gap-y--[--sy-30px] w-[--187px] -translate-x-[300px] -translate-y-[50px] opacity-0"
                  ref={movedParagraphRef3}
                >
                  <span className=" font-medium text-[--24px]">How ?</span>
                  <p className=" text-[--14px]">
                    Lorem ipsum dolor sit, amet. Odio dolor officiis blanditiis
                    eveniet perspiciatis dolorum amet odit saepe, placeat
                    voluptatem, impedit tempora
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" w-full mb-[--sy-196px] relative"
              ref={seoSectionRef2}
            >
              <h3 className="uppercase text-[--34px] mx-auto w-fit mb-[--sy-20px] font-bold">
                SEO module
              </h3>
              <p className=" text-[--17px] mx-auto w-fit mb-[--sy-40px]">
                Lorem ipsum dolor sit amet consectetur. Habitant quis turpis.
              </p>
              <Image
                src={img}
                alt="SEO Module"
                className="w-[clamp(30vw,_36.25vw,_40vw)] mx-auto mb-[--sy-40px]"
              />
              <div className=" flex w-fit mx-auto">
                <div
                  className=" flex flex-col gap-y--[--sy-30px] w-[--187px] -translate-y-[50px] opacity-0"
                  ref={movedParagraphRef12}
                >
                  <span className=" font-medium text-[--24px]">How ?</span>
                  <p className=" text-[--14px]">
                    Lorem ipsum dolor sit, amet. Odio dolor officiis blanditiis
                    eveniet perspiciatis dolorum amet odit saepe, placeat
                    voluptatem, impedit tempora
                  </p>
                </div>
                <div
                  className=" flex flex-col gap-y--[--sy-30px] w-[--187px] mx-[--29px] -translate-x-[200px] -translate-y-[50px] opacity-0"
                  ref={movedParagraphRef22}
                >
                  <span className=" font-medium text-[--24px]">How ?</span>
                  <p className=" text-[--14px]">
                    Lorem ipsum dolor sit, amet. Odio dolor officiis blanditiis
                    eveniet perspiciatis dolorum amet odit saepe, placeat
                    voluptatem, impedit tempora
                  </p>
                </div>
                <div
                  className=" flex flex-col gap-y--[--sy-30px] w-[--187px] -translate-x-[300px] -translate-y-[50px] opacity-0"
                  ref={movedParagraphRef32}
                >
                  <span className=" font-medium text-[--24px]">How ?</span>
                  <p className=" text-[--14px]">
                    Lorem ipsum dolor sit, amet. Odio dolor officiis blanditiis
                    eveniet perspiciatis dolorum amet odit saepe, placeat
                    voluptatem, impedit tempora
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-60px]"></div>
            <p
              className="mb-[--sy-60px] text-[--36px] font-extrabold w-fit mx-auto text-center"
              data-aos="zoom-in"
            >
              Genius doesn't just work for a <br /> marketing agency; it works
              for any <br /> business in the world.
            </p>
            <div className=" h-[--sy-118px] w-[1px] bg-white mx-auto mb-[--sy-64px]"></div>
            <div className="py-[--sy-50px] px-[--55px] rounded-[--28px] bg-[#2A2B2A61] max-w-[clamp(50vw,_58.39vw,_65vw)] mx-auto mb-[--sy-196px]">
              <div className=" flex justify-between items-center mb-[--sy-64px]">
                <p className=" text-[--32px] font-extrabold uppercase">
                  Master every department of your <br /> business with Machine
                  genius bundles!
                </p>
                <button
                  onClick={() => {
                    if (shuffleNum % 2 !== 0) {
                      SetBusinessData(businessDataMock2);
                      SetBusinessTitle(businessTitleMock2);
                    } else {
                      SetBusinessData(businessDataMock);
                      SetBusinessTitle(businessTitleMock);
                    }

                    ++shuffleNum;
                  }}
                  className=" rounded-[--9px] bg-[#2a2b2a] text-[--22px] py-[--sy-22px] px-[--31px] font-bold rotate-[0.57deg]"
                >
                  Shuffle Business
                </button>
              </div>
              <div className=" flex justify-between items-center w-full">
                <div className="flex gap-[--32px] w-full flex-wrap">
                  {businessData?.map((e, i) => {
                    return (
                      <div className="rounded-[--32px] bg-[#FFFFFB] text-[#2a2b2a] py-[--sy-48px] px-[--48px] hover:bg-[#5EA95B] w-[calc(50%_-_var(--32px))]">
                        <h4 className="text-[--32px] font-bold mb-[--sy-35px] text-center">
                          {e.title}
                        </h4>
                        <button className=" rounded-[--9px] bg-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !text-white mx-auto w-fit block rotate-[0.57deg]">
                          Check Module
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className=" px-[--60px] rounded-[--23px] bg-[#2a2b2a] flex flex-col justify-evenly self-stretch">
                  <div>
                    <h3 className=" font-extrabold text-[--46px] mb-[--sy-35px] text-center mx-auto w-fit">
                      {businessTitle}
                    </h3>
                    <p className=" font-medium text-[--15px] text-center w-fit mx-auto">
                      Lorem ipsum dolor sit amet consectetur. Nec <br /> id sit
                      velit quis purus. Cras cursus aliquet <br /> quam morbi
                      tristique.
                    </p>
                  </div>
                  <button className=" rounded-[--9px] !text-[#2a2b2a] text-[--15] font-bold px-[--19px] py-[--sy-15px] !bg-white mx-auto w-fit block rotate-[0.57deg]">
                    Check Module
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className=" w-fit mx-auto ">
                <h2
                  className=" uppercase text-[--60px] font-extrabold mx-auto w-fit text-center mb-[--sy-28px]"
                  data-aos="zoom-in"
                >
                  Meet Your New <br /> Business Powerhouse
                </h2>
                <div className="relative mb-[--sy-40px]">
                  <span className="uppercase text-[--35px] font-extrabold block w-fit mx-auto">
                    {selectedWheel}
                  </span>
                  <svg
                    onMouseOver={() => setLeftArrowHovered(true)}
                    onMouseLeave={() => setLeftArrowHovered(false)}
                    onClick={() => {
                      setSelectedNum((prev) => {
                        if (prev > -3) {
                          return prev - 1;
                        } else {
                          return prev;
                        }
                      });
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
                    onMouseOver={() => setRightArrowHovered(true)}
                    onMouseLeave={() => setRightArrowHovered(false)}
                    onClick={() =>
                      setSelectedNum((prev) => {
                        if (prev < 1) {
                          return prev + 1;
                        } else {
                          return prev;
                        }
                      })
                    }
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
                <p className=" text-[--20px] font-medium mx-auto w-fit text-center mb-[--sy-64px]">
                  Lorem ipsum dolor sit amet consectetur. Nec id sit velit quis
                  purus. <br /> Cras cursus aliquet quam morbi tristique odio
                  platea non netus. Turpis <br /> nisi et at tempus duis in
                  sociis.
                </p>
              </div>
              <div className=" w-full  overflow-hidden pt-40 h-[clamp(44vh,_65vh,_70vh)] relative">
                <div
                  className={`${
                    selectedNum == 0 ? "opacity-100" : "opacity-0"
                  } absolute inset-0 z-10 duration-1000 transition-all`}
                  style={{
                    backgroundImage: `linear-gradient(0deg, #E1C655 0%, rgba(42, 43, 42, 0) 90%)`,
                  }}
                ></div>
                <div
                  className={`${
                    selectedNum == 1 ? "opacity-100" : "opacity-0"
                  } absolute inset-0 z-10 duration-1000 transition-all`}
                  style={{
                    backgroundImage: `linear-gradient(0deg, #E9313E 0%, rgba(42, 43, 42, 0) 90%)`,
                  }}
                ></div>
                <div
                  className={`${
                    selectedNum == -1 ? "opacity-100" : "opacity-0"
                  } absolute inset-0 z-10 duration-1000 transition-all`}
                  style={{
                    backgroundImage: `linear-gradient(0deg, #5EA95B 0%, rgba(42, 43, 42, 0) 90%)`,
                  }}
                ></div>
                <div
                  className={`${
                    selectedNum == -2 ? "opacity-100" : "opacity-0"
                  } absolute inset-0 z-10 duration-1000 transition-all`}
                  style={{
                    backgroundImage: `linear-gradient(0deg, #E1C655 0%, rgba(42, 43, 42, 0) 90%)`,
                  }}
                ></div>
                <div
                  className={`${
                    selectedNum == -3 ? "opacity-100" : "opacity-0"
                  } absolute inset-0 z-10 duration-1000 transition-all`}
                  style={{
                    backgroundImage: `linear-gradient(0deg, #E9313E 0%, rgba(42, 43, 42, 0) 90%)`,
                  }}
                ></div>
                <div className=" w-full relative z-20">
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
                    className=" absolute w-[clamp(90vw,_116.625vw,_5000px)] h-[clamp(90vw,_116.625vw,_5000px)] rounded-full border-[2px] border-[#FFFFFB] -top-[--sy-35px] left-1/2"
                    style={{
                      transform: `translateX(-50%) ${
                        selectedWheel == "hr"
                          ? "rotate(0)"
                          : selectedWheel == "video"
                          ? "rotate(-30deg)"
                          : selectedWheel == "seo"
                          ? "rotate(31deg)"
                          : selectedWheel == "social"
                          ? "rotate(55deg)"
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
                    <div className=" flex flex-col gap-y-[--sy-12px] absolute place-items-center top-[19.6%] right-[85.1%] z-[20] uppercase -rotate-[55deg]">
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
            <div
              className={`${styles.footer} border-[1px] w-full pt-[--sy-100px] pb-[--sy-64px] px-[--187px] bg-[#2A2B2A]`}
            >
              <div className=" flex justify-between items-center mb-[--sy-100px]">
                <div>
                  <svg
                    className=" mb-[--sy-26px]"
                    width="414"
                    height="190"
                    viewBox="0 0 414 190"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.58984 75.8086V44.8982C3.58984 40.8144 4.58259 37.069 6.56808 33.6847C8.55356 30.2777 11.419 27.5703 15.1643 25.5848C18.9097 23.5767 23.4222 22.584 28.7243 22.584C31.2739 22.584 33.6203 22.8773 35.7863 23.4414C37.9523 24.028 39.9604 24.8628 41.8105 25.9458C43.6606 27.0288 45.2851 28.3374 46.6614 29.8265H46.7742C48.2182 28.3374 49.8652 27.0288 51.7154 25.9458C53.5655 24.8628 55.5961 24.028 57.8072 23.4414C59.9957 22.8547 62.3648 22.584 64.9143 22.584C70.1939 22.584 74.729 23.5767 78.4743 25.5848C82.2197 27.5928 85.0851 30.3003 87.0706 33.6847C89.0561 37.069 90.0488 40.8369 90.0488 44.8982V75.8086H75.9248V44.8982C75.9248 43.0029 75.4284 41.2656 74.4357 39.6863C73.4429 38.1069 72.1117 36.866 70.4647 35.9183C68.8176 34.9707 66.9675 34.4969 64.8918 34.4969C62.816 34.4969 61.0562 34.9707 59.3866 35.9183C57.6944 36.866 56.3632 38.1295 55.3705 39.6863C54.3777 41.2431 53.8813 42.9804 53.8813 44.8982V75.8086H39.7573V44.8982C39.7573 43.0029 39.2609 41.2656 38.2682 39.6863C37.2754 38.1295 35.9443 36.866 34.2972 35.9183C32.6502 34.9707 30.8 34.4969 28.7243 34.4969C26.6486 34.4969 24.8887 34.9707 23.2191 35.9183C21.5269 36.866 20.1957 38.1295 19.203 39.6863C18.2103 41.2431 17.7139 42.9804 17.7139 44.8982V75.8086H3.58984Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M123.417 77.028C118.611 77.028 114.414 75.8097 110.849 73.3504C107.284 70.9136 104.509 67.6195 102.546 63.5132C100.583 59.4068 99.6133 54.8492 99.6133 49.8855C99.6133 44.9218 100.719 40.1611 102.953 36.0097C105.186 31.8582 108.39 28.5867 112.587 26.1725C116.783 23.7583 121.792 22.5625 127.636 22.5625C133.479 22.5625 138.533 23.7809 142.572 26.2402C146.633 28.6769 149.724 31.9936 151.845 36.145C153.966 40.2965 155.049 44.8767 155.049 49.9081V75.8322H140.925V67.1683H140.722C139.684 68.9958 138.398 70.6655 136.864 72.1771C135.307 73.6662 133.434 74.8621 131.246 75.742C129.057 76.6219 126.44 77.0732 123.417 77.0732V77.028ZM127.433 65.0926C130.185 65.0926 132.554 64.4157 134.54 63.0619C136.525 61.7082 138.06 59.8581 139.12 57.5116C140.18 55.1651 140.722 52.5704 140.722 49.705C140.722 46.8396 140.18 44.2901 139.12 42.0113C138.06 39.7325 136.525 37.9049 134.54 36.5512C132.554 35.1974 130.185 34.5206 127.433 34.5206C124.68 34.5206 122.198 35.1974 120.168 36.5512C118.137 37.9049 116.603 39.7325 115.52 42.0113C114.459 44.2901 113.918 46.8622 113.918 49.705C113.918 52.5479 114.459 55.1651 115.52 57.5116C116.58 59.8581 118.137 61.7082 120.168 63.0619C122.198 64.4157 124.612 65.0926 127.433 65.0926Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M192.979 75.8112C187.541 75.8112 182.713 74.6606 178.449 72.3366C174.184 70.0353 170.823 66.9217 168.341 62.9958C165.859 59.0925 164.641 54.6703 164.641 49.7743C164.641 44.8782 165.882 40.4786 168.341 36.5527C170.823 32.6494 174.184 29.5358 178.449 27.2119C182.713 24.888 187.541 23.7373 192.979 23.7373H199.567V35.6728H192.979C190.091 35.6728 187.609 36.282 185.511 37.5003C183.413 38.7187 181.811 40.4109 180.66 42.5543C179.532 44.6977 178.968 47.0893 178.968 49.7517C178.968 52.4141 179.532 54.8057 180.66 56.9491C181.788 59.0925 183.413 60.7847 185.511 62.0031C187.609 63.2214 190.091 63.8306 192.979 63.8306H199.567V75.7661H192.979V75.8112Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M208.633 75.8104V1.33203H222.757V27.4592C224.945 25.6994 227.314 24.4359 229.864 23.6913C232.414 22.9468 234.918 22.5632 237.377 22.5632C242.454 22.5632 246.673 23.6236 249.99 25.7219C253.329 27.8202 255.811 30.6631 257.458 34.1828C259.105 37.7251 259.94 41.6284 259.94 45.9153V75.8104H245.816V45.9153C245.816 43.817 245.297 41.8766 244.281 40.1619C243.243 38.4246 241.867 37.0483 240.107 36.0329C238.347 35.0176 236.407 34.4987 234.286 34.4987C232.165 34.4987 230.315 34.9951 228.578 35.9878C226.818 36.9806 225.419 38.3117 224.359 39.9588C223.298 41.6284 222.757 43.4785 222.757 45.5091V75.8104H208.633Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M279.731 17.5535C277.317 17.5535 275.241 16.6961 273.504 14.9588C271.767 13.2215 270.887 11.1684 270.887 8.77676C270.887 6.38515 271.767 4.33197 273.504 2.59467C275.264 0.85737 277.34 0 279.731 0C282.123 0 284.221 0.85737 285.958 2.59467C287.718 4.33197 288.576 6.38515 288.576 8.77676C288.576 11.1684 287.696 13.2215 285.958 14.9588C284.221 16.6961 282.123 17.5535 279.731 17.5535ZM272.624 75.8095V23.7807H286.838V75.8095H272.624Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M299.426 75.8097V45.9145C299.426 41.6277 300.441 37.7244 302.472 34.1821C304.502 30.6398 307.435 27.8195 311.294 25.7212C315.152 23.6229 319.754 22.5625 325.102 22.5625C330.449 22.5625 335.142 23.6229 338.955 25.7212C342.768 27.8195 345.679 30.6624 347.709 34.1821C349.74 37.7244 350.755 41.6277 350.755 45.9145V75.8097H336.631V45.9145C336.631 43.8162 336.112 41.8759 335.097 40.1611C334.059 38.4238 332.683 37.0475 330.923 36.0322C329.163 35.0169 327.223 34.498 325.102 34.498C322.981 34.498 321.041 35.0169 319.281 36.0322C317.521 37.0475 316.144 38.4238 315.107 40.1611C314.069 41.8984 313.572 43.8162 313.572 45.9145V75.8097H299.448H299.426Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M389.9 75.8068C383.921 75.8068 378.709 74.6787 374.286 72.3999C369.864 70.1211 366.412 67.0075 363.975 63.0591C361.539 59.1107 360.32 54.6885 360.32 49.7924C360.32 44.2872 361.448 39.4814 363.727 35.3977C366.006 31.3139 369.097 28.1551 373 25.8989C376.926 23.6427 381.348 22.5371 386.29 22.5371C392.201 22.5371 396.984 23.7555 400.662 26.2148C404.339 28.6515 407.024 31.9456 408.739 36.052C410.454 40.1583 411.311 44.7385 411.311 49.7699C411.311 50.4467 411.266 51.259 411.198 52.1615C411.131 53.0865 411.018 53.786 410.883 54.2598H375.324C375.866 56.3581 376.813 58.1405 378.167 59.5619C379.498 60.9834 381.19 62.0664 383.221 62.7658C385.252 63.4878 387.53 63.8262 390.08 63.8262H404.723V75.7617H389.877L389.9 75.8068ZM375.257 44.8964H397.21C397.074 43.6104 396.826 42.392 396.488 41.2639C396.149 40.1358 395.653 39.143 395.044 38.2631C394.435 37.3831 393.713 36.6386 392.878 36.0294C392.043 35.4202 391.095 34.9464 389.99 34.608C388.884 34.2695 387.688 34.089 386.38 34.089C384.665 34.089 383.131 34.4049 381.8 35.0141C380.468 35.6233 379.34 36.4355 378.46 37.4508C377.558 38.4661 376.858 39.6168 376.34 40.9254C375.821 42.2115 375.46 43.5427 375.257 44.8964Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M55.4132 189.095C51.4196 189.095 48.0127 188.396 45.1698 186.997C42.327 185.598 40.161 183.59 38.6719 180.928C37.1828 178.266 36.4608 175.152 36.4608 171.542C36.4608 170.662 36.4833 169.76 36.5736 168.834C36.6413 167.909 36.7541 166.984 36.8895 166.037C31.2489 166.037 26.1723 165.112 21.6373 163.239C17.1023 161.366 13.2215 158.794 9.99513 155.478C6.76871 152.183 4.28685 148.348 2.57211 143.993C0.85737 139.639 0 135.013 0 130.117C0 125.221 0.85737 120.506 2.57211 116.196C4.28685 111.887 6.76871 108.074 9.99513 104.78C13.2215 101.486 17.1023 98.8911 21.6373 97.0184C26.1723 95.1458 31.2263 94.2207 36.7766 94.2207C42.327 94.2207 47.381 95.1232 51.916 96.9282C56.451 98.7332 60.3318 101.238 63.5582 104.487C66.7846 107.713 69.2664 111.436 70.9812 115.61C72.6959 119.784 73.5533 124.296 73.5533 129.125V169.737C73.5533 173.279 72.899 176.528 71.5904 179.484C70.2818 182.44 68.2963 184.786 65.6113 186.523C62.9264 188.261 59.5421 189.118 55.4132 189.118V189.095ZM36.7541 153.176C37.7243 153.176 38.6493 153.131 39.5293 153.018C40.4318 152.928 41.3117 152.77 42.2142 152.567C43.3874 150.807 44.7637 149.025 46.3431 147.265C47.9225 145.505 49.75 143.768 51.8032 142.053C53.8564 140.361 56.2028 138.714 58.8201 137.157V129.102C58.8201 125.966 58.2786 123.078 57.173 120.37C56.0675 117.686 54.5332 115.362 52.5477 113.376C50.5622 111.413 48.2158 109.856 45.5308 108.728C42.8459 107.6 39.9354 107.036 36.7766 107.036C33.6179 107.036 30.7074 107.623 28.0225 108.773C25.3375 109.924 23.0136 111.549 21.0056 113.624C19.0201 115.7 17.4633 118.159 16.3803 120.98C15.2747 123.8 14.7332 126.846 14.7332 130.117C14.7332 133.389 15.2747 136.435 16.3803 139.255C17.4858 142.075 19.0201 144.535 21.0056 146.611C22.991 148.686 25.3375 150.311 28.0225 151.461C30.7074 152.612 33.6179 153.199 36.7766 153.199L36.7541 153.176ZM54.4881 176.032C55.9321 176.032 57.0151 175.468 57.7371 174.34C58.4591 173.212 58.8201 171.745 58.8201 169.895V151.935C57.3084 153.221 55.9998 154.53 54.8942 155.861C53.7887 157.192 52.9087 158.591 52.2093 160.035C51.5324 161.502 51.0135 163.036 50.6751 164.683C50.3366 166.307 50.1561 168.045 50.1561 169.895C50.1561 171.181 50.3366 172.286 50.7202 173.212C51.1037 174.137 51.6227 174.836 52.3221 175.31C52.999 175.784 53.721 176.032 54.4881 176.032Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M118.884 166.847C112.905 166.847 107.693 165.719 103.271 163.44C98.8486 161.161 95.3965 158.048 92.9598 154.099C90.5231 150.151 89.3047 145.729 89.3047 140.832C89.3047 135.327 90.4328 130.521 92.7116 126.438C94.9904 122.354 98.0814 119.195 101.985 116.939C105.888 114.683 110.333 113.577 115.274 113.577C121.185 113.577 125.969 114.796 129.646 117.255C133.324 119.692 136.009 122.986 137.724 127.092C139.438 131.198 140.296 135.779 140.296 140.81C140.296 141.487 140.251 142.299 140.183 143.202C140.115 144.104 140.002 144.826 139.867 145.3H104.309C104.85 147.421 105.798 149.181 107.152 150.602C108.505 152.023 110.175 153.106 112.205 153.806C114.236 154.528 116.515 154.866 119.064 154.866H133.707V166.802H118.861L118.884 166.847ZM104.241 135.936H126.194C126.059 134.65 125.811 133.432 125.472 132.326C125.134 131.198 124.637 130.206 124.028 129.326C123.419 128.446 122.697 127.701 121.862 127.069C121.027 126.438 120.08 125.986 118.974 125.648C117.869 125.31 116.673 125.129 115.364 125.129C113.649 125.129 112.115 125.445 110.784 126.054C109.453 126.663 108.325 127.476 107.445 128.491C106.542 129.506 105.843 130.679 105.324 131.965C104.805 133.252 104.444 134.583 104.241 135.936Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M157.34 166.849V136.954C157.34 132.667 158.355 128.763 160.386 125.221C162.416 121.679 165.349 118.859 169.208 116.76C173.066 114.662 177.669 113.602 183.016 113.602C188.363 113.602 193.056 114.662 196.869 116.76C200.682 118.859 203.593 121.701 205.623 125.221C207.654 128.763 208.669 132.667 208.669 136.954V166.849H194.545V136.954C194.545 134.855 194.026 132.915 193.011 131.178C191.973 129.44 190.597 128.064 188.837 127.049C187.077 126.033 185.137 125.514 183.016 125.514C180.895 125.514 178.955 126.033 177.195 127.049C175.435 128.064 174.059 129.44 173.021 131.178C171.983 132.915 171.486 134.833 171.486 136.954V166.849H157.362H157.34Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M236.153 108.593C233.739 108.593 231.663 107.735 229.926 105.998C228.166 104.261 227.309 102.207 227.309 99.8158C227.309 97.4242 228.189 95.371 229.926 93.6337C231.663 91.8964 233.761 91.0391 236.153 91.0391C238.545 91.0391 240.643 91.8964 242.38 93.6337C244.118 95.371 244.997 97.4242 244.997 99.8158C244.997 102.207 244.118 104.261 242.38 105.998C240.62 107.735 238.545 108.593 236.153 108.593ZM229.046 166.849V114.82H243.26V166.849H229.046Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M289.203 168.09C283.856 168.09 279.253 167.03 275.395 164.931C271.537 162.833 268.604 160.013 266.573 156.47C264.543 152.928 263.527 149.025 263.527 144.738V114.843H277.651V144.738C277.651 146.836 278.17 148.777 279.186 150.491C280.223 152.229 281.6 153.605 283.36 154.62C285.12 155.636 287.06 156.154 289.181 156.154C291.302 156.154 293.242 155.636 295.002 154.62C296.762 153.605 298.138 152.229 299.176 150.491C300.214 148.754 300.71 146.836 300.71 144.738V114.843H314.834V144.738C314.834 149.025 313.819 152.928 311.788 156.47C309.758 160.013 306.847 162.833 303.034 164.931C299.221 167.03 294.596 168.09 289.181 168.09H289.203Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M335.479 166.85V154.915H361.132C361.967 154.915 362.689 154.734 363.343 154.396C363.998 154.057 364.517 153.583 364.9 152.974C365.284 152.365 365.464 151.688 365.464 150.944C365.464 150.131 365.284 149.409 364.9 148.8C364.517 148.191 363.998 147.695 363.343 147.311C362.689 146.928 361.945 146.747 361.132 146.747H351.25C347.888 146.747 344.842 146.228 342.135 145.168C339.427 144.107 337.261 142.415 335.637 140.069C334.035 137.722 333.223 134.654 333.223 130.841C333.223 127.907 333.967 125.245 335.434 122.831C336.9 120.417 338.908 118.476 341.413 117.01C343.917 115.543 346.692 114.821 349.716 114.821H374.354V126.757H351.069C350.032 126.757 349.129 127.095 348.339 127.772C347.55 128.449 347.144 129.329 347.144 130.434C347.144 131.54 347.527 132.42 348.272 133.142C349.016 133.864 349.964 134.202 351.047 134.202H360.929C364.697 134.202 367.969 134.766 370.721 135.895C373.474 137.023 375.595 138.76 377.106 141.152C378.618 143.543 379.363 146.657 379.363 150.538C379.363 153.538 378.596 156.268 377.106 158.75C375.595 161.232 373.564 163.195 371.037 164.662C368.488 166.128 365.645 166.85 362.486 166.85H335.479Z"
                      fill="#FFFFFB"
                    />
                    <path
                      d="M404.409 168.092C401.792 168.092 399.558 167.144 397.663 165.294C395.768 163.422 394.82 161.188 394.82 158.616C394.82 156.044 395.768 153.81 397.663 151.937C399.558 150.065 401.792 149.14 404.409 149.14C407.027 149.14 409.26 150.065 411.155 151.937C413.051 153.81 413.998 156.044 413.998 158.616C413.998 160.308 413.57 161.887 412.712 163.354C411.855 164.82 410.704 165.971 409.26 166.829C407.816 167.686 406.192 168.115 404.409 168.115V168.092Z"
                      fill="#FFFFFB"
                    />
                  </svg>
                  <h4 className="text-[#FFFFFB] mb-[--sy-95px] font-bold text-[--32px] leading-[--sy-40px] after:content-[''] relative after:absolute after:-bottom-[46px] after:left-0 after:w-3/4 after:h-[1px] after:bg-[#FFFFFB]">
                    The Last Software You Will Ever Buy..
                  </h4>
                  <div className=" flex flex-col gap-[--sy-18px]">
                    <h5 className=" font-bold text-[--19px] leading-[--sy-28px] text-[#FFFFFB]">
                      Geek Labs Holding
                    </h5>
                    <p className="text-[--19px] leading-[--sy-28px] text-[#FFFFFB] font-normal">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
                <div className=" h-[--sy-380px] w-[1px] bg-[#FFFFFB]"></div>
                <div className=" flex gap-[--151px]">
                  <div className=" flex flex-col gap-y-[--sy-64px] text-[#FFFFFB]">
                    <div>
                      <h6 className=" mb-[--sy-40px] text-[--18px] leading-[--sy-28px] font-bold">
                        Site Map
                      </h6>
                      <ul>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/modules"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Modules
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/blog"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className=" mb-[--sy-40px] text-[--18px] leading-[--sy-28px] font-bold">
                        Quick Links
                      </h6>
                      <ul>
                        <li>
                          <Link
                            href={"/privacy-security"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Privacy
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-y-[--sy-64px] text-[#FFFFFB]">
                    <div>
                      <h6 className=" mb-[--sy-40px] text-[--18px] leading-[--sy-28px] font-bold">
                        Support
                      </h6>
                      <ul>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Knowledge base
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Live Chat
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            Phone Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            E-mail
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className=" mb-[--sy-40px] text-[--18px] leading-[--sy-28px] font-bold">
                        Social Media
                      </h6>
                      <ul>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            @Twitter
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/"}
                            className=" text-[--18px] leading-[--sy-28px]"
                          >
                            @Instagram
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[--18px] leading-[--sy-28px] mx-auto w-fit text-[#FFFFFB]">
                  Copyright © 2024 Geek Labs Holdings. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
