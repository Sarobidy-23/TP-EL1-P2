function DataTable(props){
    const {label, children} = props;
    return (
        <div class="card-body">
            {label}
            {children}
        </div>
    )
}
export default DataTable;