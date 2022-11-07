const Boundaries = ({ counter }) => {
    const ranges = [
        {
            from: -30,
            to: 5,
            color: 'pink',
        },
        {
            from: 6,
            to: 11,
            color: 'skyblue',
        },
        {
            from: 12,
            to: 21,
            color: 'crimson',
        },
        {
            from: 22,
            to: 35,
            color: 'orange',
        },
        {
            from: 36,
            to: 56,
            color: 'red',
        },
    ];

    const match = ranges.find(range => range.from <= counter && range.to >= counter);
    if (match) {
        return (
            <div style={{ backgroundColor: match.color, fontSize: 50 }}>{match.color}</div>
        )
    }
    return (
        <div>no find nothing</div>
    )
}

export default Boundaries;



