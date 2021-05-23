import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../components/AppBar.js';
import ChooseEmotion from '../components/ChooseEmotion.js';

class MoodPage extends React.Component {
  render() {
    return (
      <div>
        <ButtonAppBar/>
  
        <ChooseEmotion handleChange={this.props.handleChange}/>
  
      </div>
    );
  }
  
}

export default MoodPage;