function Card(props){
    const {children} = props;
    return (
        <div className="card mb-4">
            {children}
        </div>
    )
}
export default Card;