"use client";

import { useState } from "react";
import { ImCross } from "react-icons/im";
import Info from "../info";
import Graphic from "../graphic";
import Table from "../table";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<any>(true);
  const [selectedTab, setSelectedTab] = useState<string>("dashboard");

  const showComponents = () => {
    setIsOpen(true);
    setSelectedTab("dashboard");
  };
  const hideComponents = () => {
    setIsOpen(false);
    setSelectedTab("proxies");
  };

  return (
    <>
      <div className="w-[58%] m-auto flex flex-col gap-16">
        <div className="flex gap-36 justify-center items-center mt-14 py-4  rounded-sm bg-blue-200">
          <h5>
            Special Offer! Get Complete Free Proxy 10 MB Proxy,without credit
            card.<span className="underline">Start Free Trial</span>
          </h5>
          <ImCross className="h-4 w-4 text-gray-700" />
        </div>
        <h1 className="text-4xl font-semibold">
          Proxies & Scraping Infrastructure
        </h1>

        <div className="flex gap-6 text-lg">
          <h2
            onClick={hideComponents}
            className={
              selectedTab === "proxies"
                ? "text-blue-500 underline"
                : "cursor-pointer"
            }
          >
            My Proxies
          </h2>
          <h2
            className={
              selectedTab === "dashboard"
                ? "text-blue-500 underline"
                : "cursor-pointer"
            }
            onClick={showComponents}
          >
            Dashboard
          </h2>
        </div>
      </div>
      {isOpen && (
        <div>
          <Info />
          <Graphic />
          <Table />
        </div>
      )}
    </>
  );
};

export default NavBar;
