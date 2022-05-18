import NavLink from "./NavLink";
import NavLinkCollapsed from "./NavLinkCollapsed";
import CollapseNav from "./CollapseNav";

function SideNavLeft(){
    return (
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">

                    {/* Core */}
                    <div class="sb-sidenav-menu-heading">Core</div>
                    <NavLink link="index.html" label="Dashboard">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    </NavLink>
    
                     {/* Interface */}
                    <div class="sb-sidenav-menu-heading">Interface</div>
                    <NavLinkCollapsed link='#' label='Layouts'/>
                    <CollapseNav id="collapseLayouts">
                        <NavLink link="layout-static.html" label="Static Navigation"/>
                        <NavLink link="layout-sidenav-light.html" label="Light Sidenav"/>
                    </CollapseNav>
                    <NavLinkCollapsed link='#' label='pages'/>
                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                           <NavLinkCollapsed link='#' label='Authentifiaction'/>
                            
                            <CollapseNav id="pagesCollapseAuth">
                                <NavLink link="login.html" label="Login"/>
                                <NavLink link="register.html" label="Register"/>
                                <NavLink link="password.html" label="Forgot Password"/>
                            </CollapseNav>
                            
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            
                                <CollapseNav id="pagesCollapseError">
                                    <NavLink link="401.html" label="401 Page"/>
                                    <NavLink link="404.html" label="404 Page"/>
                                    <NavLink link="500.html" label="500 Page"/>
                                </CollapseNav>
                        </nav>
                    </div>

                     {/* Addons */}
                    <div class="sb-sidenav-menu-heading">Addons</div>
                    <NavLink link="charts.html" label="Charts">
                       <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                    </NavLink>
                    
                    <NavLink link="tables.html" label="Tables">
                       <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                    </NavLink>

                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>
    </div>
    );
};
export default SideNavLeft;