import Service from "./Classes/Services_Class";
import { observer } from 'mobx-react-lite';
import AddMeeting from "./AddMeeting";
import React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export const ServiceShow = observer(({ isAdmin }) => {
  const ServiceList = Service.ServiesList;

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const squareStyle = {
    border: '1px solid',
    width: '200px',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    display: 'flex', // הוספת עיצוב CSS כדי להשתמש ב-Flexbox
    flexDirection: 'column', // הוספת עיצוב CSS כדי להשתמש ב-Flexbox
  };

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    alignSelf: 'flex-start', // הוספת עיצוב CSS כדי להעמיד את התמונה בראש
  };

  const textStyle = {
    marginTop: 'auto', // הוספת עיצוב CSS כדי ליצור מרווח מעל לטקסט
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={containerStyle}>
      {ServiceList.map((service) => (
        <div key={service.id} style={squareStyle}>
          <img src={service.image} style={imgStyle} alt={service.serviceName} />
          <div style={textStyle}>
            <h5>טיסה ל{service.serviceName}</h5>
            <p>{service.serviceDescription}</p>
            <p>מחיר: {service.price}</p>
            {!isAdmin && (
            <Button variant="outlined" onClick={handleClickOpen}>
              הוסף פגישה
            </Button>)}
          </div>
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
