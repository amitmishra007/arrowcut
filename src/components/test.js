import React from "react";

const Test = ({ title }) => {
  return (
    <div className="h-[20.375rem] w-[23rem] border">
      <div className="flex justify-between">
        <p>{title}</p>
        <button className="bg-red text-white rounded py-4 px-6">Explore</button>
      </div>
    </div>
  );
};

export default Test;
