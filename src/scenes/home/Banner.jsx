import React from "react";
import styled from "./home.module.scss";
import bannerImg from "../../img/food.png";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
const title = "Eat What You Cook With Us, Together!";
const text =
  "When you eat something that cooked by yourself, the happiness is priceless.";
const btn = "Decide a Menu";
const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <section className={styled.banner_container}>
        <div className={styled.banner_container__left}>
          <div className={styled.banner_container__title}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
              <h1 title={title}>{title}</h1>
            </motion.div>
          </div>
          <div className={styled.banner_container__text} title={text}>
            <p>{text}</p>
          </div>

          <div className={styled.banner_container__btn}>
            <span>{btn}</span>
          </div>
        </div>
        <div className={styled.banner_container__right}>
          <aside className={styled.banner_container__img}>
            <LazyLoad height={420}>
              <img src={bannerImg} alt="bannerImg" />
            </LazyLoad>
          </aside>
        </div>
      </section>
    </motion.div>
  );
};

export default Banner;
