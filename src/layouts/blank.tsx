import React from "react";
// Redux Selector / Action
import { useSelector } from "react-redux";


// Import selectors & action from setting store
import * as SettingSelector from "../store/setting/selectors";
import SettingOffCanvas from "@/components/setting/SettingOffCanvas";
import { Button } from "react-bootstrap";

const Blank = ({ children }: any) => {
  const pageLayout = useSelector(SettingSelector.page_layout);
  return (
    <>
      <div>{children}</div>
      <SettingOffCanvas />
    </>
  );
};
export default Blank;
