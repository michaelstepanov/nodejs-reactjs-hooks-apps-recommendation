import React from 'react';

const AppInfo = ({app, loading, error}) => (
  loading ?
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div> :
    error ?
      error :
      app ?
        <div className="card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img className="app-icon" src={app.icon} alt="App Icon"/>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href={app.url} target="_blank">{app.name}</a>
              </h4>
              <p className="card-text">
                <b>Category</b>: {app.category}<br/>
                <b>External ID</b>: {app.external_id}<br/>
                <b>Rating</b>: {app.rating}<br/>
                <b>Installs</b>: {app.install_count}<br/>
                <b>Publisher</b>: {app.publisher}<br/>
                <b>Min Age</b>: {app.min_age}
              </p>
            </div>
          </div>
          <div className="card-horizontal">
            <div className="card-body pt-0">
              <p className="card-text" dangerouslySetInnerHTML={{__html: app.description}} />
            </div>
          </div>
        </div> :
        <div>No data</div>
);

export default AppInfo;
