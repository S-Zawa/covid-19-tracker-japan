import React from "react";
import MaterialTable, { Column } from "material-table";
import colorLevels from "../assets/colorLevels.json";
import JapanMap from "../components/JapanMap";
import { Grid } from "@material-ui/core";

export type ColorLevel = {
  level: number;
  min: number;
  max: number;
  color: string;
};
const columns: Column<ColorLevel>[] = [
  { title: "レベル", field: "level" },
  { title: "MIN", field: "min" },
  { title: "MAX", field: "max" },
  { title: "色", field: "color" },
];

const Home = () => {
  return (
    <div>
      <JapanMap />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={10} lg={8} sm={10}>
          <MaterialTable
            columns={columns}
            data={colorLevels}
            title="感染者数別 色凡例"
            options={{
              search: false,
              draggable: false,
              filtering: false,
              paging: false,
              sorting: false,
              padding: "dense",
              rowStyle: (rowData) => {
                return { backgroundColor: rowData.color };
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
