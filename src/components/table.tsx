"use client";

import Paper from "@mui/material/Paper";
import Tables from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { DropDown } from "./dropdown";

interface PurchaseData {
  type: string;
  location: string;
  rental: string;
  ipcount: string;
  purpose: string;
  date: string;
}

const Table: React.FC = () => {
  const [tables, setTables] = useState<any>();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get<PurchaseData>("https://recruitment-api.vercel.app/get-table", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setTables(res.data);
        console.log(res.data);
      });
  }, []);

  function formatDate(dateStr: string) {
    const dateObj = new Date(dateStr);

    const months = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = dateObj.getDate();
    const month = months[dateObj.getMonth() + 1];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  }

  return (
    <div className="w-[58%] m-auto py-12 ">
      <TableContainer component={Paper} className="py-10 px-4 rounded-lg ">
        <h1 className="text-2xl">Transactions History</h1>
        <Tables aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Rental Period</TableCell>
              <TableCell align="right">Number of IP</TableCell>
              <TableCell align="right">Spesific Purpose</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables?.data.map((table: any, i: any) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {table?.type}
                </TableCell>
                <TableCell align="right">{table?.location}</TableCell>
                <TableCell align="right">{table?.rental}</TableCell>
                <TableCell align="right">{table?.ipcount}</TableCell>
                <TableCell align="right">{table?.purpose}</TableCell>
                <TableCell align="right">{formatDate(table?.date)}</TableCell>
                <TableCell align="right">
                  <DropDown data={table} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Tables>
      </TableContainer>
    </div>
  );
};
export default Table;
