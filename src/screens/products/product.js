import React from 'react';
import '../../styles/product.css'
import Button from '@mui/material/Button';

const ProductPage = () => {
return (
    <>
    <div className="content">
        <h2>Product</h2>
        <Button size="small" variant="contained">Create</Button>
    </div>
    <div className="tables">
    <div>
    </div>
        <table className="table  table-striped table-bordered table-hover table-checkable order-column dataTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th className='btn-action'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123434</td>
                    <td>123434</td>
                    <td>
                        <span className="name">Titanuim streak wedding band</span>
                    </td>
                    <td>Rings</td>
                    <td className='btn-action'>
                        <button type="button" className="btn btn-danger">
                            Delete    
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div></>
    );
}

export default ProductPage;