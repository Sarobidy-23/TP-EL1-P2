function NavLink(props){
    const {link, label, children} = props;
    return(
        <a class="nav-link" href={link}>{children}{label}</a>
    );
}
export default NavLink;