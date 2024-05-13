import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const MandapOrders = () => {
    const [orders, setOrders] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        fetchOrderData();
    }, []);

    const fetchOrderData = async () => {
        try {
            const response = await fetch('https://divinedecorbackend.onrender.com/api/mandap/getmandapbookings');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching order data:', error);
        }
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Mandap Orders</h4>
            <div>
                <i className="pi pi-search mr-2"></i>
                <input type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </div>
        </div>
    );

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Mandap Orders" />
            <div>
                <Toast ref={toast} />
                <div className="card">
                    <DataTable ref={dt} value={orders} dataKey="_id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header} className="p-datatable-dark">
                        <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="email" header="Email" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="phoneNumber" header="Phone Number" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="date" header="Date" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="location" header="Location" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="decorations" header="Decorations" sortable style={{ minWidth: '16rem' }}></Column>
                        <Column field="additionalRequirements" header="Additional Requirements" sortable style={{ minWidth: '16rem' }}></Column>
                    </DataTable>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default MandapOrders;
