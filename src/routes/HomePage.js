import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Affix, Menu, Dropdown, Icon, Tooltip } from 'antd';
import './HomePage.less';

const ButtonGroup = Button.Group;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      affixed: true,
    };
  }

  handleLoginClick(e) {
    console.log('click left button', e);
  }

  handleLoginMenuClick(e) {
    console.log('click', e);
  }

  handleDropdownMenuClick(e) {
    console.log('click', e);
  }

  render() {
    const LoginMenu = (
      <Menu theme={this.state.affixed ? "dark" : "light"} onClick={this.handleLoginMenuClick}>
        <Menu.Item key="1">Signup</Menu.Item>
      </Menu>
    );
    const DropdownMenu = (
      <Menu theme={this.state.affixed ? "dark" : "light"} onClick={this.handleDropdownMenuClick}>
        <Menu.Item key="1">Why GoIoT</Menu.Item>
        <Menu.Item key="2">Pricing</Menu.Item>
        <Menu.Item key="3">Explore</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">Login</Menu.Item>
        <Menu.Item key="5">Signup</Menu.Item>
      </Menu>
    );
    return (
      <div className="ant-layout-top">
        <Affix onChange={status => this.setState({affixed: !status})}>
        <div className={this.state.affixed ? "ant-layout-header-affixed" : "ant-layout-header"}>
          <Row>
            <Col xs={0} sm={2} md={2} lg={2} />
            <Col xs={16} sm={4} md={4} lg={4}>
              <div className="ant-header-logo">GoIoT</div>
            </Col>
            <Col xs={8} sm={12} md={12} lg={12}>
              <Menu theme={this.state.affixed ? "dark" : "light"} mode="horizontal" className="ant-header-menu">
                <Menu.Item style={{borderBottom: "none"}} key="1">Why GoIoT</Menu.Item>
                <Menu.Item style={{borderBottom: "none"}} key="2">Pricing</Menu.Item>
                <Menu.Item style={{borderBottom: "none"}} key="3">Explore</Menu.Item>
              </Menu>
              <Dropdown overlay={DropdownMenu} trigger={['click']}>
                <div className="ant-header-menu-xs">
                  <Button type="ghost">
                    <span style={{color: "#b7b7b7"}}>Menu <Icon type="down" /></span>
                  </Button>
                </div>
              </Dropdown>
            </Col>
            <Col xs={0} sm={4} md={4} lg={4}>
              <div className="ant-header-button">
                <Dropdown.Button onClick={this.handleLoginClick} overlay={LoginMenu} trigger={['click']} type="primary">
                  Login
                </Dropdown.Button>
              </div>
            </Col>
            <Col xs={0} sm={2} md={2} lg={2} />
          </Row>
        </div>
        </Affix>
        <div className="ant-layout-content">
          <div style={{ background: "#444", height: "100vh" }}></div>
          <div style={{ background: "#ddd", height: "100vh" }}></div>
          <div style={{ background: "#fff", height: "100vh" }}></div>
        </div>
        <div className="ant-layout-footer">
          <Row>
            <Col xs={3} sm={2} md={2} lg={2} />
            <Col xs={7} sm={4} md={4} lg={4}>
              <ul className="ant-footer-about">
                <li className="ant-footer-title">About</li>
                <li className="ant-footer-item"><a target="_blank" href="#">Team</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Blog</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Contact</a></li>
              </ul>
            </Col>
            <Col xs={7} sm={4} md={4} lg={4}>
              <ul className="ant-footer-resource">
                <li className="ant-footer-title">Resource</li>
                <li className="ant-footer-item"><a target="_blank" href="#">Community</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Tutorial</a></li>
                <li className="ant-footer-item"><a target="_blank" href="#">Documentation</a></li>
              </ul>
            </Col>
            <Col xs={7} sm={4} md={4} lg={4}>
              <ul className="ant-footer-external">
                <li className="ant-footer-title">External</li>
                <li className="ant-footer-item"><a target="_blank" href="http://nodered.org">Node-RED</a></li>
              </ul>
            </Col>
            <Col xs={0} sm={2} md={4} lg={4} />
            <Col xs={24} sm={6} md={4} lg={4}>
              <ul className="ant-footer-rights">
                <br className="ant-footer-title" />
                <li>GoIoT © 2016</li>
                <li>
                  Made with <span style={{ color: "#e01515" }}>&hearts;</span> by <span className="ant-footer-item"><a target="_blank" href="https://linkgo.io">linkgo.io</a></span>
                </li>
              </ul>
            </Col>
            <Col xs={0} sm={2} md={2} lg={2} />
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
