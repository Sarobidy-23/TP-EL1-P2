 function NavLinkCollapsed(props){
     const {ClassIcon, link, label, DataBsTarget} = props;
    return (
        <a class="nav-link collapsed" href={link} data-bs-toggle="collapse" data-bs-target={DataBsTarget} aria-expanded="false" aria-controls="collapsePages">
            <div class="sb-nav-link-icon"><i class={ClassIcon}></i></div>
                {label}
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
    );
};
export default NavLinkCollapsed;