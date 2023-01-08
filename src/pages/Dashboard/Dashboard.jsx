import React from "react";
import DataTable from "../../components/DataTable/DataTable";
import DashGrid from "./components/DashGrid/DashGrid";
import MainCard from "../../components/MainCard/MainCard";
import TopCards from "./components/TopCards/TopCards";
import "./Dashboard.css";
import AriaChart from "./components/AriaChart/AriaChart";
import MapChart from "./components/MapChart/MapChart";

const Dashboard = ({ data }) => {
  const tableHead = [
    "Agents Commissions ID",
    "Commission Agent",
    "Commission Infs",
  ];
  const tableData = Object.keys(data.agentsCommissions).map((row) => {
    return {
      id: row,
      ...data.agentsCommissions[row],
    };
  });

  const series = tableData.map((item) => {
    return {
      name: item.id,
      data: [item.commissionAgent, item.commissionInfs],
    };
  });

  return (
    <div>
      <TopCards />
      <DashGrid>
        <MainCard title={"Sales Statistics"}>
          <AriaChart data={series} />
        </MainCard>
        <MainCard>
          <MapChart />
        </MainCard>
        <DataTable tableHead={tableHead} data={tableData} />
        <MainCard title={"Description"} data={data.description} />
      </DashGrid>
    </div>
  );
};

export default Dashboard;
