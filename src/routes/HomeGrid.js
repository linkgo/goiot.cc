import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { SectionsContainer, Section } from 'react-fullpage'
import '../components/home-grid/common.less';
import Nav from '../components/home-grid/Nav';
import Banner from '../components/home-grid/Banner';
import Content5 from '../components/home-grid/Content5';
import Content2 from '../components/home-grid/Content2';
import Content4 from '../components/home-grid/Content4';
import Footer from '../components/home-grid/Footer';
import Particles from '../components/home-grid/Particles'


function homeGrid(props){
	const { banner_0, nav_1, content_2, content_4, content_5, content_6, footer_1, currentSection } = props.homeGrid;
	const options = {
      sectionClassName: 'section',
      anchors: ['index', 'why', 'features', 'explore', 'links'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '0',
      sectionPaddingBottom: '0',
      arrowNavigation: false,
      scrollCallback: (states) => {
      	// this.setState({current: states.activeSection})
      	props.dispatch({ type: 'homeGrid/setCurrentSection', currentSection: states.activeSection })
      }
  };
	return (
		<SectionsContainer className="container page-wrap" {...options} activeSection={currentSection}>
        <Section verticalAlign="true" color="#69D2E7">
        	<Nav { ...nav_1 } />
        	<Banner { ...banner_0 } />
        </Section>
        <Section color="#fff" verticalAlign="true">
        	<Content5 { ...content_5 } activeSection={currentSection} />
        </Section>
        <Section color="#fff" verticalAlign="true">
        	<Content2 { ...content_2 } activeSection={currentSection} />
        </Section>
        <Section color="#fff" verticalAlign="true">
        	<Content4 { ...content_4 } activeSection={currentSection} />
        </Section>
        <Section className="footer-section" color="#14191C" verticalAlign="true">
        	<Particles />
        	<Footer { ...footer_1 } activeSection={currentSection} />
        </Section>
    </SectionsContainer>
	)
}

function mapStateToProps({ homeGrid }){
	return { homeGrid }
}
export default connect(mapStateToProps)(homeGrid);

// <Nav { ...nav_1 } />
// 			<Banner { ...banner_0 } />
// 			<Content5 { ...content_5 } />
// 			<Content2 { ...content_2 } />
// 			<Content4 { ...content_4 } />
// 			<Footer { ...footer_1 } />