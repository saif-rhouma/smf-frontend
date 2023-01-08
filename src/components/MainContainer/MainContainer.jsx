import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import httpClient from "../../core/httpClients/httpClient";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Influencers from "../../pages/Influencers/Influencers";
import Statistics from "../../pages/Statistics/Statistics";
import AppHeader from "../AppHeader/AppHeader";
import PageLoader from "../PageLoader/PageLoader";
import "./MainContainer.css";

const MainContainer = () => {
  const [onLoadPage, setOnLoadPage] = useState(true);
  const [fetchResult, setFetchResult] = useState();
  useEffect(() => {
    const getKiabiData = async () => {
      const response = await httpClient({
        method: "post",
        url: "",
        data: {
          storeId: "-MUNuxd-1azwBHl-1v5E",
        },
      });

      if (response.status < 400) {
        setOnLoadPage(false);
        setFetchResult(response.data);
      }
    };
    getKiabiData();
  }, []);

  if (onLoadPage) {
    return <PageLoader />;
  }
  return (
    <div className="MainContainer">
      <AppHeader img={fetchResult.pic} name={fetchResult.name} />
      <Routes>
        <Route path="/" element={<Dashboard data={fetchResult} />} />
        <Route path="/statistics/:id" element={<Statistics />} />
        <Route path="/influencers" element={<Influencers />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
