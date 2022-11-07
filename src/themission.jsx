const Mission = () => {
    return (
        <div style={{ fontSize: 25, display: 'flex', justifyContent: 'center' }}>1. create a new project with bootstrap and bootstrap icons<br></br>
            2. create a component called "counter"<br />
            2.1 counter should receive the following props <br />
            - min = Number.MIN_SAFE_INTEGER <br />
            - max = Number.MAX_SAFE_INTEGER <br />
            - initial = 0 <br />
            - steps = 1 <br />
            2.3 the + button will add steps to current counter's state and will be disabled at max <br />
            2.4 the - button will substract steps from current counter's state and will be disabled at min <br />

            BONUS <br />
            (includes new stuff) - create a component with inputs for min, max, initial, steps and a button <br />

            which with each click will add a new counter based on the configurations <br />
            - receive array of objects <br />
            from: 15, to: 10, color: "red"</div>
    )
}

export default Mission;