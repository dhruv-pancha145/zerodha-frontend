import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              className="mb-3"
              alt="Zerodha Logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com/zerodhaonline" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/zerodha.co.in" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/zerodha.india" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/company/zerodha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://t.me/zerodha" target="_blank" rel="noreferrer" aria-label="Telegram">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <p>Company</p>
            {/* Project ke pages */}
            <Link to="/about" className="text-muted text-decoration-none">About</Link><br />
            <Link to="/product" className="text-muted text-decoration-none">Products</Link><br />
            <Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link><br />
            {/* External links */}
            <a href="https://zerodha.com/referral" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Referral programme</a><br />
            <a href="https://zerodha.com/careers" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Careers</a><br />
            <a href="https://zerodha.tech" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Zerodha.tech</a><br />
            <a href="https://zerodha.com/press" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Press & media</a><br />
            <a href="https://zerodha.com/csr" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Zerodha cares (CSR)</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            {/* Project ka page */}
            <Link to="/support" className="text-muted text-decoration-none">Contact</Link><br />
            {/* External links */}
            <a href="https://support.zerodha.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Support portal</a><br />
            <a href="https://zerodha.com/z-connect" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Z-Connect blog</a><br />
            <a href="https://zerodha.com/charges" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">List of charges</a><br />
            <a href="https://zerodha.com/resources" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Downloads & resources</a><br />
          </div>

          <div className="col">
            <p>Account</p>
            {/* Project ka signup page */}
            <Link to="/signup" className="text-muted text-decoration-none">Open an account</Link><br />
            {/* External links */}
            <a href="https://zerodha.com/fund-transfer" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Fund transfer</a><br />
            <a href="https://zerodha.com/60-day-challenge" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">60 day challenge</a><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary."
          </p>
        </div>
      </div>

      <div
        className="container d-flex flex-wrap justify-content-center gap-5 py-3"
        style={{ fontSize: "13px" }}
      >
        <a href="https://www.nseindia.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">NSE</a>
        <a href="https://www.bseindia.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">BSE</a>
        <a href="https://www.mcxindia.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">MCX</a>
        <a href="https://zerodha.com/terms" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Terms & conditions</a>
        <a href="https://zerodha.com/policies" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Policies & procedures</a>
        <a href="https://zerodha.com/privacy" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Privacy policy</a>
        <a href="https://zerodha.com/disclosure" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Disclosure</a>
      </div>
    </footer>
  );
}

export default Footer;