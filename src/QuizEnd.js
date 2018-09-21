// Importing the React library into the QuizEnd component
import React, { Component } from 'react';

class QuizEnd extends Component {

    handleResetClick() {
        this.props.resetClickHandler();
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <button onClick={this.handleResetClick.bind(this)}>Reset Quiz</button>
            </div>
        );
    }
}

export default QuizEnd;

