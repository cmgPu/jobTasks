import React, { Component } from "react";

import './App.css';



/*
This was my first ever React app but(i love challenges) based on Angular two way data binding and with that reference i have managed to complete this task.
Rest of the code is based on css and handling events like slider drag,input value change and input Enter key value submit.
*/
class App extends Component {
  constructor(props) {
    super(props);
    //setting up component state properties
    this.state = {
      boxStyle: {
        width: 300 + 'px',
        height: 300 + 'px'
      },
      horizontalSlider: {
        left: 300 + 'px'
      },
      verticalSlider: {
        top: 300 + 'px'
      },
      boxAttributes: {
        width: 300,
        height: 300
      },
      positionAttributes: {
        left: 300,
        top: 300
      }
    };
  }
  //od this event horizontall state properties are going to be updated ond drag event while vertical are going to be left with original values
  horizontalSliderChange = (e) => {

    //using event properties will helop to determine mouse position when draging element
    e = e || window.event;
    e.preventDefault();
    //selection will make additional check to determine if input mouse position is in allowed range
    if (e.clientX < 501 && e.clientX > -1) {
      //setState will set new left value but also will save old top value
      this.setState({
        positionAttributes: {
          left: e.clientX,
          top: this.state.positionAttributes.top
        }
      })
      //setState will update horizontalSlider left value which is connected to horizontal slider css preoperties
      this.setState({
        horizontalSlider: {
          left: this.state.positionAttributes.left + 'px'
        }
      })
      //div box properties width and height are going to be updated while slider has been dragged
      this.setState({
        boxStyle: {
          width: this.state.positionAttributes.left + 'px',
          height: this.state.boxStyle.height
        }
      })
    }
   
  };
   //od this event vertical state properties are going to be updated ond drag event while horizontal are going to be left with original values
   //same procedure will be executed for vertical slider as it was for horizontal slider
  verticalSliderChange = (e) => {
    e = e || window.event;
    e.preventDefault();

    if (e.clientY < 501 && e.clientY > -1) {
      this.setState({
        positionAttributes: {
          top: e.clientY,
          left: this.state.positionAttributes.left
        }
      })
      this.setState({
        verticalSlider: {
          top: this.state.positionAttributes.top + 'px',

        }
      })
      this.setState({
        boxStyle: {
          height: this.state.positionAttributes.top + 'px',
          width: this.state.boxStyle.width
        }
      })

    }
    
  };
  //event will update horizontal slider position value and box width
  horizontalInputChange = async (e) => {

    e = e || window.event;
    e.preventDefault();

    if (e.target.value < 501 && e.target.value > -1 && e.keyCode === 13) {
      await this.setState({
        positionAttributes: {
          left: e.target.value,
          top: this.state.positionAttributes.top
        }
      })
      await this.setState({
        horizontalSlider: {
          left: this.state.positionAttributes.left + 'px',

        }
      })
      await this.setState({
        boxStyle: {
          width: this.state.positionAttributes.left + 'px',
          height: this.state.boxStyle.height
        }
      })

    }
  }
   //event will update vertical slider position value and box height
  verticalInputChange = async (e) => {

    e = e || window.event;
    e.preventDefault();

    if (e.target.value < 501 && e.target.value > -1 && e.keyCode === 13) {
      await this.setState({
        positionAttributes: {
          top: e.target.value,
          left: this.state.positionAttributes.left
        }
      })
      await this.setState({
        verticalSlider: {
          top: this.state.positionAttributes.top + 'px',

        }
      })
      await this.setState({
        boxStyle: {
          height: this.state.positionAttributes.top + 'px',
          width: this.state.boxStyle.width
        }
      })

    }


  }
  //event will save values after horizontal slider drag is ended
  handleHorizontalSlideEnd = async (e) => {
    e = e || window.event;
    e.preventDefault();
    var X=e.clientX
    if(X>=500)
     {
       X=500;
     }
     else if(X<=0)
     {
       X=0;
     }
    await this.setState({
      positionAttributes: {
        left: X,
        top: this.state.positionAttributes.top
      }
    })

  }
  //event will save values after vertical slider drag is ended
  handleVerticalSlideEnd = async (e) => {
    e = e || window.event;
    e.preventDefault();
    var Y=e.clientY;
    if(Y>=500)
    {
      Y=500;
    }
    else if(Y<=0)
    {
      Y=0;
    }
    await this.setState({
      positionAttributes: {
        top: Y,
        left: this.state.positionAttributes.left
      }
    })
  }
  //event will save and update horizontal slider position values 
  handleHorizontalInputChange = async (e) => {
    e = e || window.event;
    e.preventDefault();
    await this.setState({
      positionAttributes: {
        left: e.target.value,
        top: this.state.positionAttributes.top
      }
    })
  }
   //event will save and update vertical slider position values 
  handleVerticalInputChange = async (e) => {
    e = e || window.event;
    e.preventDefault();
    await this.setState({
      positionAttributes: {
        top: e.target.value,
        left: this.state.positionAttributes.left
      }
    })
  }
  render() {

    return (
     /* resizable box wrapper */
      <div className="box-wrapper">
      {/* resizable box with state propertie style */}
        <div className="box" style={this.state.boxStyle}>

        </div>
        {/* horizontal slider wrapper which will restrict slider movement */}
        <div className="horizontal-slider-box" >
       { /* horizontal slider with event will update box size and text box input values*/}
          <div className="horizontal-slider" draggable="true" id="horizontal" onDragEnd={this.handleHorizontalSlideEnd.bind(this)} onDrag={this.horizontalSliderChange.bind(this)} style={this.state.horizontalSlider}
          ></div>
        </div>
        { /* horizontal and vertical input fields wich will update box size and sliders positions but also will show current size on slider change
        to confirm custom size in range 0-500 confirm it with Enter key
        */}
        <input type="number" min="0" max="500" className="horizontal-input" onChange={this.handleHorizontalInputChange.bind(this)} value={this.state.positionAttributes.left} onKeyUp={this.horizontalInputChange.bind(this)} />
        <input type="number" min="0" max="500" className="vertical-input" onChange={this.handleVerticalInputChange.bind(this)} value={this.state.positionAttributes.top} onKeyUp={this.verticalInputChange.bind(this)} />
       { /* vertical slider wrapper*/}
        <div className="vertical-slider-box" >
        {/* vertical slider with event will update box size and text box input values*/}
          <div className="vertical-slider" draggable="true" id="vertical" onDragEnd={this.handleVerticalSlideEnd.bind(this)} onDrag={this.verticalSliderChange.bind(this)} style={this.state.verticalSlider}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
