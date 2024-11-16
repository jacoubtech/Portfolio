"use client";

import { useSwiper } from "swiper/react";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"

interface WorkSliderBtnsProp {
  containerStyles : string, 
  btnStyles: string
}


const WorkSliderBtns = ({containerStyles, btnStyles}:WorkSliderBtnsProp) => {
   const swiper = useSwiper(); 
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold  />
        </button>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold />
        </button>
    </div>
  )
}

export default WorkSliderBtns