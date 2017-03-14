import React, {Component, PropTypes} from 'react';
import {Col, Menu, Row} from 'antd';
import TweenOne, {TweenOneGroup} from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import CustomOverPack from './CustomOverPack';
import './content4.less';

function content4(props) {
  const {title, content} = props.dataSource.title;
  const getChildrenToRender = data => Object
    .keys(data)
    .filter(key => key.match('block'))
    .map((key) => {
      const item = data[key];
      return (
        <li key={key}>
          <div className="content-wrapper">
            <span><img src={item.img} height="100%"/></span>
            <p>{item.content}</p>
          </div>
        </li>
      );
    });

  const getEnterAnim = (e) => {
    const index = e.index;
    const delay = index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return {opacity: 0, type: 'from', delay, y: '+=30'};
  };
  return (
    <Row className="content4-wrap">
      <Col xs={{
          span: 24
        }} className="content4-title">
        <QueueAnim
          key="text"
          type="bottom"
          leaveReverse
          delay={300}
          ease={['easeOutCubic', 'easeInCubic']}>
          { props.activeSection == 3 ? [
            <h1 key="h1">{ title }</h1>,
            <p key="p">{ content }</p>
          ] : null }
        </QueueAnim>
      </Col>
      <Col xs={{
          span: 24
        }}>
        <QueueAnim
          className="content4-list-wrapper"
          key="ul"
          component="ul"
          type="right"
          delay={100}
          leaveReverse
          ease={['easeOutCubic', 'easeInCubic']}>
          { props.activeSection == 3 ? 
            getChildrenToRender(props.dataSource) : null }
        </QueueAnim>
        
      </Col>
    </Row>
  )
}

export default content4;
