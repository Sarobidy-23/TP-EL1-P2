function CarHeader(props){
    const {label} = props;
    return (
        <div class="card-header">
            <i class="fas fa-table me-1"></i>
            {label}
        </div>
    );
};
export default CarHeader;