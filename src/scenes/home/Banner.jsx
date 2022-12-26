import React from "react";
import styled from "./home.module.scss";
import bannerImg from "../../img/food.png";
import { Animate, AnimateGroup } from "react-simple-animate";
import LazyLoad from "react-lazyload";
const title = "Eat What You Cook With Us, Together!";
const text =
  "When you eat something that cooked by yourself, the happiness is priceless.";
const btn = "Decide a Menu";
const Banner = () => {
  return (
    <section className={styled.banner_container}>
      <div className={styled.banner_container__left}>
        <AnimateGroup play>
          <div className={styled.banner_container__title}>
            <Animate
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              sequenceIndex={0}
            >
              <h1 title={title}>{title}</h1>
            </Animate>
          </div>
          <div className={styled.banner_container__text} title={text}>
            <Animate
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              sequenceIndex={1}
            >
              <p>{text}</p>
            </Animate>
          </div>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={2}
          >
            <div className={styled.banner_container__btn}>
              <span>{btn}</span>
            </div>
          </Animate>
        </AnimateGroup>
      </div>
      <div className={styled.banner_container__right}>
        <aside className={styled.banner_container__img}>
          <LazyLoad height={420}>
            <img src={bannerImg} alt="bannerImg" />
          </LazyLoad>
        </aside>
      </div>
    </section>
  );
};

export default Banner;
