import React from "react";
import "./CarItem.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const CarItem = (props) => {
  const { vehicleID, make, price, imageURL } = props.car;

  return (
    <div className="car">
      <img src={imageURL} alt="" />
      <div className="car_text">
        <h2>{make}</h2>
        <h3>BDT {price}</h3>

        <Link to={`/VehicleDetails/${vehicleID}`} className="btn-mobile">
          {/* <Link to={`/Carz`} className="btn-mobile"> */}
          <button
            className={`btn btn--test btn--medium`}
            // onClick={onClick}
            // type={type}
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarItem;
