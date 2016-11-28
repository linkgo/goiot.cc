import React, { Component, PropTypes } from 'react';
import styles from './Banner.less';
function Banner(props){
	const { top, logo, title, content1, content2, button, bgImg } = props.dataSource.block1;

	return (
		<div className="banner-wrap" style={{ backgroundImage: `url(${bgImg})` }}>

		</div>
	)
}

export default Banner;

