import Button from "./button";
import DividerLines from "./dividerLines";
import DotAnimation from "./canvasDots";

export default function Hero() {
    return (
        <article className="hero-section flex-stack">
            <DotAnimation></DotAnimation>
            <section className="flex-container-spbtwn side-margin-5rem hero-content">
                <div className="hero-left-side">
                    <img className="mini-web-pages-img" src="/mini-web-pages.png" alt="Mini Web Pages" />
                </div>
                <div className="hero-right-side flex-container-column">
                    <h1 className="flex-container-column font-extra-large lily-script-font-regular hht-container">
                        <span className="hero-heading-transform">Web Design</span>
                        <span className="hero-heading-transform-small">& Development</span>
                    </h1>
                    <div className="hero-text-content-container">
                    <p className="hero-intro-text center-text font-medium open-sans-font-regular flex-container-column"><span>Hi, I'm Alix.</span>I’m a passionate web developer dedicated to bringing your vision to life. Whether you're looking to create something new or enhance your online presence, I’m here to help. Explore my portfolio or reach out—let's build something amazing together!</p>
                        <DividerLines
                            classname="hero-divider-lines" 
                            flexClass="flex-container-column divider-container-size-100per" 
                            lineOneLength="width-large" 
                            lineTwoLength="width-medium" 
                            lineThreeLength="width-small">
                        </DividerLines>
                    </div>
                    <div className="hero-button-container flex-container-spar">
                        <Button btnText="Portfolio" size="button-size-large" fontSize="font-mid-large" color="header-bg" href=""></Button>
                        <Button btnText="Contact" size="button-size-large" fontSize="font-mid-large" color="portfolio-bg" href=""></Button>
                    </div>
                </div>
            </section>
        </article>
    );
}
