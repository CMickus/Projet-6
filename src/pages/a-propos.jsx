import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

export class Apropos extends React.Component {
    render() {
      return <a href="/Root">Bonjour, {this.props.name}</a>;
    }
  }

export default {Apropos}