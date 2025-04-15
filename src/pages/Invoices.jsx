import React from 'react';
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Table, TableBody, TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow,
  IconButton, Collapse, Button
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ExpandMore, ExpandLess, Add} from '@mui/icons-material';

function createData(supplier, amount, items, enrichedPercentage, status, date) {
  return {
    supplier,
    amount,
    items,
    enrichedPercentage,
    status,
    date,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.supplier}
        </TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.items}</TableCell>
        <TableCell align="right">{row.enrichedPercentage}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.amount * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('Acme Corp', 1250.75, 150, 95, 'Enriched', '2025-04-14'),
  createData('Beta Industries', 875.20, 138, 37, 'Pending', '2025-04-14'),
  createData('Gamma Ltd', 2100.50, 385, 24, 'Enriched', '2025-04-14'),
  createData('Delta Inc', 550.00, 24, 67, 'Error', '2025-04-14'),
  createData('Epsilon SA', 1580.90, 81, 49, 'Enriched', '2025-04-14'),
];

export const Invoices = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h4">
          Invoices
        </Typography>
        <Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Supplier</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 340 }}>
                  <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>Supplier</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Items</TableCell>
                        <TableCell align="right">Enriched %</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <Row key={row.name} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>

              <Box sx={{display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" startIcon={<Add />}>
                  Upload test invoice
                </Button>

                <Button variant="outlined" color="primary">
                  Set up new stream
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Project</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 340 }}>
                  <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>Supplier</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Items</TableCell>
                        <TableCell align="right">Enriched %</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <Row key={row.name} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>

              <Box sx={{display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" startIcon={<Add />}>
                  Upload test invoice
                </Button>

                <Button variant="outlined" color="primary">
                  Set up new stream
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Access point provider</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 340 }}>
                  <Table stickyHeader aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>Supplier</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Items</TableCell>
                        <TableCell align="right">Enriched %</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <Row key={row.name} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>

              <Box sx={{display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" startIcon={<Add />}>
                  Upload test invoice
                </Button>

                <Button variant="outlined" color="primary">
                  Set up new stream
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  )
}
