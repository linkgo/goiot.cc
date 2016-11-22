import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import './Sidebar.less';

const SubMenu = Menu.SubMenu;

class Ant extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCollapseChange = this.onCollapseChange.bind(this);
    this.state = {
      collapse: true,
    };
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  componentDidMount() {
    document.getElementById('root').style.overflowY = "hidden";
  }

  render() {
    return (
      <div className={this.state.collapse ? "ant-layout-aside styles ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['dashboard']}>
            <Menu.Item key="profile">
              <Icon type="user" /><span className="nav-text">Profile</span>
            </Menu.Item>
            <Menu.Item key="dashboard">
              <Icon type="appstore-o" /><span className="nav-text">Dashboard</span>
            </Menu.Item>
            <Menu.Item key="ui">
              <Icon type="laptop" /><span className="nav-text">UI</span>
            </Menu.Item>
            <Menu.Item key="editor">
              <Icon type="edit" /><span className="nav-text">Editor</span>
            </Menu.Item>
            <Menu.Item key="info">
              <Icon type="info-circle-o" /><span className="nav-text">About</span>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {this.state.collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-frame">
          <iframe id="iframe-red" width="100%" height="100%" frameBorder="0" src="http://docker-red.accrete.org:8000/editor"></iframe>
        </div>
      </div>
    );
  }
}

export default Ant;
