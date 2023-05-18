import React, { useState } from 'react'
import oneIcon from "../../img/1-icon.png";
import twoIcon from "../../img/2-icon.jpg";
import threeIcon from "../../img/3-icon.png";
import fourIcon from "../../img/4-icon.png";
import boySittingLaptop from "../../img/boy-sitting-laptop-1.png";
import { Link, useLocation, useParams } from "react-router-dom";

const Selectyear = () => {

    const {branch} = useParams()
    const location = useLocation()

    const [path, setPath] = useState(location.pathname.replace(/selectyear/, ""))

  return (
    <div className="container select-year w-100">
    <div className="select-year-content">
      <div className="year-icon-box">
        <img className="boy-sitting-img" src={boySittingLaptop} alt="" />
      </div>

      <div className="year">
        <div className="select-year-heading w-100">
          <h3>Select your year</h3>
        </div>
        <div className="year-num">
          <Link to={`${path}1`}>
            <img src={oneIcon} className="year-num-img" alt="" />
          </Link>
        </div>
        <div className="year-num">
          <Link to={`${path}2`}>
            <img src={twoIcon} className="year-num-img" alt="" />
          </Link>
        </div>
        <div className="year-num">
          <Link to={`${path}3`}>
            <img src={threeIcon} className="year-num-img" alt="" />
          </Link>
        </div>
        <div className="year-num">
          <Link to={`${path}4`}>
            <img src={fourIcon} className="year-num-img" alt="" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Selectyear