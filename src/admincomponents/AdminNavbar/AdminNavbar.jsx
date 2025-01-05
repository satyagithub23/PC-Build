import { Link } from 'react-router-dom'
import './AdminNavbar.css'

const AdminNavbar = () => {
  return (
    <>
      <div className="admin-navbar-main-container">
        <ul>
          <li><Link to={'/admin/dashboard'}>Dashboard</Link></li>
          <li><Link to={'/admin/categories'}>Categories</Link></li>
          <li><Link to={'/admin/products'}>Products</Link></li>
          <li><Link to={'/admin/sales'}>Sales</Link></li>
          <li><Link to={'/admin/customers'}>Customers</Link></li>
          <li><Link to={'/admin/reviews'}>Reviews</Link></li>
        </ul>
      </div>
    </>
  )
}

export default AdminNavbar