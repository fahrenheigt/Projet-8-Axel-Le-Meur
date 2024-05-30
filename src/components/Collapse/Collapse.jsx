import React, { useState } from "react";
import ArrowDown from "../../assets/images/vector-bas.svg";
import ArrowUp from "../../assets/images/vector-haut.svg";

export default function Collapse({ title, content }) {
  const [state, setState] = useState({
    showContent: false,
  });

  function toggle(){
    console.log(state.showContent)
    setState({
        ...state,
        showContent: !state.showContent
    });
  }

  function getClass(){
    return state.showContent ? 'transition expand-contract expanded' : 'transition expand-contract';
  }

  function getArrow(){
    return state.showContent ? ArrowUp : ArrowDown;
  }

  return (
    <div>
        <div className="collapse-btn flex space-between p-2 kasa-bg px-5 rounded-sm" onClick={toggle}>
            <span className="grow text-white text-xl bold">{title}</span>
            <img src={getArrow()} alt="" />
        </div>
        <div className="expand-container grey-bg">
            <div className={"p-5 " + getClass()}>
                {content}
            </div>
        </div>
    </div>
  )
}
