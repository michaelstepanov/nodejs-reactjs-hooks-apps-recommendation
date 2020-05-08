import React, {useContext} from 'react';
import {GlobalContext} from "../../contexts/GlobalState";
import { selectApp } from "../../actions/apps";
import Apps from "./Apps";

const AppsContainer = () => {
  const {state, dispatch} = useContext(GlobalContext);

  return (
    <Apps
      {...state}
      handleClick={index => dispatch(selectApp(index))}
    />
  );
};

export default AppsContainer;
