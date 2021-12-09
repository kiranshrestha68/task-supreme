import React, { useState } from "react";
import logo from "../images/reecharger_white_logo.png";
import Image from "next/image";
import { Dropdown, DropdownButton, MenuItem } from "react-bootstrap";

const Topbar = ({ show, setShow }) => {
  const handleClick = () => {
    setShow(!show);
  };
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const showSignin = () => {
    setDropdown(!dropdown);
  }
  return (
    <div>
      <nav id="pageTop" class="navbar navbar-expand-md navbar-dark bg-dark">
        <button
          className="btn btn-outline-light"
         
          onClick={handleClick}
        >
          <i className="fas fa-sliders-h"></i>
        </button>
        <div className="navbar-brand pl-2" style={{ paddingTop: "10px" }}>
          <Image
            src={logo}
            height="30"
            width="100"
            alt="reecharger_white_logo"
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline px-lg-5">
            <div className="input-group">
              <div className="input-group-prepend">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    All
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Smartphone</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Kitchen Hardware
                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-3">Prime Deals</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Book</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <input
                type="text"
                className="form-control"
                size="50"
                name="query"
                id="query"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="input-group-append">
                <button type="submit" className="btn btn-warning">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item dropdown px-2">
              <a
                className="nav-link"
                href="#"
                id="prefLanguageDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-2x fa-language"></i>
              </a>
         
            </li>

            <li className="nav-item dropdown px-2">
              <div
                className="nav-link"
              
                onClick={showSignin}
                style={{cursor: "pointer"}}

              >
                <i className="fas fa-2x fa-user-circle"></i>
              </div>
            </li>

            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                <i className="fas fa-2x text-light fa-shopping-cart"></i>
                <span className="badge badge-warning badge-pill">0</span>
              </a>
            </li>
          </ul>
        </div>{" "}
      </nav>
      {show ? (
        <div className="topbar">
          <div
            className="topbar-content drawer-content drawer-content-scrollable"
            role="document"
          >
            <div className="drawer-header bg-dark text-white">
              <h4 className="drawer-title mx-auto" >
                <i className="fas fa-user-circle"></i>
                Hello, Sign In
              </h4>
            </div>
            <div className="drawer-body">
              <h6 className="text-muted text-uppercase">Help & Settings</h6>
              <a
                href="your_account.html"
                className="btn btn-outline-success my-2 btn-sm"
              >
                You Account
              </a>
              <a href="login.html" className="btn btn-warning my-2  btn-sm">
                Sign in
              </a>
            </div>
            <div className="drawer-footer">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                data-dismiss="drawer"
                aria-label="Close"
                onClick={handleClick}
                style={{ paddingTop: "2%" }}
              >
                <i className="fas fa-2x fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div>
        {dropdown ? (
          <div>
            
              <div className="Topbar__accountdropdown">
                <div className="d-flex flex-column justify-content-center">
                  <a
                    href="login.html"
                    className="btn btn-warning w-75 btn-sm font-weight-bold"
                  >
                    Signin
                  </a>
                  <small>
                    New customer?<a href="register.html"> Start here.</a>
                  </small>
                </div>
              </div>{" "}
            </div>
          
        ) : null}
      </div>
    </div>
  );
};

export default Topbar;
