function CollapseNav(props){
    const {id, children}=props;
    return (
        <div class="collapse" id={id} aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
            <nav class="sb-sidenav-menu-nested nav">
             {children}
            </nav>
        </div>
    )
}
export default CollapseNav;