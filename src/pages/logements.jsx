import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';

export class Logement extends React.Component {
    render() {
      return <a href="/Root">Bonjour, {this.props.name}</a>;
    }
  }

export default {Logement}