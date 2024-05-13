import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const MurtiOrders = () => {
    const [products, setProducts] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        try {
            const response = await fetch('https://divinedecorbackend.onrender.com/api/murti/getmurtibookings');
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

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Murti Orders</h4>
            <div>
                <i className="pi pi-search mr-2"></i>
                <input type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </div>
        </div>
    );

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Murti Orders" />
            <div>
                <Toast ref={toast} />
                <div className="card">
                    <DataTable ref={dt} value={products} dataKey="_id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header} className="p-datatable-dark">
                        <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="email" header="Email" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="phoneNumber" header="Phone Number" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="height" header="Height" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="material" header="Material" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="additionalRequirements" header="Additional Requirements" sortable style={{ minWidth: '16rem' }}></Column>
                    </DataTable>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default MurtiOrders;
