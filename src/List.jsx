const List = () => {
    const items = ["apple", "banana", "cherry", "date", "fig", "grape"];
    return (
    <ul>
        {items.map((i, index) => (
            <li key={index}>{i}</li>
        ))}
    </ul>
    )
}


export const FilteredList = () => {
    const items = [
      {
        id : 1,
        text: "learn react",
        completed: true,
      },
      {
        id : 2,
        text: "build ui",
        completed: false,
      },
      {
        id : 3,
        text: "fetch API",
        completed: true,
      },
    ];
    return <ul>{
      items.filter(i => i.completed === false).map(i => <li>{i.text}</li>)
      }</ul>
  };


export default List;