import React from 'react';
import { Button, Input } from 'antd';

class Hint extends React.Component {
  state = {
    value: null,
  }
  constructor(props) {
      super(props)
  }
  InputOnChange = (e) => { //获取输入框的值
    this.setState({
      value: e.target.value
    })
  }
  ButtonOnClick = () => { //点击确定时 将value 子->父
    this.props.hintClick(this.state.value)
  }
  render() {
    return (
      <div>
        <div style={{ display: 'flex',
          background: '#1890FF', 
          borderBottom: '2px solid black', 
          borderRadius: '5px', 
          justifyContent: 'space-between'
          }}>
          <div style={{            
            color: '#FFF',             
            height: '32px', 
            lineHeight: '32px',
            paddingLeft: '10px',
            fontSize: '18px',
            fontFamily: 'cursive',           
            }}>
            {this.props.text}
          </div>
          <div>
            <Button type='primary' onClick={this.props.closeClick}>X</Button>
          </div>
        </div>
        
        <Input placeholder='请输入文字' onChange={this.InputOnChange} style={{ background: '#162942', color: '#C0C1C4', border: 'none' }}/>
        <div style={{ textAlign: 'right', marginTop: '5px' }}>
          <Button type='primary' onClick={this.ButtonOnClick}>确定</Button>
        </div>
      </div>
    )
  }
}
export default Hint