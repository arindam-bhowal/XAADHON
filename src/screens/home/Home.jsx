import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import students from "../../img/graduate-student-1.png";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [branch, setBranch] = useState("");
  const navigate = useNavigate();

  const location = useLocation();

  const handleSearch = () => {
    if (branch) {
      if (location.pathname === "/" || location.pathname === "/notes") {
        navigate(`/notes/${branch}/selectyear`);
      } else {
        navigate(`/questionPapers/${branch}/selectyear`);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="SelectCollege-box">
        <div className=" content-box-1 w-100">
          <div className="w-60 left-img-box">
            <img style={{ width: "100%" }} src={students} alt="" />
          </div>

          <div className="home-right-box">
            <div className="submit-btn">
              <h2 className="headingTitle"> {location.pathname === "/" || location.pathname === "/notes"
                ? "Notes"
                : "Question Papers"}</h2>
            </div>
            <div className="input-select-box">
              <div className="select-branch">
                <div className="sc-heading">
                  <h4>Select your Branch</h4>
                </div>

                <select
                  name=""
                  className="branchSelect custom-select"
                  onChange={(e) => {
                    e.target.value !== "" && setBranch(e.target.value);
                  }}
                  value={branch}
                  id="inputGroupSelect02"
                >
                  <option value="">Choose...</option>
                  <option value="CE">Civil</option>
                  <option value="EE">Electrical</option>
                  <option value="CHE">Chemical</option>
                  <option value="ME">Mechinical</option>
                  <option value="IE">Instrumentation</option>
                  <option value="CSE">Computer Science</option>
                  <option value="IPE">Industrial Production</option>
                  <option value="ETE">Electronics and Telecommunication</option>
                </select>
              </div>
            </div>
            <div className="submit-btn">
              <button
                onClick={handleSearch}
                className="btn coll-branch-sbtn btn-success endHome"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
