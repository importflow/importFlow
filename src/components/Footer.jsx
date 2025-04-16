import React from 'react';
import Box from '@mui/material/Box';
import {AccountNavbar} from "./AccountNavbar.jsx";
import {Divider, Typography} from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{py: 2}}>
      <Divider sx={{mb: 2}}/>

      <AccountNavbar>
        <Box>
          <Typography variant="body2" gutterBottom sx={{ display: 'block' }}>
            John Doe
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
            johnDoe@gmail.com
          </Typography>          
        </Box>
      </AccountNavbar>
    </Box>
  );
}
