import React from "react";
import styled from "./home.module.scss";
import saladKiwi from "../../img/cookFour.png";
import Avocado from "../../img/cookThree.png";
import Bayam from "../../img/cookTwo.png";
import Naga from "../../img/cookOne.png";
import SpecialList from "../../components/SpecialList";
import { AnimateGroup } from "react-simple-animate";
const cookList = [
  {
    cookName: "Salad Kiwi Sugga",
    chef: "Amir Samantha",
    start: 5,
    id: 1,
    cookImg: saladKiwi,
  },
  {
    cookName: "Avocado Muscle",
    chef: "John Lennonk",
    start: 5,
    id: 2,
    cookImg: Avocado,
  },
  {
    cookName: "Bayam Red Poppeye",
    chef: "Toekang Sayoer",
    start: 5,
    id: 3,
    cookImg: Bayam,
  },
  {
    cookName: "Naga Fruity Joss",
    chef: "Imelda Saranghae",
    start: 5,
    id: 4,
    cookImg: Naga,
  },
];
const Special = () => {
  return (
    <section className={styled.special_container}>
      <div className={styled.special_container__top}>
        <div className={styled.special_container__title}>
          <p title="Watch Now">Watch Now</p>
          <h1 title="Special to Try">Special to Try</h1>
        </div>
      </div>
      <div className={styled.special_container__bottom}>
        <div className={styled.special_container__category} title={'healty-food'}>Healty Food</div>
        <div className={styled.special_container__list}>
          {cookList.map((item) => (
            <AnimateGroup play>
              <SpecialList {...item} key={item.key} />
            </AnimateGroup>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
