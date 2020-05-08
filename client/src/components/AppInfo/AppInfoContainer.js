import React from 'react';
import {useContext} from "react";
import {GlobalContext} from "../../contexts/GlobalState";
import AppInfo from "./AppInfo";

const AppInfoContainer = () => {
  const {state} = useContext(GlobalContext);
  const {apps, selected} = state;

  const app = apps[selected];

  return (
    <AppInfo
      {...state}
      app={app}
    />
  );
};

export default AppInfoContainer;
