import { MDBFooter } from "mdb-react-ui-kit";
import Art from "../assets/ARTGRAM-wlc.png";

function Footer() {
  return (
    <div className="footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mar">
                  <img className="fas fa-gem me-3" src={Art} width={30}></img>
                  ARTGRAM
                </h6>
                <p></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mar">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p className="nomar">
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 mar">Contact</h6>
                <p>Madrid, MD 28030, SP</p>
                <p>contact@artgram.com</p>
                <p>+ 01 234 567 88</p>
                <p className="nomar">+ 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Artgram.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
