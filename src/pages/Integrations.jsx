import React, {useState} from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle,
  Grid, Step, StepLabel, Stepper,
  Typography
} from "@mui/material";
import {Check, InsertChart} from "@mui/icons-material";
import Button from "@mui/material/Button";

const steps = [
  'Select ERP type',
  'Define invoice source (e.g., XML over Peppol, Capture system)',
  'Choose enrichment output format',
  'Test and confirm',
];

const Integrations = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography variant="h4">
        Integrations
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, position: 'relative', pt: 6}}>
              <Chip icon={<Check />} label="connected" color="success" variant="outlined" sx={(theme) => ({
                alignSelf: 'flex-start',
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2)
              })}/>
              
              <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Microsoft Dynamics</Typography>
              
              <Button variant="outlined" disabled sx={{mt: 3}}>
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>
       
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, position: 'relative', pt: 6}}>
              <Chip label="available" color="info" variant="outlined" sx={(theme) => ({
                alignSelf: 'flex-start',
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2)
              })}/>

              <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Visma</Typography>

              <Button variant="outlined" sx={{mt: 3}} onClick={() => setIsOpen(true)}>
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, position: 'relative', pt: 6}}>
              <Chip label="coming soon" color="secondary" variant="outlined" sx={(theme) => ({
                alignSelf: 'flex-start',
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2)
              })}/>

              <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Tripletex</Typography>

              <Button variant="outlined" disabled sx={{mt: 3}}>
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, position: 'relative', pt: 6}}>
              <Chip label="available" color="info" variant="outlined" sx={(theme) => ({
                alignSelf: 'flex-start',
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2)
              })}/>

              <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">PowerBI</Typography>

              <Button variant="outlined" sx={{mt: 3}}>
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, position: 'relative', pt: 6}}>
              <Chip label="coming soon" color="secondary" variant="outlined" sx={(theme) => ({
                alignSelf: 'flex-start',
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2)
              })}/>

              <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Reduzer</Typography>

              <Button variant="outlined" disabled sx={{mt: 3}}>
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Card>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, position: 'relative', pt: 6}}>
              <Chip icon={<Check />} label="connected" color="success" variant="outlined" sx={(theme) => ({
                alignSelf: 'flex-start',
                position: 'absolute',
                top: theme.spacing(2),
                left: theme.spacing(2)
              })}/>

              <InsertChart color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Ignite</Typography>

              <Button variant="outlined" disabled sx={{mt: 3}}>
                Connect
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogTitle>Setup Wizard</DialogTitle>
        <DialogContent>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button type="submit">Connect</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Integrations;