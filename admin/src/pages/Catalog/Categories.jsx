import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

const Categories = () => {
    // Replace this static data with your own
    const customers = [
        { id: 1, name: 'Divine', country: { name: '', code: 'C1' }, representative: { name: 'Representative 1', image: 'representative1.png' }, status: 'in-stock', verified: true },
        { id: 2, name: 'Freedom Fighter', country: { name: '', code: 'C2' }, representative: { name: 'Representative 2', image: 'representative2.png' }, status: 'Outof-stock', verified: false },
        { id: 1, name: 'Ancient', country: { name: '', code: 'C1' }, representative: { name: 'Representative 1', image: 'representative1.png' }, status: 'in-stock', verified: true },
        { id: 2, name: 'Animal', country: { name: '', code: 'C2' }, representative: { name: 'Representative 2', image: 'representative2.png' }, status: 'Outof-stock', verified: false },
        { id: 1, name: 'Pillars', country: { name: '', code: 'C1' }, representative: { name: 'Representative 1', image: 'representative1.png' }, status: 'in-stock', verified: true },
        { id: 2, name: 'Mandaps', country: { name: '', code: 'C2' }, representative: { name: 'Representative 2', image: 'representative2.png' }, status: 'Outof-stock', verified: false },
    ];

    const [filters, setFilters] = useState({
        global: { value: null },
        name: { value: null },
        'country.name': { value: null },
        representative: { value: null },
        status: { value: null },
        verified: { value: null }
    });

    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} />;
    };

    const verifiedBodyTemplate = (rowData) => {
        return <TriStateCheckbox value={rowData.verified} />;
    };

    const header = renderHeader();

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Categories" />
            <div className="card">
                <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading} globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                    <Column field="name" header="Category" filter filterPlaceholder="Search by Category" style={{ minWidth: '12rem' }} />
                    <Column header="Category Type" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by Category type" />
                    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate} />
                    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} />
                    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} />
                </DataTable>
            </div>
        </DefaultLayout>
    );
};

export default Categories;
