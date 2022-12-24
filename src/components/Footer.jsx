import React from "react";
import { Link } from "react-router-dom";
import styled from "../style/footer.module.scss";
import logo from "../svg/logo.svg";
const footerList = [
  {
    footerList: "Special Course",
    footerItem: [
      {
        name: "Wedding Foods",
        url: "/",
      },
      {
        name: "Healthy and Muscle",
        url: "/",
      },
      {
        name: "Office Food Daily",
        url: "/",
      },
      {
        name: "Happy Kids",
        url: "/",
      },
    ],
  },
  {
    footerList: "Company",
    footerItem: [
      {
        name: "APIs Developer",
        url: "/",
      },
      {
        name: "Career",
        url: "/",
      },
      {
        name: "Terms & Conditions",
        url: "/",
      },
      {
        name: "Privacy Policy",
        url: "/",
      },
    ],
  },
  {
    footerList: "Be Our Friend",
    footerItem: [
      {
        name: "3, Season Park, Jakarta",
        url: "/",
      },
      {
        name: "support@foodyar.co,id",
        url: "/",
      },
      {
        name: "021 - 1111 - 2222",
        url: "/",
      },
    ],
  },
];
const Footer = () => {
  return (
    <>
      <footer className={styled.footer}>
        <div className={styled.footer__left}>
          <div className={styled.footer__logo}>
            <img src={logo} alt="logo" />
            <h1 title="Foodyar">Foodyar</h1>
          </div>
        </div>
        <div className={styled.footer__right}>
          <div className={styled.footer__itemList}>
            {footerList.map((item, key) => (
              <div key={key} className={styled.footer__itemGroup}>
                <div className={styled.footer__itemGroup__title}>
                  <h1>{item.footerList}</h1>
                </div>
                <div className={styled.footer__itemGroup__item}>
                  {item.footerItem.map((item, key) => (
                    <Link to={item.url}>{item.name}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <span className={styled.footer__bottom}>
        All Rights Reserved Foodyar by Pixel from Frontend developer Ayhan Daşyuvarlar 
        2022
      </span>
    </>
  );
};

export default Footer;
