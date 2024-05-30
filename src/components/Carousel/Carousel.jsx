import React, { useState } from "react";
import ArrowLeft from "../../assets/images/vector-left.svg";
import ArrowRight from "../../assets/images/vector-right.svg";

export default function Carousel({ carousel }) {
  const [state, setState] = useState({
    currentImage: 1,
    images: carousel,
  });

  function prev() {
    let ci = state.currentImage - 1;
    if(ci < 1) ci = state.images.length

    setState({
        ...state,
        currentImage: ci
    })
  }

  function next() {
    let ci = state.currentImage + 1;
    if(ci > state.images.length) ci = 1

    setState({
        ...state,
        currentImage: ci
    })
  }

  function getImage() {
    return {
        backgroundImage: 'url("' + state.images[state.currentImage - 1] + '")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "39vh"
    }
  }

  function getLineHeight() {
    return {
    }
  }

  return (
    <div style={getImage()} className="flex space-between rounded-xl">
        <div style={getLineHeight()} onClick={prev} className="text-18xl text-white px-8 self-center cursor-pointer h-full"><img className="left-arrow" src={ArrowLeft} alt="" /></div>
        <div className="grow text-white text-4xl text-center self-end py-5 bold">{state.currentImage}/{state.images.length}</div>
        <div style={getLineHeight()} onClick={next} className="text-18xl text-white px-8 self-center cursor-pointer h-full"><img className="right-arrow" src={ArrowRight} alt="" /></div>
    </div>
  )
}
