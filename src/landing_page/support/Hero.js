import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="support-hero">
      {/* TOP BAR */}
      <div className="support-top">
        <h4>Support Portal</h4>
        <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/articles/track-your-ticket" target="_blank" rel="noreferrer">Track Tickets</a>
      </div>

      {/* CONTENT */}
      <div className="support-content">
        {/* LEFT SIDE */}
        <div className="support-left">
          <h1>
            Search for an answer or browse help topics <br />
            to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
          />

          <div className="quick-links">
            <a href="https://zerodha.com/account-opening" target="_blank" rel="noreferrer">Track account opening</a>
            <a href="https://zerodha.com/segment-activation" target="_blank" rel="noreferrer">Track segment activation</a>
            <a href="https://zerodha.com/margin-calculator/Intraday" target="_blank" rel="noreferrer">Intraday margins</a>
            <a href="https://kite.trade/docs/kite" target="_blank" rel="noreferrer">Kite user manual</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="support-right">
          <h2>Featured</h2>
          <ol>
            <li>
              <a href="https://support.zerodha.com/category/trading-and-markets/trading-faqs/articles/current-takeovers-and-delisting" target="_blank" rel="noreferrer">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/margin-calculator/Intraday" target="_blank" rel="noreferrer">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}