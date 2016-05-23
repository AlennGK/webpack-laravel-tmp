import React from 'react';
import styles from './_javatest.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        This is style and HTML given from _test.js & _javatest.css (resources/assets/js/*)
      </div>
    );
  }
}