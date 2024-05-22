import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const nameRef = useRef();
    const passwordRef = useRef();
    const url = "http://localhost:8787";
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // השימוש בפונקציה useNavigate

    async function post() {
        try {
            const res = await fetch(url + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: nameRef.current.value, password: passwordRef.current.value })
            });
            const data = await res.text();
            console.log(data);
            if (res.ok) {
                console.log('you are connected!!:)')
                setIsLoggedIn(true);
                navigate("/Admin"); // קריאה לפונקציה navigate כאשר ההתחברות מצליחה
            } else {
                console.log('Login failed:(');
            }
        } catch (err) {
            console.log('login failed🙄 ' + err);
        }
    }
    

    return (
        <>
            {!isLoggedIn && (
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField inputRef={nameRef} id="outlined-basic" label="Admin Name" variant="outlined" />
                    <TextField inputRef={passwordRef} id="outlined-basic" label="Password" variant="outlined" />
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={post}>Login</Button>
                    </Stack>
                </Box>
            )}
        </>
    );
}
