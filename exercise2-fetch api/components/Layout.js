import React, { Component } from 'react';
import Meta from './Meta';

class Layout extends Component {
      render(){
      return(
        <>
          <Meta/>
          <div>{this.props.children}</div>
        </>
      )
    }
}


export default Layout;
