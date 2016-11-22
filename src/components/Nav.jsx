import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import '../less/nav1.less';

const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const { logo, menu1, menu2, menu3, menu4 } = this.props.dataSource.block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;
    return (
      <TweenOne component="header" animation={{ opacity: 0, type: 'from' }} {...props} >
        <TweenOne
          className={`${this.props.className}-logo`}
          animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        >
          <img height="33" src={logo} />
        </TweenOne>
        <TweenOne
          className={`${this.props.className}-nav`}
          animation={{ x: 30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
        >
          <Menu
            mode="horizontal" defaultSelectedKeys={['a']}
            style={{ lineHeight: `${parseFloat(this.props.style.height) - 2}px` }}
          >
            <Item style={{borderBottom: "none"}} key="why">{menu1}</Item>
            <Item style={{borderBottom: "none"}} key="feature">{menu2}</Item>
            <Item style={{borderBottom: "none"}} key="explore">{menu3}</Item>
            <Item style={{borderBottom: "none"}} key="price" disabled>{menu4}</Item>
          </Menu>
        </TweenOne>
      </TweenOne>
    );
  }
}

Header.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  dataSource: PropTypes.object,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
