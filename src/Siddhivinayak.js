import React from "react";
import { Link } from "gatsby";
import "./Siddhivinayak.css";
import SiteTytle from "./siteTitle";

function Siddhivinayak() {
  return (
    <div className="siddhivinayak">
    <SiteTytle />
      <div className="siddhivinayakTop">
        <Link to="/" className="siddhivinayakTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="siddhivinayakBottom">
        <iframe
          title="siddhivinayak"
          src="https://calendly.com/dose-booking/siddhivinayak-hospital-vaccine-appointment-clone?embed_domain=siddhivinayak-appointment.dosebooking.com&amp;embed_type=Inline&amp;hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Siddhivinayak;
