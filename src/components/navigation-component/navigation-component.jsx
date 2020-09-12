import React from 'react';
import navbarBG from '../../assets/nav_bar.png'
import BackButtonIcon from '../../assets/Back.png'
import SearchIcon from '../../assets/search.png'

import './navgation-component.css';

class navigationComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      heading:" Romantic Comedy"
    }
  }

  render() {
    return (
        <div className="navigationBar" style={{backgroundImage: `url(${navbarBG})`}}>
          <div className="navigationElements">
            <img className="backButton" src={BackButtonIcon} alt="back" 
                  style ={{width: '30px',position: 'absolute',left:'30px',top:'30px'}}></img>
          </div>
          <div className="navigationElements">
            <img className="backButton" src={SearchIcon} alt="search" 
                style ={{width: '30px',position: 'absolute',right:'30px',top:'30px'}}></img>
          </div>
          <div className="navigationElements example">
           {this.state.heading}
          </div>
        </div>
    );
  }

  componentDidMount() {
    console.log("Component rendered")
  }
}

export default navigationComponent;