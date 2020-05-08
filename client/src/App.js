import React from 'react';
import './App.css';
import {GlobalProvider} from "./contexts/GlobalState";
import AppInfoContainer from "./components/AppInfo/AppInfoContainer";
import AppFilterFormContainer from "./components/AppFilterForm/AppFilterFormContainer";
import AppsContainer from "./components/Apps/AppsContainer";

function App() {
  return (
    <GlobalProvider>
      <div>
        <div className="container-fluid">
          <div className="page-header text-center mt-4 mb-4">
            <h1>Apps Recommendation</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <h2>Filter</h2>

              <AppFilterFormContainer />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-4">
              <h2>Apps</h2>

              <AppsContainer />
            </div>
            <div className="col-12 col-md-12 col-lg-5 mt-4">
              <h2>App Info</h2>

              <AppInfoContainer />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
