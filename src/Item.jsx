const Item = ({isDone}) => {
    return <div>{isDone ? "Todo" : "Done"} </div>
}

export default Item;