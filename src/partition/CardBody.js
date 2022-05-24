
function CardTable(props){
    var {children} = props;
    return (
        <div className="card-body">
            <table id="datatablesSimple">
                {children}
            </table>
        </div>
    )
}
export default CardTable;