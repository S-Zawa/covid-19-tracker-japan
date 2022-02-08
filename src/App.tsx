import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { fetchLatestData } from "./api";
import latest from "./api/latest.json";
import "./App.css";
import MapChart from "./components/MapChart";
import "./styles.css";

type Latest = typeof latest;

function App() {
  const [content, setContent] = useState("");
  const [latestData, setLatestData] = useState<Latest>({} as Latest);

  useEffect(() => {
    async function fetchLatestDataAsync() {
      setLatestData((await fetchLatestData()) as Latest);
    }
    fetchLatestDataAsync();
  }, []);

  return (
    <div className="App">
      <div>
        最終更新日時:{dayjs(latestData.updated).format("YYYY/MM/DD HH:mm:ss")}
      </div>
      <MapChart setTooltipContent={setContent} latestData={latestData} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
