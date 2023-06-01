import React from "react";
import { Icons } from "../atoms/Icons";
import { Text } from "../atoms/Text";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex gap-10 align-items">
        <Icons name="bars" />
        <Text>Menu</Text>
      </div>
      <div className="flex gap-10 align-items">
        <Icons name="profile" />
        <Text>Welcome</Text>
      </div>
    </div>
  );
};
