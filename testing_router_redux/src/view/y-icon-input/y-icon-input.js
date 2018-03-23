import React from 'react';
import './y-icon-input.css';
/**
 * YiconInput, View for my style input
 */
class YiconInput extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      imgStyle:{
        width:this.props.height,
        height:this.props.height
      },
      inputStyle:{
        height:this.props.height,
        fontSize:this.props.height
      },
      inputContainerStyle:{
        width:"80%"
      },
      imgContainerStyle:{
        width:"20%"
      },
      needHintUp:false
    };

  }

  // when focus
  onInputFocus(){
    console.log("onFocus");
    this.setState({
      imgStyle:{
        width:0,
        height:0
      },
      inputContainerStyle:{
        width:"95%"
      },
      imgContainerStyle:{
        width:"0%"
      },
      needHintUp:true
    });
  }
  // when unfocus
  onInputBlur(){
    this.setState({
      imgStyle:{
        width:this.props.height,
        height:this.props.height
      },
      inputContainerStyle:{
        width:"80%"
      },
      imgContainerStyle:{
        width:"20%"
      },
      needHintUp:false
    });
  }

  render(){

    return (
      <div>
        <div className="y-top-section" >
          <span style={this.state.needHintUp?{fontSize:"5px"}:{color:"transparent"}}>{`${this.props.keyPlaceHolder?this.props.keyPlaceHolder:this.props.placeHolder}:`}</span>
        </div>
        <div className="y-middle-section">
          <span className="inner-img" style={this.state.imgContainerStyle}>
            <img  style={this.state.imgStyle} src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/>
          </span>
          <span className="inner-input" style={this.state.inputContainerStyle}>
            <input style={this.state.inputStyle} type='text'
              placeholder={this.props.placeHolder}
              onFocus={()=>this.onInputFocus()}
              onBlur={()=>this.onInputBlur()}
              onChange={(e)=>this.props.onChange(e.target.value)}
            />
          </span>

        </div>

        <div className="y-underline-section"></div>
      </div>
    );
  }
}

export default YiconInput;
