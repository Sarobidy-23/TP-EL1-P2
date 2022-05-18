 function NavLinkCollapsed(props){
     const {link, label} = props;
    return (
        <a class="nav-link collapsed" href={link} data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                {label}
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
    );
};
export default NavLinkCollapsed;