import "./index.css";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <img src="https://picsum.photos/1920/1080?61" alt="hero" />
      <div className="hero-text">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem, ipsum dolor.</p>
        <Button textContent="Clicca qui!" />
      </div>
    </div>
  );
};

export default Hero;
