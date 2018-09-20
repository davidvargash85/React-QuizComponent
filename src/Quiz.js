// Importing the React library into the Quiz Component
import React, { Component } from "react";

// Importing QuizQuestion into the Quiz file
import QuizQuestion from "./QuizQuestion.js";

// Loading JSON data into a variable
let quizData = require("./quiz_data.json");

// Creating the QuizQuestion class
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  // Rendering the QuizQuestion component
  render() {
    return (
      <div>
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
      </div>
    );
  }
}

export default Quiz;
