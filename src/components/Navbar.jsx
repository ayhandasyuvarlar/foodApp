import React from "react";
import { Link } from "react-router-dom";
import styled from "../style/navbar.module.scss";
import logo from "../svg/logo.svg";
import { AiOutlineNumber } from "react-icons/ai";
const navigationList = [
  {
    id: 1,
    name: "Home ",
    url: "/",
  },
  {
    id: 2,
    name: "Beverages  ",
    url: "/",
  },
  {
    id: 3,
    name: " Chef   ",
    url: "/",
  },
  {
    id: 4,
    name: " Ingredient    ",
    url: "/",
  },
  {
    id: 5,
    name: "Stories",
    url: "/",
  },
];
const Navbar = () => {
  return (
    <nav className={styled.navigation}>
      <main className={styled.navigation__box}>
        <div className={styled.navigation__left}>
          <div className={styled.navigation__logo}>
            <div className={styled.navigation__img}>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className={styled.navigation__title} title={"foodyar"}>
            Gayee
          </div>
        </div>
        <div className={styled.navigation__right}>
          <div className={styled.navigation__group}>
            {navigationList.map((item) => (
              <Link key={item.id} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className={styled.navigation__btn}>My Kitchen</div>
        </div>
        <div className={styled.navigation__responsive}>
          <AiOutlineNumber />
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
