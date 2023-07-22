import Navbar from "components/Navbar";
import NestedModal from "components/NestedModal";
import React, { useState, useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link, useLocation, useParams } from "react-router-dom";

const UserPortfolioDetails = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Navbar amIatLoginPage={false} />
      <div
        style={{
        //   backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          gap: "25%",
        }}
      >
        <div style={{ width: "50%", marginTop: "10px" }}>
          <div style={{ width: "100%" }} className="home__intro-title">
            <h1>
              Welcome! Here you can{" "}
              <span>
                {"<"}code {"/>"}
              </span>{" "}
              your <span>portfolio.</span>
            </h1>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "400px",
            // backgroundColor: "red",
          }}
        >
          <div
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
            }}
            class="home__create-portfolio--btn"
          >
            <NestedModal />
          </div>
          <div
            style={{
              width: "150px",
              display: "flex",
              justifyContent: "center",
            }}
            class="home__create-portfolio--btn"
          >
            <Link
              style={{ color: "white", display:'flex', flexDirection:'row' }}
              to={`/dashboard`}
            >
            <p style={{marginTop:'2px'}}>  Later</p>
              <ArrowRightAltIcon
                style={{  width: "50px", height: "30px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPortfolioDetails;
