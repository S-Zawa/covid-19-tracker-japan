import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const topoJson = require("../assets/japan.topojson");

const MapChart = ({ setTooltipContent }: { setTooltipContent: any }) => {
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
                    const { nam_ja, id } = geo.properties;
                    setTooltipContent(`${nam_ja} — ${id}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
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
