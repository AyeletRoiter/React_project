import Meeting_Class from './Classes/Meeting_Class';
import { observer } from 'mobx-react-lite';
import AddMeeting from "./AddMeeting";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const MeetingShow = observer(() => {
  const Meetinglist = Meeting_Class.MeetingList;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={containerStyle}>
      {Meetinglist.map((meet, index) => (
        <div key={index} style={textStyle}>
          <h5>User Name: {meet.NameClient}</h5>
          <p>Description: {meet.MeetDescription}</p>
          <p>Date: {meet.Date instanceof Date ? meet.Date.toLocaleDateString() : new Date(meet.Date).toLocaleDateString()}</p>
          
            <Button variant="outlined" onClick={handleClickOpen}>
              Delete
            </Button>
          
        </div>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <AddMeeting handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
});

const containerStyle = {
  // Your container styles here
};

const textStyle = {
  border: '1px solid',
  padding: '10px',
  margin: '10px 0'
};

export default MeetingShow;

