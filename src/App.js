import './App.css';
import React from 'react';
import MoodPage from './pages/MoodPage.js';
import TrackPage from './pages/TrackPage.js';

{/*possible solution for multiple pageshttps://rookiecoder.medium.com/react-button-click-navigate-to-new-page-6af7397ea220 
should we make it a single page app?*/}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.state = {emotion: ""}
  }

  handleChange(e, emote) {
    this.setState({
      emotion: emote
    })
  }

  handleHome(e) {
    this.setState({
      emotion: ""
    })
  }

  render() {
    if (this.state.emotion == "") {
      return (
        <div>
          <MoodPage handleChange={this.handleChange}/>
        </div>
      )
    }

    else {
      return(
        <div>
          <TrackPage emotion={this.state.emotion} handleHome={this.handleHome}/>
        </div>
      );
    }

    
  }
  }
export default App;
