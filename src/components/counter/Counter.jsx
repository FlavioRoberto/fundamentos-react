import { Component } from "react";
import './Counter.css';
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
import CounterForm from "./CounterForm";

const DEFAULT_INCREMENTATION = 1;

export class Counter extends Component {
    state = {
        number: this.props.initialNumber ?? 0,
        incrementBy: this.props.incrementBy ?? DEFAULT_INCREMENTATION
    }

    count = () => {
        this.setState({
            number: this.state.number + this.state.incrementBy
        });
    }

    unCount = () => {
        this.setState({
            number: this.state.number - this.state.incrementBy
        });
    }

    setIncrementValue = (e) => {
        const value = e || DEFAULT_INCREMENTATION;
        this.setState({
            incrementBy: value
        })
    }

    render() {
        return <div>
            <CounterDisplay value={this.state.number} />
            <CounterForm setIncrementValue={this.setIncrementValue} />
            <CounterButton count={this.count} unCount={this.unCount} />
        </div>
    }

}
