import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
//import "./affiliate.module.css";
//import "./features.module.css";

const Affiliate = () => {
  return (
    <>
      <div className="affiliate">
        <Header />
        <div className="affiliate-container">
          <div>
            <h2>Enjoy a passive income stream</h2>
            <p>
              Are you interested in making money with Dutiful? It's really
              simple. Earn up to 10% commission on every sale made on the
              Dutiful's standard and premium plans. Simply promote Dutiful on
              your website, blog, Facebook, Instagram, Twitter, and other social
              media platforms.
            </p>
          </div>

          <div>
            <div>
              <img src={require("./aff.png")} alt="img" />
            </div>

            <div>
              <div>
                <h2>Why Promote Dutiful?</h2>
                <p>
                  Dutiful is the fastest growing business or service listing
                  platform in Nigeria with massive potential of becoming the
                  biggest marketplace to find service providers and businesses.
                  It is more than a business directory...user friendly, can be
                  downloaded from Google Play for your convenience, properly
                  managed and much more. Dutiful provides the best support that
                  no business directory platform offers its users in the market.
                  Ready to build more wealth?
                </p>
                <Link to="/affiliate-form">Join our affiliate program</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Affiliate;
