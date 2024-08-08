import React, { useEffect, useState } from "react";
import "./home.css"; // Import your CSS files here
import "./slideshowhome.css"; // Import your CSS files here

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > slides.length) {
        newIndex = 1;
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[newIndex - 1].style.display = "block";
      dots[newIndex - 1].className += " active";

      return newIndex;
    });
  }

  return (
    <div>
      {/* navbar */}
      <section className="about-header">
        <div className="about-top" id="about-id">
          <div className="logo-area">
            <a href="home.html">
              <img
                src="homeimg/WhatsApp_Image_2023-05-05_at_10.26.36_PM-removebg-preview.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="about-nav">
          <ul>
            <li>
              <div className="about-nav1">
                <p>EMERGENCY</p>
              </div>
              <div className="about-nav1">
                <p>ABOUT US</p>
              </div>
              <div className="about-nav1">
                <p>BLOGS</p>
              </div>
              <div className="about-nav1">
                <p>DOCTORS</p>
              </div>
              <div className="about-nav1">
                <p>NEWS</p>
              </div>
              <div className="about-nav1">
                <p>RESOURCES</p>
              </div>
              <div className="about-nav1">
                <p>DONATE</p>
              </div>
              <div className="about-nav1">
                <p>CONTACT US</p>
              </div>
              <div className="about-nav1">
                <p>SUBSCRIPTIONS</p>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  REGISTER <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#">MIDWIFE</a>
                  <a href="#">INSTRUCTOR</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <br />
      </section>
      {/* navbar end */}

      {/* Slideshow */}
      <div className="slideshow-container">
        <div className="mySlides fade img1">
          <div className="numbertext "></div>
          <img src="homeimg/PhotoFunia-1682758045.jpg" alt="" />
          <div className="text">
            <h1>Caption One</h1>
          </div>
        </div>

        <div className="mySlides fade img2">
          <div className="numbertext"></div>
          <img src="homeimg/PhotoFunia-1682758259.jpg" alt="" />
          <div className="text">
            <h1>Caption Two</h1>
          </div>
        </div>

        <div className="mySlides fade img3">
          <div className="numbertext"></div>
          <img src="homeimg/Untitled design (12).png" alt="" />
          <div className="text">
            <h1>Caption Three</h1>
          </div>
        </div>

        {/* Dots */}
        <div style={{ textAlign: "center" }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      {/* Slideshow end */}

      {/* How can we help you? */}
      <section className="second">
        <br />
        <h1>How can we help you?</h1>
        <br />
        <div className="why">
          <div className="why2">
            <img
              src="homeimg/WhatsApp Image 2023-04-29 at 12.15.49 AM.jpeg"
              alt=""
              height="270px"
              width="550px"
            />
            <div className="para">
              <div className="para1 pa">
                <i>I'm a</i>
                <br />
                Parent!
              </div>
              <div className="para1 para2">
                <i>I'm expecting a baby</i>
                <br />
                or hoping to get pregnant soon! <br />
                <button>learn more</button>
              </div>
            </div>
          </div>
          <div className="why2">
            <img
              src="homeimg/WhatsApp Image 2023-04-29 at 12.19.15 AM.jpeg"
              alt=""
              height="270px"
              width="550px"
            />
            <div className="para">
              <div className="para1 pa">
                <i>I'm a</i>
                <br />
                Professional!
              </div>
              <div className="para1 para2 para3">
                <i>I'm a doula,nurse,midwife</i>
                <br />
                childbirth educator, or physician! <br />
                <button>
                  <a href="doula.html">learn more</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      {/* How can we help you? end */}

      {/* My pregnancy months */}
      <section className="months">
        <div className="content">
          <h1>My pregnancy months by months</h1>
          <div className="btn_s">
            <i id="left_scrolls" className="bi bi-arrow-left-short"></i>
            <i id="right_scrolls" className="bi bi-arrow-right-short"></i>
          </div>
        </div>
        <div className="item">
          <li>
            <div className="img1">
              <img src="homeimg/1st month.jpg" alt="" />
              <div>
                Your baby is an embryo consisting of two layers of cells from
                which all her organs and body parts will develop.
              </div>
              <h3>1st month</h3>
            </div>
          </li>
          {/* Add other months items similarly */}
        </div>
      </section>
      {/* My pregnancy months end */}

      {/* What we do */}
      <section className="magic">
        <div className="mag1">
          <p>What we do?</p>
        </div>
        <div className="mag2">
          <div className="content">
            <img src="homeimg/mag1.jfif" alt="" />
            <h1>Inform & inspire</h1>
            <p>
              families with free <br /> articles & printables
            </p>
          </div>
          {/* Add other magic content similarly */}
        </div>
      </section>
      {/* What we do end */}

      {/* Testimonial */}
      <div className="testimonial-container">
        <div className="progress-bar"></div>
        <div className="fas fa-quote-right fa-quote"></div>
        <div className="fas fa-quote-left fa-quote"></div>
        <p className="testimonial">
          Thank you so much from the bottom of hearts for taking such good care
          of us during/after the pregnancy as well as the delivery!! Because of
          your professionalism and great smiles, we felt like we were in good
          hands and that gave us peace of mind towards the big day. Thank you
          for helping deliver the most precious gift of our life!!
        </p>
        <div className="user">
          <img
            src="https://randomuser.me/api/portraits/women/46.jpg"
            alt="user"
            className="user-image"
          />
          <div className="user-details">
            <h4 className="username">Miyah Myles</h4>
            <p className="role">Mother</p>
          </div>
        </div>
      </div>
      {/* Testimonial end */}

      {/* What We Can Help You With */}
      <section className="pattern">
        <div className="patt1">
          <h1>What We Can Help You With..?</h1>
        </div>
        <div className="patt2">
          <div className="p1">
            <img src="homeimg/p1.jpg" alt="" />
            <div className="colo"></div>
            <div className="info">
              <p>Pregnancy</p>
              <a href="Pregnancy.html">Read More</a>
            </div>
          </div>
          <div className="p1">
            <img src="homeimg/p2.jpg" alt="" />
            <div className="colo"></div>
            <div className="info">
              <p>Infant Care</p>
              <a href="infantcare.html">Read More</a>
            </div>
          </div>
          <div className="p1">
            <img src="homeimg/p3.jpg" alt="" />
            <div className="colo"></div>
            <div className="info">
              <p>Post-Partum</p>
              <a href="Postpartum.html">Read More</a>
            </div>
          </div>
          <div className="p1">
            <img src="homeimg/p4.jpg" alt="" />
            <div className="colo"></div>
            <div className="info">
              <p>miscarriage & Loss</p>
              <a href="miscarriage.html">Read More</a>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
      {/* What We Can Help You With end */}
      {/* footer */}
      <section className="home-footer">
        <div className="foo-content">
          <div className="con">
            <div className="box">
              <h1>Important links</h1>
              <ul>
                <li>
                  <a href="#">Subscription</a>
                </li>
                <li>
                  <a href="#">Newletter</a>
                </li>
                <li>
                  <a href="#">Doctors</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="box">
              <h1>Address</h1>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
              </ul>
            </div>
            <div className="box">
              <h1>Get Help</h1>
              <ul>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Questions</a>
                </li>
                <li>
                  <a href="#">Dontae</a>
                </li>
                <li>
                  <a href="#">Instructors</a>
                </li>
              </ul>
            </div>
            <div className="box">
              <h1>Company</h1>
              <ul>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Awards</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">Gifts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
      {/* footer end */}
    </div>
  );
};

export default HomePage;
