import React, { useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Settings, Logout, Person } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  cursor: 'pointer',
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

export const AccountNavbar = ({children}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
  };

  const handleSettings = () => {
    handleClose();
  };

  const handleLogout = () => {
    handleClose();
  };

  return (
    <div>
      <Box onClick={handleClick} sx={{display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer'}}>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
        >
          <StyledAvatar sx={{
            img: {maxWidth: '100%', height: 'auto'}
          }}>
            <img
              src="https://avatars.githubusercontent.com/u/19550456"
              alt="avatar"
            />
          </StyledAvatar>
        </IconButton>
        
        {children}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </div>
  );
};