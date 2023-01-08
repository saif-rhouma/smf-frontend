import React from "react";
import ReactApexChart from "react-apexcharts";
import "./AriaChart.css";
const AriaChart = ({ data }) => {
  const options = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div className="AriaChart">
      <ReactApexChart options={options} series={data} height={350} />
    </div>
  );
};

export default AriaChart;
