import React, { useState } from 'react';
import Details_C from './Classes/Details_Classes';


const AddDetails = () => {
    //משתנה מסוג USESTATE שיכיל לי את האובייקט החדש
    const [newDetail, setNewDetail] = useState({ Name_Detial: ""});
    //משתנה שיבדוק אם הדילוג שלי פתוח או לא
    const [open, setOpen] = React.useState(false)

    //
    const handleChange = (field, value) => {
        setNewDetail({ ...setNewDetail, [field]: value });
    };

    // פונקציה זו תשנה לי את הפלאג לTRUE
    const handleClickOpen = () => {
        setOpen(true);
    };

    //פונקציה זו תשנה את הפונקציה לFalse
    const handleClose = () => {
        setOpen(false);
    };

    //
    const handleConfirm = () => {
        Details_C.addDetails(newDetail); // קריאה לפונקציה addServies והעברת האובייקט newService
        handleClose(); // סגירת הטופס לאחר הוספת השירות
    }

    return (
        // נעטוף את הכפתור בדיב שיארגן לנו את הכל
        <div style={{ border: '1px solid' }}>
            {!open && (
                <button onClick={handleClickOpen} variant="contained" color="primary">
                    הוסף נתון
                </button>
            )}

            {open && (
                <form>
                    <label>
                    Name_Detial:
                        <input type="text" onChange={(e) => handleChange("NameClient:", e.target.value)} />
                    </label>

                    <button onClick={handleClose} variant="contained" color="primary">
                        ביטול
                    </button>

                    <button onClick={handleConfirm} variant="contained" color="primary">
                        אישור
                    </button>

                </form>

            )}
        </div>

    )
}

export default AddDetails;
