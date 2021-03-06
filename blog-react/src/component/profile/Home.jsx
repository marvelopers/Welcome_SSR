import React from 'react';
import styled from "styled-components";

import { useSelector } from "react-redux";
import { getProfileData } from "../../store/store";

export function Home(props) {

  // const { title, description, description2 } = props.homeData;

  const storeData = useSelector(getProfileData);

  return (
    <StyledHomeSection id="Home">
      <DivHome className="home__container">
        <img src="" alt="김서현" className="home__avatar" />
        <h1 className="home__title">
          {storeData.homeData.title}<br />
        </h1>
        <h2 className="home__description">
          {storeData.homeData.subtitle}<br /><br />
        </h2>
        <h3 className="home__description">
          {storeData.homeData.description}
        </h3>
      </DivHome>
    </StyledHomeSection>
  )
}

export default Home;

const StyledHomeSection = styled.section`
  text-align : center;
`;

const DivHome = styled.section`
  padding-top : 150px;
  
`;
