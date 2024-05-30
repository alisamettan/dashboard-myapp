"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export interface InfoData {
  expireTime: string;
  lastChargeAmount: number;
  lastCharge: string;
  totalDataUsage: number;
  dailyUsage: number;
}

const Info: React.FC = () => {
  const [info, setInfo] = useState<InfoData | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    axios
      .get<InfoData>("https://recruitment-api.vercel.app/get-info", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.error("Error fetching info:", error);
      });
  }, [token]);

  function formatNumber(number: number): string {
    return new Intl.NumberFormat("de-DE").format(number);
  }

  return (
    <div className="flex m-auto w-[58%] gap-4 pt-12 border-t-2 border-gray-400">
      {info && (
        <>
          <div className="flex flex-col bg-blue-200 py-6 px-6 rounded-md">
            <h5>Subscription expires on</h5>
            <h2 className="text-2xl">{info.expireTime}</h2>
          </div>
          <div className="flex flex-col bg-blue-200 py-6 px-6 rounded-md">
            <h5>Last charge</h5>
            <h2 className="text-2xl">
              {info.lastChargeAmount}{" "}
              <span className="text-sm">{info.lastCharge}</span>
            </h2>
          </div>
          <div className="flex flex-col bg-blue-200 py-6 px-6 rounded-md">
            <h5>Total Usage Data</h5>
            <h2 className="text-2xl">{formatNumber(info.totalDataUsage)} GB</h2>
          </div>
          <div className="flex flex-col bg-blue-200 py-6 px-6 rounded-md">
            <h5>Daily Usage Data</h5>
            <h2 className="text-2xl">{formatNumber(info.dailyUsage)} GB</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
