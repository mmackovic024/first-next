import React from 'react';
import App from 'next/app';
import LaunchContext from '../components/LaunchContext';
import '../styles/global.scss';

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      error: '',
      launches: []
    };
  }

  componentDidMount = () => {
    if (this.state.launches.length === 0) this.getAll();
  };

  getAll = () => {
    this.setState({ pending: true });
    fetch('https://api.spacexdata.com/v3/launches/past')
      .then(res => res.json())
      .then(json => this.setState({ pending: false, launches: json }))
      .catch(err => this.setState({ pending: false, error: err }));
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LaunchContext.Provider
        value={{
          pending: this.state.pending,
          error: this.state.error,
          launches: this.state.launches
        }}
      >
        <Component {...pageProps} />
      </LaunchContext.Provider>
    );
  }
}
