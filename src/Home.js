import React from "react";
import "./Home.css";
import { Link } from "gatsby";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SiteTytle from "./siteTitle";

function Home() {

  return (
    <div className="home">
      <SiteTytle />
      <div className="homeTop">
        <h1>
          <div className="logo"></div>
          DoseBooking.com
        </h1>
        <Link to="/certificate" className="certi">
          <button>Get Certificate</button>
        </Link>
      </div>
      <div className="homeMiddle">
        <div className="homeMiddle-left">
          <h2>
            Welcome to <span> DoseBooking.com</span>
          </h2>
          <p>
            This is a vaccination booking portal where you can book appointments for Vaccination. Three easy steps to get yourself vaccinated “Book It, Attend it, Get vaccinated”.
          </p>
          <div className="buttonGroup">
            <div className="booking">
              <h5>
                Book Appointment <ArrowDownwardIcon className="appoint" />
              </h5>
              <div className="bookingButton">
                <div className="bookingButton-left">
                  <Link to="/vaidya" className="linkButton">
                    <button>CB Vaidya Hospital</button>
                  </Link>
                  <Link to="/siddhivinayak" className="linkButton">
                    <button>Siddhivinayak Hospital</button>
                  </Link>
                </div>

                <div className="bookingButton-right">
                  <Link to="/hospitals" className="linkButton">
                    <button>Starcity Hospital</button>
                  </Link>
                  <Link to="/shwaas" className="linkButton">
                    <button>Shwaas Hospital</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homeImage"></div>
      </div>
      <div className="homeBottom">
        <h1>Steps to follow:</h1>
        <div className="cardRow">
          <div className="homeCard">
            <div className="bookIt"></div>
            <h3>Book it</h3>
            <p>Book an appointment through our website.</p>
            <br />
            <p>आमच्या वेबसाइटच्या माध्यमातून अपॉइंटमेंट बुक करा.</p>
          </div>
          <div className="homeCard">
            <div className="attend-it"></div>
            <h3>Attend it</h3>
            <p>Attend the event of taking vaccine by going to the hospital.</p>
            <br />
            <p>हॉस्पिटलमध्ये जाऊन लस घेण्याच्या कार्यक्रमाला उपस्थित राहा.</p>
          </div>
          <div className="homeCard">
            <div className="vaccinated"></div>
            <h3>vaccinated</h3>
            <p>Get vaccinated at your booked date.</p>
            <br />
            <p>तुमच्या बुक केलेल्या तारखेला लस घ्या.</p>
          </div>
        </div>
      </div>
      <div className="youtube">
        <h1 style={{marginBottom: '2%'}}>Video Tutorial</h1>
        <hr />
        <iframe
          title="video-Tutorial"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/_iq-fy4Kpx4"
          loading="lazy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="benefits">
        <h1>Benefits For Hospitals</h1>

        <ul>
          <li>Crowd control and management.</li>
          <li>Reduce no show with prior payments</li>
          <li>Data compliance(keep evidence in digital record).</li>
          <li>
            Fully managed data entry in cowin portal, delivering certificates to the recipients(via
            email).
          </li>
          <li>Generation daily reports required by Maharastra government.</li>
        </ul>
      </div>
      <div className="benefits">
        <h1>Benefits For Patients</h1>
        <ul>
          <li>Priority Queue(Need to come on time).</li>
          <li>Spend less time at the centre.</li>
          <li>No extra charges.</li>
        </ul>
      </div>
      <div className="footer">
        <div className="footerTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </div>
        <div className="footerBottom">
          <div className="footerBottom-left"></div>
          <div className="footerBottom-right">
            <h4>Contact Us</h4>
            <a href="mailto:Support@dosebooking.com">Support@dosebooking.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
