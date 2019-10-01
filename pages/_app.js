import React from 'react';
import App from 'next/app';
import LaunchContext from '../components/LaunchContext';
import '../styles/global.scss';

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      launches: []
    };
  }

  setLaunches = data => this.setState({ ...data });

  render() {
    const { Component, pageProps } = this.props;
    // console.log('_APP STARTED');
    return (
      <LaunchContext.Provider
        value={{
          launches: this.state.launches,
          setLaunches: this.setLaunches
        }}
      >
        <Component {...pageProps} />
      </LaunchContext.Provider>
    );
  }
}
