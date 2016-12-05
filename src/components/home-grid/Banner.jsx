import React, { Component, PropTypes } from 'react';
import { Row, Col, Menu } from 'antd';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import CustomOverPack from './CustomOverPack';
import styles from './Banner.less';

function Banner(props){
	const { top, logo, title, content1, content2, button, bgImg } = props.dataSource.block1;
	const animation = { bottom: '5%', yoyo: true, repeat: -1, duration: 1000 };
	return (
		<CustomOverPack
			playScale={[0.3, 0.1]}
			className="banner-wrap"
			style={{ backgroundImage: `url(${bgImg})`,  }}
		>
			<Row type="flex" justify="space-around" align="middle" 
				className="main-wrap banner-content">
				<Col span={12}
				>
					<QueueAnim 
						type={['bottom', 'top']}
          	delay={300}
					>
						{logo ? <span className="logo" key="logo"><img width="100%" src={logo} /></span> : null}
	          {title ? <h1 key="h1">{title}</h1> : null}
	          <div className="text" key="text">
	            <p key="content1">{content1}</p>
	            <p key="content2">{content2}</p>
	          </div>
	          <Button className="ctr-btn" type="ghost" key="button">
	          	{button}
	          	<span style={{fontSize: "8px", color: "#a51616"}}>&nbsp;alpha</span>
	          </Button>
          </QueueAnim>
				</Col>
        <TweenOne 
        	className="banner0-icon"
        	animation={ animation }
        >
        	<Icon type="down" />
        </TweenOne>
			</Row>
		</CustomOverPack>
	)
}

export default Banner;

