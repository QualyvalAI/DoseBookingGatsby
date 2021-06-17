import React from "react";
import "./Thanks.css";

function Thanks(props) {
  return (
    <div className="thanks">
      <h4>
        Thanks for submitting the request for Certificate, If your submitted record matches with our
        records, you shall receive the certificate within 3-4 working days.
      </h4>
      <button onClick={() => props.hideFn(false, false)} >Submit another request</button>
    
    </div>
  );
}

export default Thanks;
