import React, {Component, PropTypes} from 'react';
import {Col, Menu, Row} from 'antd';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import Particles from 'react-particles-js';
import CustomOverPack from './CustomOverPack';
import styles from './banner.less';

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
	const styles = {
		particles: {
			position: "absolute",
			top: 0,
			left: 0
		}
	};
	const showParticles = () => {
		return (
      <Particles style={styles.particles} params={{
				"particles": {
					"number": {
						"value": 15,
						"density": {
							"enable": false,
							"value_area": 800
						}
					},
					"color": {
						"value": "#9aebfd"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#ffffff"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 0.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 40,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 400,
						"color": "#40a8b5",
						"opacity": 0.4,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 5,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "grab"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 240,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 200,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 3
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
      }} />
		)
	}
  return (
    <CustomOverPack
      playScale={[0.3, 0.1]}
      className="banner-wrap"
      style={{
        background: "#14191c"
      }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="main-wrap banner-content">
				{showParticles()}
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
    </CustomOverPack>
  )
}

export default Banner;
