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
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && this.state.current_page < 3) {
      this.setState((prevState) => {
        return {
          current_page: prevState.current_page + 1,
        };
    }, () => {
      this.appendNextPage()
    });
    } else {
        this.setState({
            isBottomReached: false
        });
    }
  }

   appendNextPage() {
    if(this.state.current_page > 3) {
      return
    } else {
      let initialDataPage2
      if(this.state.current_page ===2){
        const dataPage2 =  require('../../api/CONTENTLISTINGPAGE-PAGE2.json');
        initialDataPage2 = dataPage2.page["content-items"].content;
      } else {
        const dataPage3 =  require('../../api/CONTENTLISTINGPAGE-PAGE3.json');
        initialDataPage2 = dataPage3.page["content-items"].content
      }
      this.setState({listContent:  [...this.state.listContent,...initialDataPage2]})
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    //going to hit api to get data
    let initialData = dataPage1.page["content-items"].content
    
    this.setState({listContent:initialData})
}

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}

  render() {
    return (
      <div className="grid-wrapper">
        <div style={{position: 'relative', top: '40px'}}>
          <ListComponent list={this.state.listContent}/>
        </div>
      </div>
    );
  }
}

export default gridComponent;