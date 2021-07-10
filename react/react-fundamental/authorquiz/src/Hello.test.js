import React from 'react';
import ReactDOM from 'react-dom';


function Hello(props) {
    return <h1>Hello at {props.now}</h1>
}

const moment = new Date(1588946400000);

describe("When Testing directly", () => {
    let result;
    beforeAll(() => {
        result = Hello({now: moment.toISOString()})
    })

    it("return a value", () => {
        expect(result).not.toBeNull();
    })

    it("it is a h1", () => {
        expect(result.type).toBe("h1");
    })

    it("it has children", () => {
        expect(result.props.children).toBeTruthy();
    })
});

describe("While Testing with ReactDOM", () => {
    it('renders without crashing', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()}/>, div)
    });
})
