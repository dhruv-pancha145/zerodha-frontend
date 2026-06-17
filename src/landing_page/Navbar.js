import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-backend-4i65.onrender.com/",
          {},
          { withCredentials: true }
        );
        setIsLoggedIn(data.status);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    verifyUser();
  }, []);
  //window.location.pathname 

const handleLogout = async () => {
  try {
    await axios.post("https://zerodha-backend-4i65.onrender.com/logout", {}, { withCredentials: true });
  } catch (err) {
    console.error(err);
  }
  setIsLoggedIn(false);
  navigate("/login");
};

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {isLoggedIn ? (
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                    style={{ color: "#e05c2a", fontWeight: "500" }}
                  >
                    Sign out
                  </button>
                ) : (
                  <Link className="nav-link" to="/signup">Signup</Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>
            </ul>
          </form>

          {/* ✅ Hamburger dropdown */}
          <div style={{ marginLeft: "40px", position: "relative" }}>
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{ cursor: "pointer", fontSize: "18px" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            ></i>

            {dropdownOpen && (
              <div style={{
                position: "absolute",
                right: 0,
                top: "30px",
                background: "#fff",
                border: "1px solid #e8e8e8",
                borderRadius: "6px",
                padding: "8px 0",
                width: "160px",
                zIndex: 999,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}>
                <Link to="/signup" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Open Account</Link>
                <Link to="/about" className="dropdown-item" onClick={() => setDropdownOpen(false)}>About</Link>
                <Link to="/product" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Products</Link>
                <Link to="/pricing" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Pricing</Link>
                <Link to="/support" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Support</Link>
                <hr style={{ margin: "4px 0" }} />
                <a href="https://zerodha.com/careers" target="_blank" rel="noreferrer" className="dropdown-item">Careers</a>
                <a href="https://zerodha.com/z-connect" target="_blank" rel="noreferrer" className="dropdown-item">Z-Connect blog</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;