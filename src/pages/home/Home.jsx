import style from "./home.module.css"
import React from 'react'
import ButtonComponent from "../../components/buttonComponent/ButtonComponent"
import BannerData from "../../components/bannerData/BannerData"

const Home = () => {
  return (
    <div>
      <ButtonComponent btnText="SIGN UP" btnColor="white" btnBorderRadius={"10px"}/>
      <p>{BannerData.headerText}</p>
    </div>
  )
}

export default Home
