import React from "react";
import { Link } from "gatsby";
import "./shwaas.css";
import SiteTytle from "./siteTitle";

function Isha() {
  return (
    <div className="isha">
    <SiteTytle />
      <div className="ishaTop">
        <Link to="/" className="ishaTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="ishaBottom">
        <iframe
          title="shwaas"
          src="https://calendly.com/dose-booking/shwaas-hospital-vaccine-appointment?hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Isha;
