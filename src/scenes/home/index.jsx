import React from "react";
import App from "./App";
import Banner from "./Banner";
import styled from "./home.module.scss";
import Special from "./Special";
import Statistic from "./statistic";
import Testimonial from "./Testimonial";
const HomePage = () => {
  return (
    <section className={styled.homepage}>
      <Banner />
      <Special />
      <Testimonial/>
      <Statistic/>
      <App/>
    </section>
  );
};

export default HomePage;
