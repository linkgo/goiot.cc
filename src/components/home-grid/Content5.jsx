import React, {Component, PropTypes} from 'react';
import {Col, Menu, Row} from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import CustomOverPack from './CustomOverPack';

import './content5.less';

function content5(props) {
  const getBlockChildren = data => Object
    .keys(data)
    .filter(key => key.match('block'))
    .map((key) => {
      const item = data[key];
      return (
        <li key={key}>
          <div className="left-table">
            <div className="left-table-cell"><img src={item.img} width="100%"/></div>
            <div className="left-table-cell">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        </li>
      );
    });
  const {title, img} = props.dataSource;

  return (
    <Row className="content5-wrap">
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        className="content5-table">
        <QueueAnim
          className="content5-left"
          key="text"
          type="left"
          leaveReverse
          ease={['easeOutCubic', 'easeInCubic']}>
          { props.activeSection==1 ? [
            <h1 key="h1">{title.title}</h1>,
            <p key="p">{title.content}</p>,
            <QueueAnim component="ul" key="ul" type="left">
              {getBlockChildren(props.dataSource)}
            </QueueAnim>
          ] : null }
        </QueueAnim>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        className="content5-table">
        <QueueAnim
          className="content5-right"
          key="text"
          type="right"
          leaveReverse
          delay={300}
          ease={['easeOutCubic', 'easeInCubic']}>
            { props.activeSection == 1 ? [<img key="imgi" src={img.img} width="100%"/>] : null }
        </QueueAnim>
      </Col>
    </Row>
  )
}

export default content5;
