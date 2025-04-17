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
  Storage as StorageIcon,
  History as HistoryIcon,
  Description,
  Settings,
  Palette,
  Policy,
  Business,
  NotificationsNone,
  Subscriptions,
  DataUsage,
  RequestQuote,
  TrendingUp,
  Science,
  BugReport,
  ReportProblem,
  Hub,
  PictureAsPdf,
  AltRoute,
  Group,
  Security,
  PersonAdd,
  VpnKey,
  Http,
  Speed,
  Search,
  AccountTree,
  Insights,
  Router as RouterIcon,
  Extension,
  People,
  Schedule,
  Brush,
  AddCircleOutline,
  Timeline,
  CheckCircleOutline,
  TrackChanges,
  ErrorOutline, Inventory2, BarChart, ViewList, DashboardCustomize, Layers, FolderOpen
} from '@mui/icons-material';
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

const NAVIGATION = [
  {
    kind: 'header',
    title: 'WORKFLOWS',
  },
  // {
  //   segment: '',
  //   title: 'Dashboard',
  //   icon: <Dashboard />,
  //   children: [
  //     {
  //       segment: 'enrichment-activity',
  //       title: 'Enrichment activity',
  //       icon: <Autorenew />,
  //     },
  //     {
  //       segment: 'top-suppliers',
  //       title: 'Top suppliers',
  //       icon: <Autorenew />,
  //     },
  //     {
  //       segment: 'missing-data',
  //       title: 'Missing data',
  //       icon: <Autorenew />,
  //     },
  //     {
  //       segment: 'system-health',
  //       title: 'System health',
  //       icon: <Autorenew />,
  //     },
  //   ]
  // },  
  {
    segment: '',
    title: 'Projects & use cases',
    icon: <WorkOutline />,
    children: [
      {
        segment: 'active-projects',
        title: 'Active Projects',
        icon: <FolderOpen />,
      },
      {
        segment: 'templates',
        title: 'Templates',
        icon: <Layers />,
      },
      {
        segment: 'project-status',
        title: 'Project Status',
        icon: <DashboardCustomize />,
      }
    ]
  },  
  {
    segment: '',
    title: 'Invoices & transactions',
    icon: <ReceiptLong />,
    children: [
      {
        segment: 'invoices',
        title: 'Invoices',
        icon: <ReceiptLong />,
      },
      {
        segment: 'line-items',
        title: 'Line Items',
        icon: <ViewList />,
      },
      {
        segment: 'enrichment-status',
        title: 'Enrichment Status',
        icon: <BarChart />,
      }
    ]
  },  
  {
    segment: '',
    title: 'Suppliers',
    icon: <Store />,
    children: [
      {
        segment: 'supplier-list',
        title: 'Supplier List',
        icon: <Store />,
      },
      {
        segment: 'product-data',
        title: 'Product Data',
        icon: <Inventory2 />,
      },
      {
        segment: 'missing-data',
        title: 'Missing Data',
        icon: <ErrorOutline />,
      },
      {
        segment: 'epd-coverage',
        title: 'EPD Coverage',
        icon: <TrackChanges />,
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
        title: 'Active Enrichments ',
        icon: <CheckCircleOutline />,
      },
      {
        segment: 'data-source-history',
        title: 'Data Sources',
        icon: <StorageIcon />,
      },
      {
        segment: 'source-history',
        title: 'Source History',
        icon: <Timeline />,
      },
      {
        segment: 'add-source',
        title: 'Add Source',
        icon: <AddCircleOutline />,
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
        icon: <People />,
      },
      {
        segment: 'commission',
        title: 'Commission',
        icon: <AttachMoney />,
      },
      {
        segment: 'sla-monitoring',
        title: 'SLA Monitoring ',
        icon: <Schedule />,
      },
      {
        segment: 'branding',
        title: 'Branding',
        icon: <Brush />,
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
        segment: 'erp-systems',
        title: 'ERP Systems',
        icon: <AccountTree />,
      },
      {
        segment: 'analytics-esg',
        title: 'Analytics / ESG',
        icon: <Insights />,
      },
      {
        segment: 'webhook-destinations',
        title: 'Webhook Destinations',
        icon: <RouterIcon />,
      },
      {
        segment: 'custom-integrations',
        title: 'Custom Integrations',
        icon: <Extension />,
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
        title: 'API Keys',
        icon: <VpnKey />,
      },
      {
        segment: 'webhooks',
        title: 'Webhooks',
        icon: <Http />,
      },
      {
        segment: 'rate-limits',
        title: 'Rate limits',
        icon: <Speed />,
      },
      {
        segment: 'API-Explorer',
        title: 'API Explorer',
        icon: <Search />,
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
        icon: <Group />,
      },
      {
        segment: 'Roles',
        title: 'Roles',
        icon: <Security />,
      },
      {
        segment: 'Audit-logs',
        title: 'Audit logs',
        icon: <HistoryIcon />,
      },
      {
        segment: 'Invite-user',
        title: 'Invite user',
        icon: <PersonAdd />,
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
        title: 'Access Point Providers',
        icon: <Hub />,
      },
      {
        segment: 'Capture-systems',
        title: 'Capture Systems',
        icon: <PictureAsPdf />,
      },
      {
        segment: 'Routing-logic',
        title: 'Routing Rules',
        icon: <AltRoute />,
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
        segment: 'sandbox',
        title: 'Sandbox',
        icon: <Science />,
      },
      {
        segment: 'test-payload',
        title: 'Test Payload',
        icon: <BugReport />,
      },
      {
        segment: 'Error-simulator',
        title: 'Error Simulator',
        icon: <ReportProblem />,
      },
      {
        segment: 'cli-sdk',
        title: 'CLI / SDK',
        icon: <Terminal />,
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
        title: 'Plan Overview',
        icon: <Subscriptions />,
      },
      {
        segment: 'Usage',
        title: 'Usage History',
        icon: <DataUsage />,
      },
      {
        segment: 'Invoices',
        title: 'Invoices',
        icon: <RequestQuote />,
      },
      {
        segment: 'Upgrade',
        title: 'Upgrade',
        icon: <TrendingUp />,
      }
    ]
  },
  // {
  //   segment: '',
  //   title: 'Documentation',
  //   icon: <Description />,
  //   children: [
  //     {
  //       segment: 'Quickstart',
  //       title: 'Quickstart',
  //       icon: <Autorenew />,
  //     },
  //     {
  //       segment: 'API',
  //       title: 'API',
  //       icon: <Autorenew />,
  //     },
  //     {
  //       segment: 'SDKs',
  //       title: 'SDKs',
  //       icon: <Autorenew />,
  //     },
  //     {
  //       segment: 'Use-cases',
  //       title: 'Use cases',
  //       icon: <Autorenew />,
  //     }
  //   ]
  // },
  {
    segment: '',
    title: 'Settings',
    icon: <Settings />,
    children: [
      {
        segment: 'General',
        title: 'General',
        icon: <Settings />,
      },
      {
        segment: 'Notifications',
        title: 'Notifications',
        icon: <NotificationsNone />,
      },
      {
        segment: 'Branding',
        title: 'Company Info',
        icon: <Business />,
      },
      {
        segment: 'Legal',
        title: 'Compliance',
        icon: <Policy />,
      },
      {
        segment: 'Advanced',
        title: 'Brand & Theme',
        icon: <Palette />,
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