import React from "react";
import Directory from "../../Components/Directory/Directory";
import "./Homepage.styles.scss";
import { HomePageContainer } from "./Homepage.styles"

function Homepage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default Homepage;