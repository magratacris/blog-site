import React from "react";
import Image from "next/image";
import classes from "../../src/styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/Images/site/max.jpeg"
          alt={"An image showing a beautiful woman"}
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, Im Irene</h1>
      <p>i&apos;m kpop idol from south korea and ang ganda ko hehe</p>
    </section>
  );
};

export default Hero;
