
import {Button} from './Button';
import Footer from './Footer';
function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted></video>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" >
                    Get Started
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" >
                    Watch Trailer <i className="fas fa-play"></i>
                </Button>
            </div>
            <Footer/>
        </div>
    )
}

export default HeroSection