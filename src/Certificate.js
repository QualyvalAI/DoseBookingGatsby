import React, { useState } from "react";
import "./Certificate.css";
import { Link } from "gatsby";
import FormDetails from "./FormDetails";
import Thanks from "./Thanks";
import SiteTytle from "./siteTitle";
import Spinner from './SpinnerPage';

function Certificate() {
  const [temp, setTemp] = useState(false);
  const [flag, setFlag] = useState(false);

  function hideFn(fl, x){
    setTemp(fl);
    setFlag(x);
  }

  return (
    <div className="certificate">
      <SiteTytle />
      <div className="certificateTop">
        <Link to="/" className="certificateTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="certificateBottom">
        {!temp && <FormDetails hideFn={hideFn} />}
        {flag && <Spinner hideFn={hideFn} /> }
        {temp && <Thanks hideFn={hideFn} />}
      </div>
    </div>
  );
}

export default Certificate;
