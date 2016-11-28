import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import '../less/common.less';
import Nav from '../components/home-grid/Nav';
import Banner from '../components/home-grid/Banner';


function homeGrid(props){
	const { banner_0, nav_1, content_2, content_4, content_5, content_6, footer_1 } = props.homeGrid;

	return (
		<div className="page-wrap" style={{ width: '100%', height: '100%'}}>
			<Nav { ...nav_1 } />
			<Banner { ...banner_0 } />
		</div>
	)
}

function mapStateToProps({ homeGrid }){
	return { homeGrid }
}
export default connect(mapStateToProps)(homeGrid);

