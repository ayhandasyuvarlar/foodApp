import React from "react";
import styled from "./home.module.scss";
import userImg from "../../img/perfectwoman.png";
const text =
  "Awalnya saya malu dengan mertua karena tidak bisa memasak, kini mereka lebih suka makan malam di rumah demi menyantap masakan yang saya buat sendiri";
const user = {
  userName: "Camella Sarrah",
  level: "Vege Master",
  userImg,
};
const Testimonial = () => {
  return (
    <section className={styled.testimonial_container}>
      <div className={styled.testimonial_container__text}>
        <p>{text}</p>
      </div>
      <div className={styled.testimonial_container__user}>
        <div className={styled.testimonial_container__userImg}>
          <img src={user.userImg} alt="" />
        </div>
        <div className={styled.testimonial_container__userDetails}>
          <h1
            title={user.userName}
            className={styled.testimonial_container__userName}
          >
            {user.userName}
          </h1>
          <p
            title={user.level}
            className={styled.testimonial_container__userLevel}
          >
            {user.level}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
