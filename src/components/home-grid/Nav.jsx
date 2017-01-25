import React, { Component, PropTypes } from 'react';
import { Row, Col, Menu } from 'antd';
import TweenOne from 'rc-tween-one';

import styles from './nav.less';
const Item = Menu.Item;


// class Nav extends Component {

// 	render(){
// 		return (
// 			<Row>
// 		    <Col xs={{ span: 24 }} sm={{ span: 12 }}>

// 		    </Col>
// 		    <Col xs={{ span: 24 }} sm={{ span: 6 }}>Col</Col>
// 		    <Col xs={{ span: 24 }} sm={{ span: 6 }}>Col</Col>
// 		  </Row>
//   		)
// 	}
// }

function Nav(props){
	const { logo, menu1, menu2, menu3, menu4 } = props.dataSource.block1;
	const animation = { x: -30, opacity: 0, delay: 100, type: 'from', ease: 'easeOutQuad'};	
	return (

		<Row className="nav-wrap">
	    <Col xs={{ span: 24 }} sm={{ span: 5 }}>
	    	<TweenOne 
	    		className="logo-wrap"
	    		animation={animation} 
	    	>
	    		<img className="logo" src={ logo } />
	    	</TweenOne>
	    </Col>
	    <Col xs={{ span: 24 }} sm={{ span: 12, offset: 5 }}>
	    	<TweenOne 
	    		animation={{ ...animation, x: 30}} 
	    	>
		    	<Row>
		    		<Col xs={{ span: 6 }} ><span className="nav-item">{ menu1 }</span></Col>
				    <Col xs={{ span: 6 }} ><span className="nav-item">{ menu2 }</span></Col>
				    <Col xs={{ span: 6 }} ><span className="nav-item">{ menu3 }</span></Col>
				    <Col xs={{ span: 6 }} ><span className="nav-item">{ menu4 }</span></Col>
		    	</Row>
	    	</TweenOne>		    
	    </Col>
	    
	  </Row>
	  // </TweenOne>
  )

}

export default Nav
