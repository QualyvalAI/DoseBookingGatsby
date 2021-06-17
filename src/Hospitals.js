import React from "react";
import "./Hospitals.css";
import { Link } from "gatsby";
import SiteTytle from "./siteTitle";

function Hospitals() {
  return (
    <div className="hospitals">
      <SiteTytle />
      <div className="hospitalsTop">
        <Link to="/" className="hospitalsTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="hospitalsBottom">
        <iframe
          title="booking-Portal"
          src="https://calendly.com/dose-booking/starcity?embed_domain=starcity-appointment.dosebooking.com&amp;embed_type=Inline&amp;hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Hospitals;
