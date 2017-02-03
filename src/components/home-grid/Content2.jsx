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
          <TweenOne
            className="content2-list-cell"
            animation={{
              x: '-=10',
              opacity: 0,
              type: 'from'
            }}
            key="img">
            <img key="img" src={item.iconImg}/>
          </TweenOne>
          <QueueAnim
            className="content2-list-cell"
            delay={100}
            leaveReverse
            key="text">
            <h2 key="h2">{item.title}</h2>
            <p key="p">{item.content}</p>
          </QueueAnim>

        </Col>
      )
    });

  return (
    <CustomOverPack
      hideProps={{
        h1: {
          reverse: true
        },
        p: {
          reverse: true
        }
      }} id="features">
      <Row className="content2-wrap">
        <Col xs={{ span: 24 }} className="title2">
          <TweenOne key="h1" animation={titleAnim} component="h1">
            {title}
          </TweenOne>
          <TweenOne key="p" animation={titleAnim} component="p">
            {content}
          </TweenOne>
        </Col>
        <Col xs={{ span: 24 }}>
          <Row className="content2-list">
            {childrenSource}
          </Row>
        </Col>
      </Row>
    </CustomOverPack>
  )
}

export default Content2;
