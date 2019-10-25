import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import css from "./styles/index.scss";
import Disk from '../components/Disk';

const Accordion = () => {
  const [setActive, setActiveState] = useState("");
  const [setActive1, setActiveState1] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);
  const content1 = useRef(null);

  const toggleAccordion = () => {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(
        setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
      );
      setRotateState(
        setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
      );
  }

  const toggleAccordion1 = () => {
      setActiveState1(setActive1 === "" ? "open" : "");
      setHeightState(
        setActive1 === "open" ? "0px" : `${content.current.scrollHeight}px`
      );
      setRotateState(
        setActive1 === "open" ? "accordion__icon" : "accordion__icon rotate"
      );
  }

  return (
   <>
    <div className={css.accordion__wrapper}>
        <div className={css.accordion__section}>
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className={css.accordion__title}>One</p>
            <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
          </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className={css.accordion__content}
          >
            <div
              className={css.accordion__text}
            >
              <Disk/>
              </div>
          </div>
    </div>

    <div className={css.accordion__section}>
          <button className={`accordion ${setActive1}`} onClick={toggleAccordion1}>
            <p className={css.accordion__title}>Two</p>
            <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
          </button>
          <div
            ref={content1}
            style={{ maxHeight: `${setHeight}` }}
            className={css.accordion__content}
          >
            <div
              className={css.accordion__text}
            >
              <Disk/>
          </div>
      </div>

    </div>

    <div className={css.accordion__section}>
        <button className={`accordion ${setActive1}`} onClick={toggleAccordion1}>
          <p className={css.accordion__title}>Three</p>
          <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        </button>
        <div
          ref={content1}
          style={{ maxHeight: `${setHeight}` }}
          className={css.accordion__content}
        >
          <div
            className={css.accordion__text}

          >
            <Disk/>
            </div>
      </div>
    </div>

    <div className={css.accordion__section}>
        <button className={`accordion ${setActive1}`} onClick={toggleAccordion1}>
          <p className={css.accordion__title}>Four</p>
          <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        </button>
        <div
          ref={content1}
          style={{ maxHeight: `${setHeight}` }}
          className={css.accordion__content}
        >
          <div
            className={css.accordion__text}

          >
            <Disk/>
            </div>
      </div>

    </div>
    </div>
   </>
  );
}

export default Accordion;
