import React, { Component } from 'react';
import ImageComponent from "../image/image-component"

class listComponent extends Component {

  render() {
    debugger;
    return (
      <div className="flex flex-wrap" style={{height:'300px'}}>
      {this.genarateList()}
      </div>
    );
  }

  genarateList=() => {
    return this.props.list.map((content,index) => {
      console.log(content)
      return (
      <div className=" listItem w-1/3 sm:w-1/3  lg:w-1/4 xl:w-1/6 mb-4 pb-30" key={index}>
        <ImageComponent image={content}/>
        </div>
      )
    })
  }
}

export default listComponent;