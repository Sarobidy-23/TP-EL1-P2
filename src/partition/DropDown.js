function DropDown(props){
    const { label1, label2, label3, children } = props;
    return (
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#!">{label1}</a></li>
            <li><a class="dropdown-item" href="#!">{label2}</a></li>
            {children}
            <li><a class="dropdown-item" href="#!">{label3}</a></li>
        </ul>
    )
}
export default DropDown;