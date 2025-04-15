import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Chip,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
} from '@mui/material';
import {
  InsertChart,
  Assignment,
  Factory,
  PieChart,
  Add,
  PersonAdd,
} from '@mui/icons-material';

import {DataGrid} from '@mui/x-data-grid'

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = React.useState('last7Days');
  const [activeTab, setActiveTab] = React.useState(0);

  const recentTransactions = [
    { id: 1, invoiceId: 'INV-001', supplier: 'Acme Corp', amount: '$1,200', status: 'Enriched' },
    { id: 2, invoiceId: 'INV-002', supplier: 'Beta Industries', amount: '$850', status: 'Pending' },
    { id: 3, invoiceId: 'INV-003', supplier: 'Gamma Ltd', amount: '$2,500', status: 'Enriched' },
    { id: 4, invoiceId: 'INV-004', supplier: 'Delta Inc', amount: '$500', status: 'Error' },
    { id: 5, invoiceId: 'INV-005', supplier: 'Epsilon SA', amount: '$1,800', status: 'Enriched' },
  ];
  const columns = [
    { field: 'invoiceId', headerName: 'Invoice ID', width: 150 },
    { field: 'supplier', headerName: 'Supplier', width: 200 },
    { field: 'amount', headerName: 'Amount', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => {
        let color = '';
        switch (params.value.toLowerCase()) {
          case 'enriched':
            color = 'success';
            break;
          case 'pending':
            color = 'warning';
            break;
          case 'error':
            color = 'error';
            break;
          default:
            color = 'default';
        }
        return <Chip label={params.value} color={color} size="small" />;
      },
    },
  ];

  const handleTimeFilterChange = (event) => {
    setTimeFilter(event.target.value);
    // Тут буде логіка для оновлення даних на основі фільтра часу
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography variant="h4">
        Platform Overview
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="dashboard tabs">
          <Tab label="Key Metrics" />
          <Tab label="Recent Activity" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid size={{xs: 12, sm: 6, md: 3}}>
              <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">1,256</Typography>
                  <Typography color="textSecondary">Enriched Invoices This Week</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{xs: 12, sm: 6, md: 3}}>
              <Card align={'center'}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Factory color="secondary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">450</Typography>
                  <Typography color="textSecondary">Active Supplier Coverage</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{xs: 12, sm: 6, md: 3}}>
              <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Assignment color="info" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">SAP, Oracle, NetSuite</Typography>
                  <Typography color="textSecondary">Top Consuming ERPs</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{xs: 12, sm: 6, md: 3}}>
              <Card>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <PieChart color="success" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">78%</Typography>
                  <Typography color="textSecondary">% with CO₂, EPD, ISO</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }}>

            <Grid size={{xs: 12, sm: 6}}>
              <Card>
                <CardContent align={'center'}>
                  <Typography variant="h6" gutterBottom>
                    % of Line Items Enriched
                  </Typography>
                  <Box sx={{ position: 'relative', display: 'inline-flex'}}>
                    <CircularProgress variant="determinate" value={85} size={250} thickness={2}/>
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="h5" component="div" color="textSecondary">
                        85%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Overall progress of line item enrichment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}

      {activeTab === 1 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Alert severity="warning">
            Missing data for 3 suppliers. Please check their integration status.
          </Alert>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel id="time-filter-label">Time Period</InputLabel>

                <Select
                  labelId="time-filter-label"
                  id="time-filter"
                  value={timeFilter}
                  label="Time Period"
                  onChange={handleTimeFilterChange}
                >
                  <MenuItem value="last7Days">Last 7 Days</MenuItem>
                  <MenuItem value="last30Days">Last 30 Days</MenuItem>
                  <MenuItem value="custom">Custom</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid rows={recentTransactions} columns={columns} pageSize={10} rowsPerPageOptions={[5, 10]} />
            </div>

            <Box sx={{display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" startIcon={<Add />}>
                Add New Stream
              </Button>
              
              <Button variant="outlined" color="primary" startIcon={<PersonAdd />}>
                Invite Supplier
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;