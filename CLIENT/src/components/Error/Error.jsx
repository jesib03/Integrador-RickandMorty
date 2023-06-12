import React, { Component } from 'react'

export class Error extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <h2>Error 404</h2>
        <h3>This is not the web page you are looking for</h3>
      </div>
    )
  }
}

export default Error