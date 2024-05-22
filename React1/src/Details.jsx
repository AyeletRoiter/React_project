import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import LoginForm from './Login';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MeetingShow from './Meeting';
import AddDetails from './AddDetails';


export default function AccountMenu({ isAdmin }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMeetingDialog, setOpenMeetingDialog] = React.useState(false);
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenMeetingDialog = () => {
    setOpenMeetingDialog(true);
  };

  const handleCloseMeetingDialog = () => {
    setOpenMeetingDialog(false);
  };

  const handleClickOpenDetailsDialog = () => {
    setOpenDetailsDialog(true);
  };

  const handleCloseDetailsDialog = () => {
    setOpenDetailsDialog(false);
  };

  const handleClickOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ position: 'fixed', top: 0, right: 0, zIndex: 999, display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ minWidth: 100, marginRight: '8px' }}>Ayelet</Typography>
        <Typography sx={{ minWidth: 100, marginRight: '8px' }}>roiterayelet@gmail.com</Typography>
        <Typography sx={{ minWidth: 100, marginRight: '8px' }}>0527183718</Typography>
        {!isAdmin && (
          <Tooltip title="Account settings">
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={handleClickOpenLoginDialog}>
                Login
              </Button>
              <Dialog
                open={openLoginDialog}
                onClose={handleCloseLoginDialog}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleCloseLoginDialog();
                  },
                }}
              >
                <DialogTitle>Login Page</DialogTitle>
                <DialogContent>
                  <LoginForm />
                </DialogContent>
              </Dialog>
            </Stack>
          </Tooltip>
        )}
        {isAdmin && (
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
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
              mr: 2,
            },
            '&::before': {
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
        <MenuItem onClick={handleClickOpenDetailsDialog}>
          <Avatar /> עריכה
        </MenuItem>
        <MenuItem onClick={handleClickOpenMeetingDialog}>
          <Avatar  /> הפגישות שלי
        </MenuItem>
      </Menu>
      <Dialog
        open={openMeetingDialog}
        onClose={handleCloseMeetingDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleCloseMeetingDialog();
          },
        }}
      >
        <DialogTitle>Meeting Page</DialogTitle>
        <DialogContent>
          <MeetingShow />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openDetailsDialog}
        onClose={handleCloseDetailsDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleCloseDetailsDialog();
          },
        }}
      >
        <DialogTitle>Details Page</DialogTitle>
        <DialogContent>
          <AddDetails />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
