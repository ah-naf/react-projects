import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-images">
          <article className="hero-info">
            <h1>Payments infrastructure for the internet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, laboriosam?Lorem ipsum dolor sit amet.</p>
            <button className="btn">Start now</button>
          </article>
          <img src={phoneImg} className="phone-img" alt="" />
        </article>
      </div>
    </section>
  );
}

export default Hero
