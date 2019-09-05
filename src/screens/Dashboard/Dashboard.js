import React from 'react';
import galaxy from '../../images/galaxy.svg';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
        <div className="lcars-top">
          <div className="button-holder">
            <div className="lcars-button button-1">HELIDON HOTSPOT</div>
            <div className="lcars-button button-2">HELIDON GRAALVM</div>
            <div className="lcars-button button-3">PARALLEL</div>
          </div>
          <div className="extender-x-1"></div>
          <div className="extender-x-2"></div>
        </div>
        <div className="lcars-down">
          <div className="extender-y"></div>
          <div className="galaxy">
            <div className="galaxy-map">
              <div className="grid">
                <div className="element grid-x"></div>
                <div className="element grid-x"></div>
                <div className="element grid-x"></div>
                <div className="element grid-x"></div>
                <div className="element grid-x"></div>
              </div>
              <div className="grid">
                <div className="element grid-y"></div>
                <div className="element grid-y"></div>
                <div className="element grid-y"></div>
                <div className="element grid-y"></div>
                <div className="element grid-y"></div>
              </div>
              <img src={galaxy}></img>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;
