
function CardTable(props){
    var {children} = props;
    return (
        <div class="card-body">
            <table id="datatablesSimple">
                {children}
            </table>
        </div>
    )
}
export default CardTable;