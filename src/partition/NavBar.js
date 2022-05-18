import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
function NavBar(){
    return (
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
               {/* Navbar Brand */}
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
               {/* Sidebar Toggle */}
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
               {/* Navbar Search */}
            <SearchBar/>
               {/* Navbar */}
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <DropDown label1="Settings" label2="Activity Log" label3="Logout">
                        <li><hr class="dropdown-divider" /></li>
                    </DropDown>
                </li>
            </ul>
        </nav>
    );
};
export default NavBar;