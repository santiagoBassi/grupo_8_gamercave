import '../assets/css/style-adminPanel.css'

import Header from "../components/Header";
import Abstract from "../components/Abstract";
import CountByCategories from '../components/CountByCategories';
import LastProduct from '../components/LastProduct';
import ProductsTable from '../components/ProductsTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div>
      <Header />
      <main className="container-content">
        <Abstract />
        <div className="container-categories-lastProduct">
          <CountByCategories />
          <LastProduct />
        </div>
        <div className="container-table-add">
          <div className="container-add-product">
            <a href="http://localhost:3030/admin/create">Nuevo Producto <FontAwesomeIcon icon={faPlus} /> </a>
          </div>
          <ProductsTable />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
