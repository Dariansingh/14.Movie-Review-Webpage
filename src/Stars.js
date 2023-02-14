import React from 'react';
import star from './star.jpg';

/* image that adds another star image each time it's clicked */
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    /*function that updates the the count value in the component's state when the star.jpg is clicked */
    handleClick() {
        /*gets current count value from the state*/
        const { count } = this.state;
        /*increments the counts value by 1 and once the count is greater than 4 it resets bakc to 0*/
        if (count < 4) {
            this.setState({ count: count + 1 });
        } else {
            this.setState({ count: 0 });
        }
        /*notifies the handleClick function that it was clicked*/
        this.props.onClick(this.props.name);
    }
    
    render() {
        const { count } = this.state;
        const stars = [];

        for (let i = 0; i < count; i++) {
            stars.push(
                <img
                    key={i}
                    src={star}
                    alt="Star"
                    width="40"
                    height="40"
                />
            );
        }

        return (
            <div>
                <img
                    src={star}
                    alt="Star"
                    width="40"
                    height="40"
                    onClick={this.handleClick}
                    style={{ cursor: 'pointer' }}
                />
                {stars}
            </div>
        );
    }
}
