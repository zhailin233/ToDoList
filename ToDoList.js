import React, {
  Component
} from 'react';
import {
  Menu,
  Dropdown,
  Icon,
} from 'antd';
import Hint from './Hint';
import DoList from './DoList';
import Style from './QueryDate1.less'

{ /* <ToDoList queryClick={this.queryClick}/> */ }
class ToDoList extends React.Component {
  state = {
    control: false,
    text: null,
    arr: [],
  }
  componentDidMount = () => {
    this.props.queryClick(this.state.arr) //子->父 将arr传递给父组件
  }
  handleClick = (e) => { // 点击下拉选项 获取内容 并显示模态框
    this.setState({
      control: true,
      text: e.key,
    })
  }
  hintClick = (value) => { //  获取子组件携带的input输入的值 并关闭模态框
    let arr = this.state.arr; //读取当前数组 不然每次会替换之前的
    let key = this.state.text;
    arr.push({
      key: key,
      value: value
    })
    if (arr.length !== 0) {
      this.setState({
        arr: arr,
        control: false
      })
    }
  }
  closeClick = () => { //关闭模态框
    this.setState({
      control: false
    })
  }
  delClick = (i) => { //删除当前项 根据子组件携带的i
    let arr = this.state.arr
    arr.splice(i, 1)
    this.setState({
      arr: arr
    })
  }

  render() {
    const menu = (
      <Menu onClick={this.handleClick} className={Style.date1}>
        <Menu.Item key="待做一"><a>待做一</a></Menu.Item>
        <Menu.Item key="待做二"><a>待做二</a></Menu.Item>
        <Menu.Item key="待做三"><a>待做三</a></Menu.Item>
      </Menu>
    );
    return (
      <div>
        {this.state.arr.length > 0 && 
          <div>
            <DoList data={this.state.arr} delClick={this.delClick}/>
          </div>
        }
        <div style={{ marginBottom: '10px' }}>
          <Dropdown overlay={menu} trigger={['click']} >
            <a className="ant-dropdown-link" href="#" style={{ fontSize: '18px', fontFamily: 'cursive', color: '#C0C1C4' }}>
              添加条件 <Icon style={{ marginLeft: '15px' }} type="down" />
            </a>
          </Dropdown>
        </div>
        {this.state.control &&
          <div>
            <Hint text={this.state.text} hintClick={this.hintClick} closeClick={this.closeClick}/>
          </div>
        }
      
      </div>
    );
  }
}

export default ToDoList;