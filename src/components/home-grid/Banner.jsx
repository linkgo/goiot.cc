import React, {Component, PropTypes} from 'react';
import {Col, Menu, Row} from 'antd';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import CustomOverPack from './CustomOverPack';
import styles from './banner.less';
import Particles from './Particles';

function Banner(props) {
  const {
    button,
    buttonCommunity,
    bgImg,
    content1,
    content2,
    logo,
    title,
    top
  } = props.dataSource.block1;
  const animation = {
    bottom  : '5%',
    duration: 1000,
    repeat  : -1,
    yoyo    : true
  };
  return (
      <Row
      	style={{
        	background: "#14191c"
      	}}
        type="flex"
        justify="center"
        align="middle"
        className="main-wrap banner-content">
				<Particles />
        <Col span={12}>
          <QueueAnim type={['bottom', 'top']} delay={300}>
            {
              logo
                ? <span className="logo" key="logo"><img width="100%" src={logo}/></span>
                : null
            }
            {
              title
                ? <h1 key="h1">{title}</h1>
                : null
            }
            <div className="text" key="text">
              <p key="content1">{content1}</p>
              <p key="content2">{content2}</p>
            </div>
            <Button className="ctr-btn" type="ghost" key="button" onClick={() => {window.location.href = '/discovery'}}>
              {button}
              <span
                style={{
                  fontSize: "8px",
                  color: "#a51616"
                }}>&nbsp;alpha</span>
            </Button>
            <Button className="ctr-btn" type="ghost" key="buttonCommunity" onClick={() => {window.location.href = '//bb.goiot.cc'}}>
              {buttonCommunity}
            </Button>
          </QueueAnim>
        </Col>
        <TweenOne className="banner0-icon" animation={animation}>
          <Icon type="down"/>
        </TweenOne>
      </Row>
  )
}

export default Banner;
