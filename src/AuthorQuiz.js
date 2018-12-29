import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';

import './App.css';
import './bootstrap.min.css';

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...this.props.turnData} 
            highlight={this.props.highlight} 
            onAnswerSelected={this.props.onAnswerSelected} />
        <Continue/>
        <p><Link to="/add">Add an author</Link></p>
        <Footer/>
      </div>
    );
  }
}

export default AuthorQuiz;
