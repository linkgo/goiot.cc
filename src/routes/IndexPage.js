import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1>Welcome to dva!</h1>
      <hr />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="/">Getting Started</a></li>
        <li><a href="/home">Home</a></li>
        <li><a href="/home-motion">Home Motion</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/sidebar">Sidebar</a></li>
        <li><a href="/lab">Lab</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
