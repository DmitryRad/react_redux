import { Component } from 'react';
import { connect }  from "react-redux";
import * as actions from '../actions';

// const Counter = ({ counter, inc, dec, rnd }) => {
//     return (
//         <div className="jumbotron">
//             <h1>{counter}</h1>
//             <button onClick={dec} className="btn btn-primacy">DEC</button>
//             <button onClick={inc} className="btn btn-primacy">INC</button>
//             <button onClick={rnd} className="btn btn-primacy">RND</button>
//         </div>
//     )
// }

class Counter extends Component {
    render() {
        const { counter, inc, dec, rnd } = this.props;
        return(
            <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primacy">DEC</button>
            <button onClick={inc} className="btn btn-primacy">INC</button>
            <button onClick={rnd} className="btn btn-primacy">RND</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

export default connect(mapStateToProps, actions)(Counter);
