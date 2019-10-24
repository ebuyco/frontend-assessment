import React, {Fragment} from 'react';
import css from '../components/styles/index.scss';

const Content = () => (
  <Fragment>
      <div className={css.wrapper}>
            <div className={css.wrapper__header}>
            {/* <img className ="wrapper--image" src="http://via.placeholder.com/1920x650" alt="wrapper-img"/> */}
                <div className={css.wrapper__text}>
                      <h1 className={css.font__h1}>Hello Developer!</h1>
                      <h3>Lorem ipsum dolor sit amet, consectetur adepcising elit</h3>
                </div>

            </div>
            <div className={css.box__wrapper}>
                  <div className={css.boxes}>
                      <div className={css.boxes__inner}>
                      <img className ={css.box__image} src="http://via.placeholder.com/400x300" alt="wrapper-img"/>
                          <p className={css.text__card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullmco. </p>
                        <button className={css.btn__read__more}>Read More</button>
                      </div>
                  </div>
                  <div className={css.boxes}>
                      <div className={css.boxes__inner}>
                      <img className={css.box__image} src="http://via.placeholder.com/400x300" alt="wrapper-img"/>
                          <p className={css.text__card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullmco. </p>
                          <button className={css.btn__read__more}>Read More</button>
                      </div>
                  </div>
                  <div className={css.boxes}>
                      <div className={css.boxes__inner}>
                      <img className ={css.box__image} src="http://via.placeholder.com/400x300" alt="wrapper-img"/>
                           <p className={css.text__card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullmco. </p>
                          <button className={css.btn__read__more}>Read More</button>
                      </div>
                  </div>
            </div>
      </div>
  </Fragment>
)

export default Content;
