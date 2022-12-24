import React from "react";
import star from "../svg/star.svg";
import styled from "../scenes/home/home.module.scss";
import { Animate } from "react-simple-animate";
const SpecialList = ({ cookName, chef, start, cookImg, id }) => {
  return (
    <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={id - 1}>
      <aside className={styled.special_card}>
        <div className={styled.special_card__img}>
          <img src={cookImg} alt={cookName} />
        </div>
        <div className={styled.special_card__body}>
          <h1 className={styled.special_card__foodTitle} title={cookName}>
            {cookName}
          </h1>
          <p className={styled.special_card__chefName} title={chef}>
            {chef}
          </p>
          <div className={styled.special_card__starRating}>
            {Array(start)
              .fill(0)
              .map((i) => (
                <img src={star} alt="star-icon" />
              ))}
          </div>
        </div>
      </aside>
    </Animate>
  );
};

export default SpecialList;
