// Importing the React library into the Quiz Component
import React, { Component } from "react";

// Loading JSON data into a variable
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  render() {
    return (<div><div className="QuizQuestion">
    {quizData.quiz_questions[0].instruction_text}</div></div>
    );
  }
}

export default Quiz;
