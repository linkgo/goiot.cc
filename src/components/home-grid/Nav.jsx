import React, {Component, PropTypes} from 'react';
import {Col, Menu, Row} from 'antd';
import TweenOne from 'rc-tween-one';

import styles from './nav.less';
const Item = Menu.Item;

function Nav(props) {
  const {logo, menu1, menu2, menu3, menu4} = props.dataSource.block1;
  const animation = {
    delay  : 100,
    ease   : 'easeOutQuad',
    opacity: 0,
    type   : 'from',
    x      : -30
  };
  return (

    <Row className="nav-wrap">
      <Col xs={{ span: 24 }} sm={{ span: 4 }}>
        <TweenOne className="logo-wrap" animation={animation}>
          <img className="logo" src={logo}/>
        </TweenOne>
      </Col>
      <Col
        xs={{ span: 24 }}
        st={{ span: 8, offset: 10 }}>
        <TweenOne animation={{ ...animation, x: 30 }}>
          <Row>
            <Col xs={{ span: 6 }}>
              <span className="nav-item">{menu1}</span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item">{menu2}</span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item">{menu3}</span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item">{menu4}</span>
            </Col>
          </Row>
        </TweenOne>
      </Col>

    </Row>
  // </TweenOne>
  )

}

export default Nav;
