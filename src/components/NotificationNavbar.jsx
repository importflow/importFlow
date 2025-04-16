import React, { useState } from 'react';
import { IconButton, Badge, Menu, MenuItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { Notifications as NotificationsIcon, Email as EmailIcon, Warning as WarningIcon } from '@mui/icons-material';

export const NotificationNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [notifications] = useState([
    { id: 1, type: 'message', text: 'New message from Alex', date: '5 minutes ago' },
    { id: 2, type: 'warning', text: 'An error occurred on the server!', date: '15 minutes ago' },
    { id: 3, type: 'message', text: 'User B replied to your comment', date: '30 minutes ago' },
  ]);
  const unreadCount = notifications.length;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (id) => {
    console.log(`Уведомление с ID ${id} было прочитано`);
    // Здесь может быть ваша логика обработки клика по уведомлению
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="show new notifications"
        color="inherit"
        onClick={handleClick}
      >
        <Badge badgeContent={unreadCount > 0 ? unreadCount : null} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 28, // Немного смещаем "стрелочку"
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
        {notifications.length === 0 ? (
          <MenuItem disabled>
            <ListItemText primary="Нет новых уведомлений" />
          </MenuItem>
        ) : (
          notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={() => handleNotificationClick(notification.id)}>
              <ListItemIcon>
                {notification.type === 'message' && <EmailIcon fontSize="small" color={'success'} />}
                {notification.type === 'warning' && <WarningIcon fontSize="small" color={'error'}/>}
                {/* Добавьте другие иконки для разных типов уведомлений */}
              </ListItemIcon>
              <ListItemText primary={notification.text} secondary={notification.date} />
            </MenuItem>
          ))
        )}
        {notifications.length > 0 && (
          <Divider />
        )}
        {notifications.length > 0 && (
          <MenuItem onClick={handleClose}>
            <ListItemText primaryTypographyProps={{ color: 'primary' }} align="center">
              View all notifications
            </ListItemText>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};