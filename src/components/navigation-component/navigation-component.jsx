import React from 'react';
import navbarBG from '../../assets/nav_bar.png'
import BackButtonIcon from '../../assets/Back.png'
import SearchIcon from '../../assets/search.png'
import dataPage1 from '../../api/CONTENTLISTINGPAGE-PAGE1.json';
import { ToastContainer, toast } from 'react-toastify';


import './navgation-component.css';
import 'react-toastify/dist/ReactToastify.css';

class navigationComponent extends React.Component {
  
  notifyNoBack = () => {
    toast("Back is not Allowed!");
  }

  render() {
    return (
        <div className="navigationBar" style={{backgroundImage: `url(${navbarBG})`}}>
          <div className="navigationElements">
            <img 
            className="backButton" 
            src={BackButtonIcon} 
            alt="back" 
            onClick={this.notifyNoBack}
            style ={{width: '30px',position: 'absolute',left:'30px',top:'30px'}}></img>
          </div>
          <div className="navigationElements">
            <img className="searchButton" 
            src={SearchIcon} 
            alt="search" 
            onClick={this.props.searchHandler}
            style ={{width: '30px',position: 'absolute',right:'30px',top:'30px',zIndex:999}}></img>
          </div>
          <div className="navigationElements example">
           {dataPage1.page.title}
          </div>
          <ToastContainer />
        </div>
    );
  }

  componentDidMount() {
    // console.log("Component rendered")
  }
}

export default navigationComponent;