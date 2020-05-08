import React from 'react';

const Apps = ({apps, selected, loading, error, handleClick}) => (
  loading ?
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div> :
    error ?
      error :
      apps.length ?
        <div>
          <ul className="list-group apps">
            {apps.map((app, index) => {
              return (
                <li className={`list-group-item ${index === selected ? 'active' : ''}`}
                    key={app.id}
                    onClick={() => handleClick(index)}
                >
                  {app.name}
                </li>
              )
            })}
          </ul>
        </div> :
        <div>No data</div>
);

export default Apps;
