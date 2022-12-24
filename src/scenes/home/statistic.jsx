import React from "react";
import styled from "./home.module.scss";
const statisticData = [
  {
    name: "Menu Food",
    count: "180.000+",
  },
  {
    name: "Chefs",
    count: "20.000+",
  },
  {
    name: "Course",
    count: "400.000+",
  },
  {
    name: "ALUMnI",
    count: "6.900.000",
  },
];
const Statistic = () => {
  return (
    <section className={styled.statistic_container}>
      {statisticData.map((item, key) => (
        <div key={key} className={styled.statistic_container__item}>
          <h1 title={item.count}>{item.count}</h1>
          <p title={item.name}>{item.name.toUpperCase()}</p>
        </div>
      ))}
    </section>
  );
};

export default Statistic;
