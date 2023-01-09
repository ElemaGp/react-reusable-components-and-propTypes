import React from 'react'
import style from "./buttonComponent.module.css"

const ButtonComponent = ({btnText, btnColor, btnWidth}) => {


  return (
    <div>
      <span className={style.myDefaultStyle} style={{color: btnColor ? btnColor : "yellow", width: btnWidth}}>{btnText}</span>
    </div>
  )
}

export default ButtonComponent
