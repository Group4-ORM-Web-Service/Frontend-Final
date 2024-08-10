import React from 'react';
import Sidebar from '../../layouts/sidebar';
import '../../styles/admin.css';
import CateogryTable from './components/categoryTable';
import ProductTable from './components/productTable';

const AdminPage = () => {
    return (
        <>
            <Sidebar pageName='Admin' />
            <div className='product-list' style={{ paddingLeft: 16, paddingRight: 16, marginTop: 50 }}>
                <ProductTable />
                <CateogryTable />
            </div>
        </>
    );

}

export default AdminPage;