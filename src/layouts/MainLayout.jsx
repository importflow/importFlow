import {Outlet} from 'react-router';
// import {Header} from "../components/Header";
import Container from "@mui/material/Container";
import {Footer} from "../components/Footer.jsx";
// import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import {
  Home,
  Autorenew,
  AttachMoney
} from '@mui/icons-material';

const NAVIGATION = [
  // {
  //
  //   title: 'ImportFlow',
  //   icon: <Home />,
  // },  
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <Autorenew />,
  },  
  {
    segment: 'invoices',
    title: 'Invoices',
    icon: <AttachMoney />,
  },
];

const MainLayout = () => {
  return (
    <>
      <ReactRouterAppProvider navigation={NAVIGATION}>
        <DashboardLayout branding={{homeUrl: '/', title: 'ImportFlow', logo: ''}}>
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
          >
            <Outlet/>
          </Container>
        </DashboardLayout>
        {/*<Header></Header>*/}
      </ReactRouterAppProvider>
      {/*<Footer/>*/}
    </>
  );
}

export default MainLayout