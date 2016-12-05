import React, { Component, PropTypes } from 'react';
import { Row, Col, Menu } from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import CustomOverPack from './CustomOverPack';

import './content5.less';

function content5(props){
	const getBlockChildren = data =>
    Object.keys(data).filter(key => key.match('block')).map((key) => {
      const item = data[key];
      return (<li key={key}>
      	<div className="left-table">
	        <div className="left-table-cell"><img src={item.img} width="100%" /></div>
	        <div className="left-table-cell">
	        	<h2>{item.title}</h2>
	        	<p>{item.content}</p>
	        </div>
        </div>
      </li>);
    });
  const { title, img } = props.dataSource;
    
	return (
		<CustomOverPack
			hideProps={{ img: { reverse: true } }}
		>
			<Row
				className="content5-wrap"
			>
				<Col xs={{ span: 24 }} sm={{ span: 12 }}
					className="content5-table"
				>
					<QueueAnim
	          className="content5-left"
	          key="text"
	          type="left"
	          leaveReverse
	          ease={['easeOutCubic', 'easeInCubic']}
	          >
						<h1 key="h1">{title.title}</h1>
	          <p key="p">{title.content}</p>
	          <QueueAnim component="ul" key="ul" type="left">
	          	{ getBlockChildren(props.dataSource) }
	          </QueueAnim>
					</QueueAnim>
				</Col>
				<Col xs={{ span: 24 }} sm={{ span: 12 }}
					className="content5-table"
				>
					<TweenOne
	          className="content5-right"
	          key="img"
	          animation={{ x: 30, opacity: 0, type: 'from' }}
	        >
						<img src={img.img} width="100%" />
					</TweenOne>	
				</Col>
			</Row>
		</CustomOverPack>
	)
}

export default content5;