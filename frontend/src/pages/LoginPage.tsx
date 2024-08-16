import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { BASE_URL } from "../constants/baseURL";
import { useRef, useState } from "react";

const LoginPage = () => {
    const [error, setError] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
  
    const onSubmit = async () => {

      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
  
      //Make the call to API to create the user
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        setError("Cardentials Not Valid");
        return;
      }
      const token = await response.json();
      if (!token){
        setError("Incorrect Token")
        return;
      }
      console.log(token)
    };
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Typography variant="h6"> Login </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 1,
              border: 1,
              padding: 1,
              borderColor: " #f5f5f5",
            }}
          >

            <TextField inputRef={emailRef} label="Email" name="email" />
            <TextField
              inputRef={passwordRef}
              type="password"
              label="Password"
              name="password"
            />
            <Button onClick={onSubmit} variant="contained">
              Login
            </Button>
            {error && (
              <Typography
                sx={{ color: "red", display: "flex", justifyContent: "center" }}
              >
                {error}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    );
  };

  
export default LoginPage;
