import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/ARTGRAM-wlc.png";

// Principal Page where you can Sign up or Login

function WelcomePage() {
  return (
    <div className="Welcome">
      <div className="wlc-img">
        <img src={Logo} width="500" height="500" alt="logo" />
      </div>
      <div className="wlc-button">
        <h1>Discover and share the  <br/>world's best paintings.</h1>
        <p>Get inspired with incredible paintings from diverse styles <br/>and genres around the world.
        We're not guided by<br/> fads-just great art.</p>
        <div className="cont-but">
          <div className="butt-div">
            <Link to="/signup">
              <Button className="but-w" variant="dark" size="lg">
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
