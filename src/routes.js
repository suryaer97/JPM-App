import React from 'react';

const CatalogSearch = React.lazy(() => import('./pages/catalog-search/CatalogSearch'));
const Merchant = React.lazy(() => import('./pages/Merchant'));
const Reports = React.lazy(() => import('./pages/Reports'));
const System = React.lazy(() => import('./pages/System'));
const Admin = React.lazy(() => import('./pages/Admin'));
const Support = React.lazy(() => import('./pages/Support'));

const routes = [
{path: 'Home', name: 'Home', element:CatalogSearch},
{path: 'Merchant', name: 'Merchant', element:Merchant},
{path: 'Reports', name: 'Reports', element:Reports},
{path: 'System', name: 'System', element:System},
{path: 'Admin', name: 'Admin', element:Admin},
{path: 'Support', name: 'Support', element:Support},
];

export default routes;