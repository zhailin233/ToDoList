import React from 'react';
import { Button } from 'antd';

class DoList extends React.Component {
  constructor(props) {
    super(props) 
  }

  onClick = (i) => { //点击删除 携带当前位置i 子->父
    this.props.delClick(i)
  }
  render() {
    const styles = {
      borderLeft: '2px solid red',
      fontSize: '18px',
      color: '#FFF',
      marginLeft: '10px',
      fontFamily: 'cursive',
    }
    return (
      this.props.data ? this.props.data.map((e, i)=>(  //根据arr 渲染 父->子
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }} key={i}>
          <div style={styles}>{e.key}:</div>
          <div style={{marginLeft: '10px', color: '#FFF', fontSize: '18px', fontFamily: 'cursive'}}>{e.value}</div>
          <Button  type="danger" style={{ marginLeft: '10px' }} size='small' onClick={this.onClick.bind(this, i)}>删除</Button>
        </div>
      )) : ""

    )
  }
}
export default DoList;