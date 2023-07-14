import Header from "./header";
import Footer from "./footer";
import "./features.css";

function Features() {
  return (
    <>
      <section className="sectionf">
        <Header />
        <div>
          <div className="box1">
            <div className="h-text">
              <h4 className="list-head">
                List and grow your business  with just few clicks
              </h4>
              <p>
                Eliminate manual work and save time by listing your business or
                service on the best business directory in Nigeria.
              </p>
            </div>
            <div>
              <img src={require("./overview.png")} alt="overview" />
            </div>
          </div>

          <div className="box2">
            <div className="h-text">
              <h4>Collect reviews and ratings from customers</h4>
              <p>
                Accelerate your business reputation by 90% and gain social
                proof through reviews and ratings requested from customers.
              </p>
            </div>

            <div>
              <svg
                width="473"
                height="473"
                viewBox="0 0 773 773"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.56" filter="url(#filter0_f_245_1926)">
                  <circle
                    cx="386.25"
                    cy="386.25"
                    r="240.75"
                    stroke="url(#paint0_linear_245_1926)"
                    stroke-width="45"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_245_1926"
                    x="0"
                    y="0"
                    width="772.5"
                    height="772.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="61.5"
                      result="effect1_foregroundBlur_245_1926"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_245_1926"
                    x1="386.25"
                    y1="123"
                    x2="386.25"
                    y2="649.5"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7948BA" />
                    <stop offset="1" stop-color="#BB3B9F" stop-opacity="0.83" />
                  </linearGradient>
                </defs>
              </svg>

              <img
                src={require("./Group3.png")}
                alt="overview"
                className="img1"
              />
              <img
                src={require("./Group2.png")}
                alt="overview"
                className="img2"
              />
              <img
                src={require("./Group1.png")}
                alt="overview"
                className="img3"
              />
            </div>
          </div>

          <div className="box3">
            <div>
              <img
                src={require("./phone.png")}
                alt="overview"
                className="phone"
              />
            </div>
            <div>
              <img
                src={require("./chat.png")}
                alt="overview"
                className="chat"
              />
            </div>
          </div>

          <div className="box4">
            <div className="box4-1">
              <div>
                <img src={require("./booked.png")} alt="overview" />
                <img src={require("./Calendar.png")} alt="overview" />
              </div>
              <img src={require("./date.png")} alt="overview" />
            </div>
            <div className="h-text">
              <h4>Accept and sell appointments</h4>
              <p>
                Let customers book their own appointment or consultation. Start
                accepting payments for appointments through your booking page.{" "}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Features;
