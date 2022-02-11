import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import ReactTooltip from "react-tooltip";
import { fetchLatestData } from "../api";
import latest from "../api/latest.json";
import MapChart from "../components/MapChart";

type Latest = typeof latest;

const Home = () => {
  const [content, setContent] = useState("");
  const [latestData, setLatestData] = useState<Latest>({} as Latest);

  useEffect(() => {
    async function fetchLatestDataAsync() {
      setLatestData((await fetchLatestData()) as Latest);
    }
    fetchLatestDataAsync();
  }, []);
  return (
    <div>
      <div>
        最終更新日時:{dayjs(latestData.updated).format("YYYY/MM/DD HH:mm:ss")}
      </div>
      <MapChart setTooltipContent={setContent} latestData={latestData} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Home;
