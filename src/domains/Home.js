import React from "react";
import DisplayLimit from "./DisplayLimit";

export const Home = ({ limit, setLimit }) => {
  return (
    <div>
      <DisplayLimit setLimit={setLimit} limit={limit} />
    </div>
  );
};
