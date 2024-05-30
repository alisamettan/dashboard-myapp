import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

interface DropDownProps {
  data: any;
}

export const DropDown: React.FC<DropDownProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShowId = () => {
    setAnchorEl(null);
    console.log("Number of IP: ", props.data.ipcount);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="text-sm"
      >
        Actions
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleShowId}
      >
        <MenuItem onClick={handleShowId}>Processing</MenuItem>
        <MenuItem onClick={handleShowId}>In Progress</MenuItem>
        <MenuItem onClick={handleShowId}>Completed</MenuItem>
      </Menu>
    </div>
  );
};
