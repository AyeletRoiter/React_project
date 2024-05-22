import React, { useState } from 'react';
import Service from "./Classes/Services_Class"


const AddService = () => {
  //משתנה מסוג USESTATE שיכיל לי את האובייקט החדש
  const [newService, setNewService] = useState({ serviceName: "", serviceDescription: "", price: 0, image: "" });
  //משתנה שיבדוק אם הדילוג שלי פתוח או לא
  const [open, setOpen] = React.useState(false)

  //
  const handleChange = (field, value) => {
    setNewService({ ...newService, [field]: value });
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
    Service.addServies(newService); // קריאה לפונקציה addServies והעברת האובייקט newService
    handleClose(); // סגירת הטופס לאחר הוספת השירות
  }

  return (
    // נעטוף את הכפתור בדיב שיארגן לנו את הכל
    <div style={{ border: '1px solid' }}>
      {!open && (
        <button  onClick={handleClickOpen} variant="contained" color="primary">
          הוסף יעד
        </button>
      )}
        
      {open && (
        <form>
          <label>
            Service Name:
            <input type="text" onChange={(e) => handleChange("serviceName", e.target.value)} />
          </label>

          <label>
            serviceDescription
            <input type="text" onChange={(e) => handleChange("serviceDescription", e.target.value)} />
          </label>

          <label>
            price
            <input type="number" onChange={(e) => handleChange("price", e.target.value)} />
          </label>

          <label>
            image
            <input type="text" onChange={(e) => handleChange("image", e.target.value)} />
          </label>

          <button onClick={handleClose}  variant="contained" color="primary">
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

export default AddService;
