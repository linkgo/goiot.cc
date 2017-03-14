import React, {Component, PropTypes} from 'react';
import {Col, Icon, Menu, Row} from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollAnim from 'rc-scroll-anim';

import styles from './nav.less';
const Item = Menu.Item;
const Link = ScrollAnim.Link;

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
        sm={{ span: 10, offset: 10 }}>
        <TweenOne animation={{ ...animation, x: 30 }}>
          <Row>
            <Col xs={{ span: 6 }}>
              <span className="nav-item"><a href="#why"><Icon type="question-circle" /> {menu1}</a></span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item"><a href="#features"><Icon type="star" /> {menu2}</a></span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item"><a href="#explore"><Icon type="cloud" /> {menu3}</a></span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item-disabled"><Icon type="tag" /> {menu4}</span>
            </Col>
          </Row>
        </TweenOne>
      </Col>
    </Row>
  )

}
export default Nav;


