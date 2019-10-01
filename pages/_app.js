import React from 'react';
import App from 'next/app';
import getSpacex from '../helper/getSpacex';
import LaunchContext from '../components/LaunchContext';
import '../styles/global.scss';

export default class MyApp extends App {
  static async getInitialProps(appContext) {
    let appProps = await super.getInitialProps(appContext);

    if (typeof window === 'undefined') {
      try {
        appProps.launches = await getSpacex('launches/past');
      } catch (e) {
        appProps.error = 'Error fetching data';
      }
    }

    return { ...appProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      launches: props.launches || null,
      error: props.error || null
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LaunchContext.Provider
        value={{
          launches: this.state.launches,
          error: this.state.error
        }}
      >
        <Component {...pageProps} />
      </LaunchContext.Provider>
    );
  }
}
