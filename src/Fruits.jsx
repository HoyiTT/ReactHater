const Fruits = ({fruits}) => {
    if (fruits.length > 0) {
        return <div>{fruits.join(", ")}</div>
    }
    return null;
    
}

export default Fruits;