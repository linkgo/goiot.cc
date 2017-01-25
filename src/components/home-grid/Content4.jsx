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
    <CustomOverPack
      hideProps={{
        h1: {
          reverse: true
        },
        p: {
          reverse: true
        }
      }}>
      <Row className="content4-wrap">
        <Col xs={{
            span: 24
          }} className="content4-title">
          <TweenOne
            animation={{
              y: '+=30',
              opacity: 0,
              type: 'from'
            }}
            component="h1"
            key="h1"
            reverseDelay={300}>
            {title}
          </TweenOne>
          <TweenOne
            animation={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              delay: 50
            }}
            component="p"
            key="p"
            reverseDelay={200}>
            {content}
          </TweenOne>
        </Col>
        <Col xs={{
            span: 24
          }}>
          <TweenOneGroup
            className="content4-list-wrapper"
            component="ul"
            key="ul"
            enter={getEnterAnim}
            leave={{
              y: '+=30',
              opacity: 0
            }}>
            {getChildrenToRender(props.dataSource)}
          </TweenOneGroup>
        </Col>
      </Row>
    </CustomOverPack>
  )
}

export default content4;
