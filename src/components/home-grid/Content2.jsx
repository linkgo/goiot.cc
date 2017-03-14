import React, {Component, PropTypes} from 'react';
import {Col, Menu, Row} from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import CustomOverPack from './CustomOverPack';
import './content2.less';

const Element = ScrollAnim.Element;

function Content2(props) {
  const {title, content} = props.dataSource.title;
  const titleAnim = {
    opacity: 0,
    type   : 'from',
    y      : '+=30'
  };

  const childrenSource = Object
    .keys(props.dataSource)
    .filter(key => key.match('block'))
    .map((key, i) => {
      const item = props.dataSource[key];
      return (
        <Col
          xs={{ span: 12 }}
          sm={{ span: 8 }}
          className="content2-list-table"
          key={`col${i}`}>
          <QueueAnim
            className="content2-list-cell"
            delay={100}
            leaveReverse
            type="left"
            key="img">
            { props.activeSection == 2 ? [
              <img key="img" src={item.iconImg}/>
            ] : null }
          </QueueAnim>
          <QueueAnim
            className="content2-list-cell"
            delay={100}
            leaveReverse
            key="text">
            { props.activeSection == 2 ? [
              <h2 key="h2">{item.title}</h2>,
              <p key="p">{item.content}</p>
            ] : null }
            
          </QueueAnim>

        </Col>
      )
    });

  return (
    <Row className="content2-wrap">
      <Col xs={{ span: 24 }} className="title2">
        <QueueAnim
          key="text"
          type="bottom"
          leaveReverse
          delay={200}
          ease={['easeOutCubic', 'easeInCubic']}>
          { props.activeSection == 2 ? [
            <h1 key="h1">{ title }</h1>,
            <p key="p">{ content }</p>
          ] : null }
        </QueueAnim>
      </Col>
      <Col xs={{ span: 24 }}>
        <Row className="content2-list">
          {childrenSource}
        </Row>
      </Col>
    </Row>
  )
}

export default Content2;

