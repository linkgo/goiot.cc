import React, {Component, PropTypes} from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './common.less';

function customOverPack(props) {
  let clsName = props.className
    ? 'main-wrap ' + props.className
    : 'main-wrap'
  return (
    <OverPack
      hideProps={{
        icon: {
          reverse: true
        }
      }}
      replay={false}
      { ...props }
      className={clsName}>
      {props.children}
    </OverPack>
  )
}

export default customOverPack;
