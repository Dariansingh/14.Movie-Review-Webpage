import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    /*input gets stored inside the state*/
    handleChange(event) {
         this.setState({
            input: event.target.value
        })
    }
    /*stored input gets stored inside the submit*/
    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }
    /*JSX form that handles any input and change*/
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.input}
                        onChange={this.handleChange} />
                    <button type='submit'>Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
};