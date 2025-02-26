const Propagation = () => {
    const handleParent = () => alert('Parent');
    const handleChild = (event) => {
        event.stopPropagation();
        alert('Child');
    }

    return (
        <div onClick={handleParent}>
            <button onClick={handleChild}>child</button>
        </div>
    );
}

export default Propagation;