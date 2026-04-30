function student(props ) {
    return (
        <>
        <h2>This is Student Component of Functional Component</h2>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <h3>it can only return once </h3>
        </>
    )
}export default student