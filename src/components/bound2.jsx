const Bound2 = ({ counter }) => {
  const ranges = [
    {
      from: -10,
      to: 0,
      color: "crimson",
    },
    {
      from: 1,
      to: 6,
      color: "yellow",
    },
    {
      from: 7,
      to: 14,
      color: "skyblue",
    },
    {
      from: 15,
      to: 21,
      color: "orange",
    },
  ];

  const match = ranges.find(({ from, to }) => from <= counter && to >= counter);
  if (match) {
    return (
      <div
        style={{
          width: 30,
          hight: 30,
          borderRadius: "50%",
          backgroundColor: match.color,
        }}
      ></div>
    );
  }
};

export default Bound2;
