import React from "react";
import styled from "./home.module.scss";
import appImg from "../../img/app.png";
const title = "Download our app and join the of contest";
const text =
  "In order to improve our cooking skills, we do need a food photography ";
const App = () => {
  return (
    <section className={styled.app_container}>
      <div className={styled.app_container__left}>
        <div className={styled.app_container__img}>
          <img src={appImg} alt="appImg" />
        </div>
      </div>
      <div className={styled.app_container__right}>
        <div className={styled.app_container__title}>
          <h1 title={title}>{title}</h1>
        </div>
        <div className={styled.app_container__text}>
          <p title={text}>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default App;

