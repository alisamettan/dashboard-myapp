"use client";

import { LineChart } from "@mui/x-charts";
import React from "react";

const Graphic: React.FC = () => {
  return (
    <div
      className="m-auto w-[58%] bg-slate-100 my-20 rounded-md"
      style={{ overflowX: "auto" }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "-30px",
            top: "50%",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        >
          GB
        </div>
        <h1 className="text-lg p-4 font-bold">Data usage per network </h1>
        <LineChart
          xAxis={[
            {
              data: [0, 1, 2, 3, 4, 5, 6],
              valueFormatter: (value: any) =>
                ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"][value],
            },
          ]}
          series={[
            {
              data: [4, 5, 7, 6, 10, 9, 6],
            },
          ]}
          width={800}
          height={500}
        />
      </div>
    </div>
  );
};
export default Graphic;
