import React, { Component } from 'react';
import WrappedRegistrationForm from  './SuggestForm'
import Introduce from './Introduce'
import List from './list'
import './App.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class App extends Component {
    state = {
        current: 'home',
        show_flag:false,   //控制发起留言的flag,true为显示发起留言，false为隐藏
        show_list:false,
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        //控制发起留言显示与否
        if(e.key==="mail"){
          this.setState({
              show_flag:true,

          })
        }else {
            this.setState({
                show_flag:false,
            })
        }
        //控制列表显示与否
        if(e.key==="app"){
            this.setState({
                show_list:true,

            })
        }else {
            this.setState({
                show_list:false,
            })
        }
    }
  render() {
    return (
      <div className="App">
          <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
          >
              <Menu.Item key="home" className="menuItem">
                  <Icon type="home" />网站首页
              </Menu.Item>
              <Menu.Item key="mail" className="menuItem">
                  <Icon type="mail" />发起留言
              </Menu.Item>
              <Menu.Item key="app" className="menuItem">
                  <Icon type="appstore" />回复查询
              </Menu.Item>
          </Menu>
          {(!this.state.show_flag)&&(!this.state.show_list)&&<Introduce/>}

          {(this.state.show_flag)&&
              <WrappedRegistrationForm />
          }
          {
              (this.state.show_list)&&<List/>
          }

      </div>
    );
  }
}

export default App;
