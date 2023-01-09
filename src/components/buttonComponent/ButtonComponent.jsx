import React from 'react'
import style from "./buttonComponent.module.css"
import PropTypes from 'prop-types'

const ButtonComponent = ({btnText, btnColor, btnBorderRadius}) => {


  return (
    <div>
      <span className={style.myDefaultStyle} style={{color: btnColor ? btnColor : "yellow", borderRadius: btnBorderRadius}}>{btnText}</span>
    </div>
  )

}

//prop-types
ButtonComponent.propTypes = {
    btnText: PropTypes.string.isRequired,
    btnColor: PropTypes.string,
    btnBorderRadius: PropTypes.node
}


export default ButtonComponent
