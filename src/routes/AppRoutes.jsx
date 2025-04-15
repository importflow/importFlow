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
    </Route>
  </Routes>
);

export default AppRoutes;