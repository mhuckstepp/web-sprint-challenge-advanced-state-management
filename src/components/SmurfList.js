import React from "react";
import Smurf from "./Smurf";
// redux hooks used
import { useSelector } from "react-redux";

const SmurfList = () => {
  // redux hooks used
  const { smurfs, isFetching } = useSelector((state) => state);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  //   Maps over smurfs array and renders smurfs
  return (
    <div className="listContainer">
      {smurfs.map((smurf) => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
