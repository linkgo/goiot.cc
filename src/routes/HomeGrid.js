import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import '../components/home-grid/common.less';
import Nav from '../components/home-grid/Nav';
import Banner from '../components/home-grid/Banner';
import Content5 from '../components/home-grid/Content5';
import Content2 from '../components/home-grid/Content2';
import Content4 from '../components/home-grid/Content4';
import Footer from '../components/home-grid/Footer';


function homeGrid(props){
	const { banner_0, nav_1, content_2, content_4, content_5, content_6, footer_1 } = props.homeGrid;

	return (
		<div className="page-wrap" style={{ width: '100%', height: '100%'}}>
			<Nav { ...nav_1 } />
			<Banner { ...banner_0 } />
			<Content5 { ...content_5 } />
			<Content2 { ...content_2 } />
			<Content4 { ...content_4 } />
			<Footer { ...footer_1 } />
		</div>
	)
}

function mapStateToProps({ homeGrid }){
	return { homeGrid }
}
export default connect(mapStateToProps)(homeGrid);

