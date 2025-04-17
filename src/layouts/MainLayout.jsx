import {Outlet} from 'react-router';
import Container from "@mui/material/Container";
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import {
  Autorenew,
  AttachMoney,
  Home,
  Dashboard,
  WorkOutline,
  ReceiptLong,
  Store,
  LibraryBooks,
  BusinessCenter,
  IntegrationInstructions,
  Code,
  ManageAccounts,
  SensorDoor,
  Terminal,
  CreditCard,
  Description,
  Settings
} from '@mui/icons-material';
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

const NAVIGATION = [
  {
    kind: 'header',
    title: 'WORKFLOWS',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <Dashboard />,
    children: [
      {
        segment: 'enrichment-activity',
        title: 'Enrichment activity',
        icon: <Autorenew />,
      },
      {
        segment: 'top-suppliers',
        title: 'Top suppliers',
        icon: <Autorenew />,
      },
      {
        segment: 'missing-data',
        title: 'Missing data',
        icon: <Autorenew />,
      },
      {
        segment: 'system-health',
        title: 'System health',
        icon: <Autorenew />,
      },
    ]
  },  
  {
    segment: '',
    title: 'Projects & use cases',
    icon: <WorkOutline />,
    children: [
      {
        segment: 'all-projects',
        title: 'All projects',
        icon: <Autorenew />,
      },
      {
        segment: 'by-industry',
        title: 'By industry (construction, FMCG, etc.)',
        icon: <Autorenew />,
      },
      {
        segment: 'templates',
        title: 'Templates / repeatable setups',
        icon: <Autorenew />,
      }
    ]
  },  
  {
    segment: '',
    title: 'Invoices & transactions',
    icon: <ReceiptLong />,
    children: [
      {
        segment: 'supplier',
        title: 'Supplier',
        icon: <Autorenew />,
      },
      {
        segment: 'project',
        title: 'Project',
        icon: <Autorenew />,
      },
      {
        segment: 'access-point-provider',
        title: 'Access point provider',
        icon: <Autorenew />,
      },
      {
        segment: 'Invoices',
        title: 'Invoices',
        icon: <Autorenew />,
      },     
      {
        segment: 'items',
        title: 'Items (line-level)',
        icon: <Autorenew />,
      },  
      {
        segment: 'enrichment-status',
        title: 'Enrichment status',
        icon: <Autorenew />,
      },
    ]
  },  
  {
    segment: '',
    title: 'Suppliers',
    icon: <Store />,
    children: [
      {
        segment: 'supplier-list',
        title: 'Supplier list',
        icon: <Autorenew />,
      },
      {
        segment: 'CO2-status',
        title: 'CO₂ status',
        icon: <Autorenew />,
      },
      {
        segment: 'product-registry',
        title: 'Product registry',
        icon: <Autorenew />,
      },
      {
        segment: 'data-issues',
        title: 'Data issues',
        icon: <Autorenew />,
      }
    ]
  },  
  {
    segment: '',
    title: 'Enrichment registry',
    icon: <LibraryBooks />,
    children: [
      {
        segment: 'active-enrichments',
        title: 'Active enrichments',
        icon: <Autorenew />,
      },
      {
        segment: 'data-source-history',
        title: 'Data source history',
        icon: <Autorenew />,
      },
      {
        segment: 'add-source',
        title: 'Add source',
        icon: <Autorenew />,
      }
    ]
  },
  {
    segment: '',
    title: 'Reseller portal',
    icon: <BusinessCenter />,
    children: [
      {
        segment: 'clients',
        title: 'Clients',
        icon: <Autorenew />,
      },
      {
        segment: 'commission',
        title: 'Commission',
        icon: <Autorenew />,
      },
      {
        segment: 'whitelabeling',
        title: 'Whitelabeling',
        icon: <Autorenew />,
      },
      {
        segment: 'SLA',
        title: 'SLA/uptime',
        icon: <Autorenew />,
      }
    ]
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'CONFIGURATION',
  },
  {
    segment: '',
    title: 'Integrations',
    icon: <IntegrationInstructions />,
    children: [
      {
        segment: 'all-integrations',
        title: 'All integrations',
        icon: <Autorenew />,
      },
      {
        segment: 'ERP',
        title: 'ERP',
        icon: <Autorenew />,
      },
      {
        segment: 'ESG',
        title: 'ESG',
        icon: <Autorenew />,
      },
      {
        segment: 'reporting',
        title: 'reporting',
        icon: <Autorenew />,
      }
    ]
  }, 
  {
    segment: '',
    title: 'API & Access',
    icon: <Code />,
    children: [
      {
        segment: 'api-keys',
        title: 'API keys',
        icon: <Autorenew />,
      },
      {
        segment: 'webhooks',
        title: 'Webhooks',
        icon: <Autorenew />,
      },
      {
        segment: 'rate-limits',
        title: 'Rate limits',
        icon: <Autorenew />,
      },
      {
        segment: 'API-Explorer',
        title: 'API Explorer',
        icon: <Autorenew />,
      }
    ]
  },  
  {
    segment: '',
    title: 'Users & Roles',
    icon: <ManageAccounts />,
    children: [
      {
        segment: 'team',
        title: 'Team',
        icon: <Autorenew />,
      },
      {
        segment: 'Roles',
        title: 'Roles',
        icon: <Autorenew />,
      },
      {
        segment: 'Audit-logs',
        title: 'Audit logs',
        icon: <Autorenew />,
      },
      {
        segment: 'Invite-user',
        title: 'Invite user',
        icon: <Autorenew />,
      }
    ]
  },
  {
    segment: '',
    title: 'Access Points & Capture',
    icon: <SensorDoor />,
    children: [
      {
        segment: 'Access-points',
        title: 'Access points',
        icon: <Autorenew />,
      },
      {
        segment: 'Capture-providers',
        title: 'Capture providers',
        icon: <Autorenew />,
      },
      {
        segment: 'Routing-logic',
        title: 'Routing logic',
        icon: <Autorenew />,
      }
    ]
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'ADMIN & DEV TOOLS',
  },
  {
    segment: '',
    title: 'Developer tools',
    icon: <Terminal />,
    children: [
      {
        segment: 'Logs',
        title: 'Logs',
        icon: <Autorenew />,
      },
      {
        segment: 'Sandbox-test',
        title: 'Sandbox test',
        icon: <Autorenew />,
      },
      {
        segment: 'Error-simulator',
        title: 'Error simulator',
        icon: <Autorenew />,
      }
    ]
  },
  {
    segment: '',
    title: 'Billing & Usage',
    icon: <CreditCard />,
    children: [
      {
        segment: 'Plan',
        title: 'Plan',
        icon: <Autorenew />,
      },
      {
        segment: 'Usage',
        title: 'Usage',
        icon: <Autorenew />,
      },
      {
        segment: 'Invoices',
        title: 'Invoices',
        icon: <Autorenew />,
      },
      {
        segment: 'Upgrade',
        title: 'Upgrade',
        icon: <Autorenew />,
      }
    ]
  },
  {
    segment: '',
    title: 'Documentation',
    icon: <Description />,
    children: [
      {
        segment: 'Quickstart',
        title: 'Quickstart',
        icon: <Autorenew />,
      },
      {
        segment: 'API',
        title: 'API',
        icon: <Autorenew />,
      },
      {
        segment: 'SDKs',
        title: 'SDKs',
        icon: <Autorenew />,
      },
      {
        segment: 'Use-cases',
        title: 'Use cases',
        icon: <Autorenew />,
      }
    ]
  },
  {
    segment: '',
    title: 'Settings',
    icon: <Settings />,
    children: [
      {
        segment: 'General',
        title: 'General',
        icon: <Autorenew />,
      },
      {
        segment: 'Notifications',
        title: 'Notifications',
        icon: <Autorenew />,
      },
      {
        segment: 'Branding',
        title: 'Branding',
        icon: <Autorenew />,
      },
      {
        segment: 'Legal',
        title: 'Legal',
        icon: <Autorenew />,
      },
      {
        segment: 'Advanced',
        title: 'Advanced',
        icon: <Autorenew />,
      }
    ]
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <Home />,
  },    
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
        <DashboardLayout 
          branding={{homeUrl: '/', title: 'ImportFlow', logo: ''}}
          slots={{
            toolbarActions: Header,
            sidebarFooter: Footer,
          }}

          sx={{
            'a': {
              'span': {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                paddingRight: '1rem'
              },
            },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
          >
            <Outlet/>
          </Container>
        </DashboardLayout>
      </ReactRouterAppProvider>
    </>
  );
}

export default MainLayout