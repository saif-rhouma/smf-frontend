import React from "react";
import { useParams } from "react-router-dom";
import MainCard from "../../components/MainCard/MainCard";

const Statistics = () => {
  const { id } = useParams();

  return (
    <div>
      <MainCard
        title={"Note For Reviewer"}
        data={`Here We Can Search For ${id}`}
      />
    </div>
  );
};

export default Statistics;
