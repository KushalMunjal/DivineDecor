import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        try {
            const response = await fetch('https://divinedecorbackend.onrender.com/api/products/all');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.imageUrl} alt={rowData.name} className="product-image" style={{ width: '64px', height: '64px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return rowData.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    };

    const ratingBodyTemplate = (rowData) => {
        return rowData.rating;
    };

    const statusBodyTemplate = (rowData) => {
        return rowData.status;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Products</h4>
            <div>
                <i className="pi pi-search mr-2"></i>
                <input type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </div>
        </div>
    );

    return (
        <DefaultLayout>
           <Breadcrumb pageName="Products" />
            <div>
                <Toast ref={toast} />
                <div className="card">
                    <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="_id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header} className="p-datatable-dark">
                        <Column selectionMode="multiple" exportable={false} style={{ width: '3em' }}></Column>
                        <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                        <Column field="imageUrl" header="Image" body={imageBodyTemplate}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                        <Column field="status" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                    </DataTable>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Products;
