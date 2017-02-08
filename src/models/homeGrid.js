
export default {

  namespace: 'homeGrid',

  state: {
    nav_1: {
      style: {
        position: 'absolute',
        height: '64px',
      },
      dataSource: {
        block1: {
          logo: 'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-132x33.white.png',
          menu1: '为什么使用',
          menu2: '特性',
          menu3: '探索',
          menu4: '价格',
        },
      },
    },
    banner_0: {
      style: {
        height: '100%',
      },
      dataSource: {
        block1: {
          top: '35%',
          //logo: 'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-800x266-shadow.white.png',
          logo: 'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-800x259-shadow-all.white.png',
          title:'',
          content1: '极速部署，释放你的创造力',
          content2: '大道至简，开启下一代互联网进化',
          button: '控制台',
          buttonCommunity: '社区',
          bgImg: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
        },
      },
    },
    content_5: {
      style: {
        height: '100%',
      },
      dataSource: {
        title: {
          title:'多才多艺的 Go.IoT',
          content:'基于强大的 Node-RED 以及蓬勃发展的 npm 生态系统',
        },
        img: {
          img:'http://o7spigzvd.bkt.clouddn.com/page-1-picture-sketch.png',
        },
        block1: {
          img:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          title:'前端显示组件',
          content:'丰富的显示组件，简单的连接，展示出可视化数据。',
        },
        block2: {
          img:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          title:'后台逻辑模块',
          content:'享受开源社区的成果，饮水思源，轻松部署，Geek 的最爱。',
        },
        block3: {
          img:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          title:'硬件接入节点',
          content:'MQTT 接入，执行在硬件，智慧在云端。',
        },
      },
    },
    content_2: {
      style: {
        height: '100%',
      },
      dataSource: {
        title: {
          title:'使用 Go.IoT 来构建你的下一个网络应用',
          content:'让硬件、云端逻辑、前端显示，愉快而融洽地黏合在一起',
        },
        block0: {
          iconImg:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          title:'模块化部署',
          content:'像堆积木一样搭建专属的网络应用，无痛接入第三方组件，轻松游走于硬件、后台服务和UI之间',
        },
        block1: {
          iconImg:'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          title:'互联网资源',
          content:'全网络协议支持，互联网资源轻易获取、高度定制化、快速部署',
        },
        block2: {
          iconImg:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          title:'丰富的组件',
          content:'除了默认配有齐全的基础逻辑和网络组件，还可以安装第三方组件用于支持更多智能硬件或其他高级功能',
        },
        block3: {
          iconImg:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          title:'移动适配',
          content:'配有移动端友好的UI组件包，快速呈现，实时交互',
        },
        block4: {
          iconImg:'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          title:'分布式虚拟化',
          content:'将网络应用部署于分布式的虚拟化容器中，集中控制和管理',
        },
        block5: {
          iconImg:'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          title:'大数据',
          content:'大数据分析，搜集、订阅有价值的数据，打造你的 Matrix',
        },
      },
    },
    content_4: {
      style: {
        height: '100%',
      },
      dataSource: {
        title: {
          title:'看看 Go.IoT 能做什么',
          content:'准备好你的脑洞，和我们一起遨游云端',
        },
        block1: {
          img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          content:'敬请期待：私有云服务',
        },
        block2: {
          img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
          content:'敬请期待：实时订阅',
        },
        block3: {
          img:'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          content:'敬请期待：智能硬件',
        },
        block4: {
          img:'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
          content:'敬请期待：Web 应用',
        },
      },
    },
    footer_1: {
      style: {
        height: '300px',
      },
      dataSource: {
        logo: {
          logo:'http://o7spigzvd.bkt.clouddn.com/goiot-rc3-132x33.white.png',
          content:'An efficient IoT solution',
        },
        block1: {
          title:'产品',
          content:'产品更新记录\n快速入门\n参考指南',
          contentLink:'//bb.goiot.cc/categories\n//bb.goiot.cc/category/7/%E5%85%A5%E9%97%A8-tutorial\n//bb.goiot.cc/categories',
        },
        block2: {
          title:'关于',
          content:'FAQ\n联系我们',
          contentLink:'https://bb.goiot.cc/category/4/%E5%8F%8D%E9%A6%88-faq\nmailto:hi@linkgo.io',
        },
        block3: {
          title:'资源',
          content:'社区\nNode-RED Website\nNode-RED @ Slack',
          contentLink:'//bb.goiot.cc\nhttp://nodered.org\nhttp://node-red.slack.com',
        },
        block4: {
          title:'关注',
          content:'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\nhttps://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\nhttps://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\nhttps://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg',
          contentLink:'#\n//github.com/linkgo\n#\n#',
        },
        copyright: {
          content:'Copyright © 2016 Made with <span style=\"color: #a51616\">&hearts;</span> by <a href=\'http://linkgo.io\'>linkgo.io</a>. All Rights Reserved<br><a style=\'text-decoration:none;color:#666;\' href=\'http://www.miitbeian.gov.cn\'>沪ICP备16024899号</a>',
        },
      },
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
