import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../less/banner0.less';

class Banner extends React.Component {
  render() {
    const { block1 } = this.props.dataSource;
    const { top, logo, title, content1, content2, button, bgImg } = block1;
    const props = { ...this.props };
    delete props.dataSource;
    delete props.name;
    return (
      <OverPack
        replay
        scrollName={this.props.name}
        playScale={[0.3, 0.1]}
        {...props}
        style={{
          backgroundImage: `url(${bgImg})`,
          ...props.style,
        }}
        hideProps={{ icon: { reverse: true } }}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${this.props.className}-title`}
          key="text"
          style={{ top }}
        >
          {logo ? <span className="logo" key="logo"><img width="100%" src={logo} /></span> : null}
          {title ? <h1 key="h1">{title}</h1> : null}
          <div className="text">
            <p key="content1">{content1}</p>
            <p key="content2">{content2}</p>
          </div>
          <Button type="ghost" key="button">{button}<span style={{fontSize: "8px", color: "#a51616"}}>&nbsp;alpha</span></Button>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${this.props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  dataSource: PropTypes.object,
};

Banner.defaultProps = {
  className: 'banner0',
};

export default Banner;
