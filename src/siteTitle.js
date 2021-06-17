import React from "react"
import { Helmet } from "react-helmet"

function siteTitle() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>DoseBooking.com</title>
          <link rel="canonical" href="https://dosebooking.com" />
        </Helmet>
      </div>
    )
}

export default siteTitle
