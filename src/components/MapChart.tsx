import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import latest from "../api/latest.json";

type Latest = typeof latest;
const topoJson = require("../assets/japan.topojson");

export type Props = {
  setTooltipContent: React.Dispatch<React.SetStateAction<string>>;
  latestData: Latest;
};
const MapChart: React.VFC<Props> = (props) => {
  return (
    <div data-tip="">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1200,
          center: [136.0, 35.6],
        }}
      >
        <Geographies geography={topoJson}>
          {({ geographies }: { geographies: any }) =>
            geographies.map(
              (geo: {
                rsmKey: React.Key | null | undefined;
                properties: { nam_ja: any; id: any };
              }) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { nam_ja } = geo.properties;
                    const newlyConfirmed = props.latestData.prefectures.find(
                      (x) => x.name_ja === nam_ja
                    )?.newlyConfirmed;
                    props.setTooltipContent(
                      `${nam_ja} - 感染者数: ${newlyConfirmed}人`
                    );
                  }}
                  onMouseLeave={() => {
                    props.setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              )
            )
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
