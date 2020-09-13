import React, { Component } from 'react';
import NavBar from '../components/navigation-component/navigation-component';
import Grid from '../components/grid/grid-component'

class ContentDetailPage extends Component {
  handleSearch = () => {
    debugger
    
    console.log("search Clisked")
  }
  render() {
    return (
      <div>
        <NavBar searchHandler={this.handleSearch}/>
        <Grid/>
      </div>
    );
  }
}

export default ContentDetailPage;