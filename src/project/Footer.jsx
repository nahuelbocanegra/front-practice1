import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="Section-footer">
        <article className="art-footer uno">
          <h2>Ableton</h2>
        </article>
        <article className="art-footer dos">
          <a href="#" className="ax">
            Register Live or Push <i className="bx bx-chevron-right"></i>
          </a>
          <a href="#" className="ax">
            About Ableton <i className="bx bx-chevron-right"></i>
          </a>
          <a href="#" className="ax">
            Jobs <i className="bx bx-chevron-right"></i>
          </a>
          <div>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </article>
        <article className="art-footer tres">
          <h4>Education</h4>
          <div>
            <a href="#" className="ax">
              Offers for students and teachers{" "}
              <i className="bx bx-chevron-right"></i>{" "}
            </a>
            <a href="#" className="ax">
              Offers for institutions <i className="bx bx-chevron-right"></i>
            </a>
            <a href="#" className="ax">
              Push 1 trade-in initiative <i className="bx bx-chevron-right"></i>
            </a>
          </div>
        </article>
        <article className="art-footer cuatro">
          <h4>Sing up to our newsletter</h4>
          <p >
            Enter your email address to stay up to date with the latest
            offers,tutorials, downloads and more
          </p>
          <div className="cont-input-footer">
            <input type="text" placeholder="Email Address" />
            <button>Sing up</button>
          </div>
        </article>
        <article className="art-footer cinco">
          <h4>Community</h4>
          <a href="#" className="ax">
            Find Ableton User Groups <i className="bx bx-chevron-right"></i>
          </a>
          <a href="#" className="ax">
            Find Certified Training <i className="bx bx-chevron-right"></i>
          </a>
          <a href="#" className="ax">
            Become a Certified Trainer <i className="bx bx-chevron-right"></i>
          </a>
        </article>
        <article className="art-footer seis">
          <h4>Language and Location</h4>
          <div>
            <select  className="select1" name="pais" id="pais">
              <option value="Español" className="option">Español</option>
              <option value="Español" className="option">Español</option>
            </select>
            <select  className="select2" name="" id="">
              <option value="">Argentina</option>
              <option value="">Chile</option>
            </select>
          </div>
        </article>
        <article className="art-footer siete">
          <div className="contact-footer">
            <a href="#">Contact Us</a>
            <a href="#">Press Resources</a>
            <a href="#">Legal Info</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Imprint</a>
          </div>
          <div className="cont-logo-footer">
            <div>
              <div className="cont-it-a-footer">
                <span className="it-a-footer"></span>
                <span className="it-a-footer"></span>
                <span className="it-a-footer"></span>
                <span className="it-a-footer"></span>
              </div>
              <div className="cont-it-b-footer">
                <span className="it-b-footer"></span>
                <span className="it-b-footer"></span>
                <span className="it-b-footer"></span>
                <span className="it-b-footer"></span>
              </div>
            </div>
            <p>Made in Berlin</p>
          </div>
        </article>
      </section>
    </footer>
  );
}
