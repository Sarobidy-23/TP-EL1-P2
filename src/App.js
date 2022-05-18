import './App.css';
import SideNavLeft from './partition/SideNavLeft';
import Table from './partition/Table';
import NavBar from './partition/NavBar';
import Footer from './partition/Footer';
import DataTable from './partition/DataTable';
import Card from './partition/Card'



function App() {
  return (
    <body class="sb-nav-fixed">
        {/* navigation bar */}
        <NavBar/>

        <div id="layoutSidenav">    
            <SideNavLeft/>
            <div id="layoutSidenav_content">
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
    
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <Card>
                            <DataTable label="DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the">
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>.
                            </DataTable>
                        </Card>

                        <Card>
                            <Table/>
                        </Card>
                    </div>
                <Footer/>
            </div>
        </div>
        
    </body>
  );
}

export default App;