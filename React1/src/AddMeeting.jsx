import React, { useState } from 'react';
import Meeting_Class from './Classes/Meeting_Class';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AddMeeting = ({ handleClose }) => {
    //הגדרת המשתנה 
    const [newMeeting, setNewMeeting] = useState({
        NameClient: "",
        MeetDescription: "",
        Date: ""
    });

    //המרת התאריך לסטרינג
    const handleChange = (field, value) => {
        if (field === "Date") {
            setNewMeeting({ ...newMeeting, [field]: value }); // שימוש בפורמט תאריך כחרוז פשוט
        } else {
            setNewMeeting({ ...newMeeting, [field]: value });
        }
    };
    

    //הוא שולח את האוביקט newMeeting למחלקה
    const handleConfirm = async () => {
        try {
            await Meeting_Class.addMeeting(newMeeting);
            handleClose();
        } catch (error) {
            console.log("Failed to add Meeting: " + error);
        }
    };

    return (
        <div style={{ border: '1px solid' }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={(e) => handleChange("NameClient", e.target.value)} id="outlined-basic" label="NameClient" variant="outlined" />
                <TextField onChange={(e) => handleChange("MeetDescription", e.target.value)} id="outlined-basic" label="MeetDescription" variant="outlined" />
                <TextField
                    type="date"
                    onChange={(e) => handleChange("Date", e.target.value)}
                    id="outlined-basic"
                    label="Date"
                    variant="outlined"
                />
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" onClick={handleClose}>ביטול</Button>
                    <Button variant="outlined" onClick={handleConfirm}>שמור</Button>
                </Stack>
            </Box>
        </div>
    );
};

export default AddMeeting;
