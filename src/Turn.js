import React, { Component } from 'react';
import Book from './Book';

class Turn extends Component {
    render() {
        return (
            <div className='row turn' style={{ backgroundColor: 'white' }}>
                <div className='col-4 offset-1'>
                    <img src={this.props.author.imageUrl}
                        className='authorimage' alt='Author' />
                </div>
                <div className='col-6'>
                    { this.props.books.map(
                        (title) => 
                        <Book title={title} key={title}></Book>) 
                    }
                </div>
            </div>
        );
    }
}

export default Turn;