import React, { useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-3.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function Testimonials() {
  const slider = useRef(null);
  const [offset, setOffset] = useState(0);

  const slideForward = () => {
    setOffset((current) => {
      const next = current > -50 ? current - 25 : current;
      if (slider.current) {
        slider.current.style.transform = `translateX(${next}%)`;
      }
      return next;
    });
  };

  const slideBackward = () => {
    setOffset((current) => {
      const next = current < 0 ? current + 25 : current;
      if (slider.current) {
        slider.current.style.transform = `translateX(${next}%)`;
      }
      return next;
    });
  };

  return (
    <div className="testimonials" id="testimonials">
      <img className="next-btn" src={next_icon} alt="" onClick={slideForward} />
      <img
        className="back-btn"
        src={back_icon}
        alt=""
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider} style={{ transform: `translateX(${offset}%)` }}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
