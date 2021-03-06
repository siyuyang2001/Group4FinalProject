import React, { Component } from 'react'

class Timer extends Component {

constructor (props){
  super(props)
  this.state={
    count:0
  }
}

  render () {
    const {count} = this.state
    return (
      <div>
        <h1>Time: {count} seconds</h1>
      </div>
    )
  }



    componentDidMount() {
          this.myInterval = setInterval(() => {
          this.setState(prevState => ({
            count:prevState.count+1
          }))
        }, 1000)
      }
}


export default Timer
