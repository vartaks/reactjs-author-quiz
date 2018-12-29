import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
        <Hero />
        <Turn {...this.props.turnData}
          highlight={this.props.highlight}
          onAnswerSelected={this.props.onAnswerSelected} />
        <Continue show={this.props.highlight === 'correct'}
          onContinue={this.props.onContinue} />
        <p><Link to="/add">Add an author</Link></p>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    turnData: state.turnData,
    highlight: state.highlight
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswerSelected: (answer) => {
      dispatch({ type: 'ANSWER_SELECTED', answer });
    },
    onContinue: () => {
      dispatch({ type: 'CONTINUE' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);
