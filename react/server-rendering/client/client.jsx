import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

// ReactDOM.render(<App/>, document.querySelector("#Container"));

let state = undefined;

fetch("http://127.0.0.1:7777/data")
    .then(data => data.json())
    .then(json => {
        state = json;
        console.log(state)
        render();
    })

function updateVotes(answerId, count) {
    state.answers = state.answers.map(answer =>
        {
            if(answer.answerId === answerId) {
                return {...answer, upvotes: answer.upvotes + count}
            }
            return answer;
        }
    );
    render();
}

function render() {
    ReactDOM.hydrate(<App {...state} handleModifyAnswerVotes={updateVotes}/>, document.querySelector("#Container"));
}
