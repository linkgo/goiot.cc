import React from 'react';
import { connect } from 'dva';      //引入connect工具函数
import { scrollScreen } from 'rc-scroll-anim';
import '../less/common.less';
import Nav1 from '../components/Nav';
import Banner0 from '../components/Banner0';
import Content5 from '../components/Content5';
import Content2 from '../components/Content2';
import Content4 from '../components/Content4';
import Content6 from '../components/Content6';
import Footer1 from '../components/Footer';


class HomeMotion extends React.Component {
  componentDidMount() {
  }

  render() {
    const { banner_0, nav_1, content_2, content_4, content_5, content_6, footer_1 } = this.props.homeMotion;
    const children = [
      <Nav1 key="nav_1" name="nav_1" {...nav_1} />,
      <Banner0 key="banner_0" name="banner_0" {...banner_0} />,
      <Content5 key="content_5" name="content_5" {...content_5} />,
      <Content2 key="content_2" name="content_2" {...content_2} />,
      <Content4 key="content_4" name="content_4" {...content_4} />,
      <Footer1 key="footer_1" name="footer_1" {...footer_1} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}

function mapStateToProps({ homeMotion }) {
  return {homeMotion};
}

export default connect(mapStateToProps)(HomeMotion);

