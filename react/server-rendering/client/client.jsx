import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {handleUpvotes} from '../shared/utility'

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
    state.answers = handleUpvotes(state.answers, answerId, count);
    fetch(`/vote/${answerId}?increment=${count}`)
        .then(data => console.log(data));
    render();
}

function render() {
    ReactDOM.hydrate(<App {...state} handleModifyAnswerVotes={updateVotes}/>, document.querySelector("#Container"));
}
