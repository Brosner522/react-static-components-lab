import React, { Component } from 'react';
import CatComponent from `./CatComponent.js`
import {GraceHopperQuoteComponent} from `./GraceHopperQuoteComponent.js`
import MouseComponent from `./MouseComponent.js`



export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
        <CatComponent />
        <GraceHopperQuotesComponent />
        <MouseComponent />
      </div>
    );
  }
}
