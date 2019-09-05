import React, { Component } from 'react';
import './Galaxy.css'
import galaxy from '../../images/galaxy.svg';

class Galaxy extends Component {
    render() {
        return (
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
        );
    }
}

export default Galaxy;