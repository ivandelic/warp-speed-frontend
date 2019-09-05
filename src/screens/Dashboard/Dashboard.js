import React from 'react';
import Galaxy from '../../components/Map/Galaxy'
import Button from '../../components/Commands/Button'
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
        <div className="lcars-top">
          <div className="button-holder">
            <Button style="button-1" text="HELIDON HOTSPOT"></Button>
            <Button style="button-2" text="HELIDON GRAALVM"></Button>
            <Button style="button-3" text="PARALLEL"></Button>
          </div>
          <div className="extender-x-1"></div>
          <div className="extender-x-2"></div>
        </div>
        <div className="lcars-down">
          <div className="extender-y"></div>
            <Galaxy></Galaxy>
        </div>
    </div>
  );
}

export default Dashboard;
