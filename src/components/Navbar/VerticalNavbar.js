/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { MineNav } from "./styledNav";
import { IoIosArrowForward } from "react-icons/io";
import { BaseButton } from "../UI/Button/MPButton";

export const VerticalNavbar = () => {
  return (
    <nav style={{ height: "100%" }}>
      <MineNav position="fixed">
        <BaseButton
          color="white"
          background="#ff4646"
          className="rounded-circle font-weight-bold p-2"
        >
          <IoIosArrowForward />
        </BaseButton>
      </MineNav>
    </nav>
  );
};

export default VerticalNavbar;
