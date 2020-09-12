import React from 'react';
import ListComponent from '../list/list-component';
import dataPage1 from '../../api/CONTENTLISTINGPAGE-PAGE1.json';

class gridComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      height: window.innerHeight,
      isBottomReached: false,
      current_page: 1,
      listContent:[]
    }
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    console.log("window.height is -->",windowHeight)
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && this.state.current_page < 3) {
        this.setState({
          current_page: this.state.current_page + 1,
          isBottomReached: true,
        });
        console.log("end is reached")
    } else {
        this.setState({
            isBottomReached: false
        });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    //going to hit api to get data
    let initialData = dataPage1.page["content-items"].content
    
    this.setState({listContent:initialData})
    console.log("data" ,initialData )
}

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}

  render() {
    return (
      <div className="grid-wrapper">
        <div >
          <ListComponent list={this.state.listContent}/>
        </div>
      </div>
    );
  }
}

export default gridComponent;