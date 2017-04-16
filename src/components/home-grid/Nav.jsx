import React, {Component, PropTypes} from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { defineMessagesForModule } from '../../locales';
import {Col, Icon, Menu, Row} from 'antd';
import TweenOne from 'rc-tween-one';
import ScrollAnim from 'rc-scroll-anim';

import styles from './nav.less';
const Item = Menu.Item;
const Link = ScrollAnim.Link;
const messages = defineMessagesForModule('home');


function Nav(props) {
  const { formatMessage } = props.intl;
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
        sm={{ span: 8, offset: 10 }}>
        <TweenOne animation={{ ...animation, x: 30 }}>
          <Row>
            <Col xs={{ span: 6 }}>
              <span className="nav-item"><Link to="why"><Icon type="question-circle" /> { formatMessage(messages.why) }</Link></span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item"><Link to="features"><Icon type="star" /> { formatMessage(messages.features) }</Link></span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item"><Link to="explore"><Icon type="cloud" /> { formatMessage(messages.features) }</Link></span>
            </Col>
            <Col xs={{ span: 6 }}>
              <span className="nav-item-disabled"><Icon type="tag" /> { formatMessage(messages.price) }</span>
            </Col>
          </Row>
        </TweenOne>
      </Col>
    </Row>
  )

}

export default injectIntl(Nav);
