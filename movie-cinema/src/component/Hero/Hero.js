import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <div class="container">
                <section class="hero">
                    <div class="hero-left">
                        <h2 class="hero-title">Title</h2>
                        <h3 class="hero-genre">Genre :</h3>
                        <p class="hero-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur officiis velit impedit dolor eum vitae aliquid porro nam deserunt ea eveniet sed rerum, commodi ex nobis error itaque minus.
                        </p>
                        <p className="hero-button">Watch</p>
                    </div>
                    <div class="hero-rigth">
                        <img className="hero-img" src="https://picsum.photos/200" alt="hero-img" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero;