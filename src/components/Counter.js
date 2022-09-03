const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primacy">DEC</button>
            <button onClick={inc} className="btn btn-primacy">INC</button>
            <button onClick={rnd} className="btn btn-primacy">RND</button>
        </div>
    )
}

export default Counter;
