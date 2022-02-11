import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import latest from "../api/latest.json";
import colorLevels from "../assets/colorLevels.json";

type Latest = typeof latest;
const topoJson = require("../assets/japan.topojson");

export type Props = {
  setTooltipContent: React.Dispatch<React.SetStateAction<string>>;
  latestData: Latest;
};
const GetColorCode = (newlyConfirmed: number): string => {
  const colorCode = colorLevels.find(
    (x) => x.min <= newlyConfirmed && newlyConfirmed <= x.max
  )?.color;
  return colorCode || "#D6D6DA";
};
const MapChart: React.VFC<Props> = (props) => {
  return (
    <div data-tip="">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1600,
          center: [136.0, 35.6],
        }}
        width="800"
        height="800"
      >
        <Geographies geography={topoJson}>
          {({ geographies }: { geographies: any }) =>
            geographies.map(
              (geo: {
                properties: { nam_ja: any; id: any };
                rsmKey: React.Key | null | undefined;
              }) => {
                const newlyConfirmed = props.latestData.prefectures?.find(
                  (x) => x.name_ja === geo.properties.nam_ja
                )?.newlyConfirmed;

                const colorCode = newlyConfirmed
                  ? GetColorCode(newlyConfirmed)
                  : "#D6D6DA";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      props.setTooltipContent(
                        `${geo.properties.nam_ja} - 感染者数: ${newlyConfirmed}人`
                      );
                    }}
                    onMouseLeave={() => {
                      props.setTooltipContent("");
                    }}
                    fill={colorCode}
                    storke="#EAEAEC"
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                );
              }
            )
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
