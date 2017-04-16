import React from 'react';
import { injectIntl } from 'react-intl';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import {Col, Menu, Row} from 'antd';
import CustomOverPack from './CustomOverPack';
import './footer.less';
import { defineMessagesForModule } from '../../locales';

const messages = defineMessagesForModule('home');

function footer(props) {
  const { formatMessage } = props.intl;
  const getLiChildren = () => Object
    .keys(props.dataSource)
    .filter(key => key.match('block'))
    .map((key, i) => {
      const data = props.dataSource[key];
      const links = data
        .contentLink
        .split(/\n/)
        .filter(item => item);
      const content = data
        .content
        .split(/\n/)
        .filter(item => item)
        .map((item, ii) => {
          const cItem = item.trim();
          const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
          
          return (
            <li className={isImg
                ? 'icon'
                : ''} key={ii}>
              <a href={links[ii]} target="_blank">
                {
                  isImg
                    ? <img src={cItem} width="100%"/>
                    : formatMessage(messages[cItem])
                }
              </a>
            </li>
          );
        });
      return (
        <Col span={4} key={`footer${i}`} className="footer-list">
          <h2>{ formatMessage(messages[data.title]) }</h2>
          <QueueAnim component="ul" type="bottom">
            {content}
          </QueueAnim>
        </Col>
      );
    });

  const logoContent = props.dataSource.logo;
  const {content} = props.dataSource.copyright;
  return (
    <CustomOverPack
      playScale={0.2}
      hideProps={{
        copyright: {
          reverse: true
        }
      }}
      style={{
        'height' : '279px'
      }}>
      <Row type="flex" justify="space-around" align="top" className="footer-wrap">
        <Col span={4} key="footer1" className="footer-logo">
          <p className="logo"><img src={logoContent.logo} width="100%"/></p>
          <p>{logoContent.content}</p>
        </Col>
        {getLiChildren()}
        <Col span={24}>
          <TweenOne
            animation={{
              y: '+=30',
              opacity: 0,
              type: 'from'
            }}
            key="copyright"
            className="copyright">
            <p dangerouslySetInnerHTML={{
                __html: content
              }}/>
          </TweenOne>
        </Col>
      </Row>
    </CustomOverPack>
  )
}

export default injectIntl(footer);
