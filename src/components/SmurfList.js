import React from "react";
import Smurf from "./Smurf";
import { useSelector } from "react-redux";

const SmurfList = () => {
  const { smurfs, isFetching } = useSelector((state) => state);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {smurfs.map((smurf) => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
