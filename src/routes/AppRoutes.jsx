import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Integrations from "../pages/Integrations.jsx";
import {Invoices} from "../pages/Invoices.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path={'/integrations'} element={<Integrations />} />
      <Route path={'/invoices'} element={<Invoices />} />

      {/*  */}
      <Route path={'/enrichment-activity'} element={<Dashboard />} />
      <Route path={'/top-suppliers'} element={<Dashboard />} />
      <Route path={'/missing-data'} element={<Dashboard />} />
      <Route path={'/system-health'} element={<Dashboard />} />
     
      <Route path={'/all-projects'} element={<Dashboard />} />
      <Route path={'/by-industry'} element={<Dashboard />} />
      <Route path={'/templates'} element={<Dashboard />} />
      
      <Route path={'/supplier'} element={<Dashboard />} />
      <Route path={'/project'} element={<Dashboard />} />
      <Route path={'/access-point-provider'} element={<Dashboard />} />
      <Route path={'/Invoices'} element={<Dashboard />} />
      <Route path={'/items'} element={<Dashboard />} />
      <Route path={'/enrichment-status'} element={<Dashboard />} />
      
      <Route path={'/supplier-list'} element={<Dashboard />} />
      <Route path={'/CO2-status'} element={<Dashboard />} />
      <Route path={'/product-registry'} element={<Dashboard />} />
      <Route path={'/data-issues'} element={<Dashboard />} />
      
      <Route path={'/active-enrichments'} element={<Dashboard />} />
      <Route path={'/data-source-history'} element={<Dashboard />} />
      <Route path={'/add-source'} element={<Dashboard />} />
      
      <Route path={'/clients'} element={<Dashboard />} />
      <Route path={'/commission'} element={<Dashboard />} />
      <Route path={'/whitelabeling'} element={<Dashboard />} />
      <Route path={'/SLA'} element={<Dashboard />} />
      
      <Route path={'/all-integrations'} element={<Dashboard />} />
      <Route path={'/ERP'} element={<Dashboard />} />
      <Route path={'/ESG'} element={<Dashboard />} />
      <Route path={'/reporting'} element={<Dashboard />} />
      
      <Route path={'/api-keys'} element={<Dashboard />} />
      <Route path={'/webhooks'} element={<Dashboard />} />
      <Route path={'/rate-limits'} element={<Dashboard />} />
      <Route path={'/API-Explorer'} element={<Dashboard />} />
      
      <Route path={'/team'} element={<Dashboard />} />
      <Route path={'/Roles'} element={<Dashboard />} />
      <Route path={'/Audit-logs'} element={<Dashboard />} />
      <Route path={'/Invite-user'} element={<Dashboard />} />
      
      <Route path={'/Access-points'} element={<Dashboard />} />
      <Route path={'/Capture-providers'} element={<Dashboard />} />
      <Route path={'/Routing-logic'} element={<Dashboard />} />
      
      <Route path={'/Logs'} element={<Dashboard />} />
      <Route path={'/Sandbox-test'} element={<Dashboard />} />
      <Route path={'/Error-simulator'} element={<Dashboard />} />
      
      <Route path={'/Plan'} element={<Dashboard />} />
      <Route path={'/Usage'} element={<Dashboard />} />
      <Route path={'/Invoices'} element={<Dashboard />} />
      <Route path={'/Upgrade'} element={<Dashboard />} />
      
      <Route path={'/Quickstart'} element={<Dashboard />} />
      <Route path={'/API'} element={<Dashboard />} />
      <Route path={'/SDKs'} element={<Dashboard />} />
      <Route path={'/Use-cases'} element={<Dashboard />} />
      
      <Route path={'/General'} element={<Dashboard />} />
      <Route path={'/Notifications'} element={<Dashboard />} />
      <Route path={'/Branding'} element={<Dashboard />} />
      <Route path={'/Legal'} element={<Dashboard />} />
      <Route path={'/Advanced'} element={<Dashboard />} />
    </Route>
  </Routes>
);

export default AppRoutes;