// Importing the React library into the Quiz Component
import React, { Component } from "react";
// Importing QuizQuestion into the Quiz file
import QuizQuestion from "./QuizQuestion.js";
// Importing QuizEnd into the Quiz file
import QuizEnd from "./QuizEnd.js";

// Loading JSON data into a variable
let quizData = require("./quiz_data.json");

// Creating the QuizQuestion class
class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  showNextQuestion() {
    this.setState((state) => {
      return { quiz_position: state.quiz_position + 1 };
    });
  }

  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }

  // Rendering the QuizQuestion component
  render() {
    const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length);
    return (
      <div>
        {
          (isQuizEnd) ?
            <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> :
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]
            }
              showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
      </div>
    );
  }
}

export default Quiz;
