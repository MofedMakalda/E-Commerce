import { Box, Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseURL";
import { red } from "@mui/material/colors";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [error, setError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const {login}= useAuth();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    if (!firstName || !lastName || !email || !password){
      return;
    }

    //Make the call to API to create the user
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });
    if (!response.ok) {
      setError("User already exists");
      return;
    }
    const token = await response.json();
    if (!token){
      setError("Incorrect Token")
      return;
    }
    
   login(email, token)
   navigate("/")

    
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
        <Typography variant="h6"> Register New Account </Typography>
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
          <TextField
            inputRef={firstNameRef}
            label="First Name"
            name="firstName"
          />
          <TextField inputRef={lastNameRef} label="Last Name" name="lastName" />
          <TextField inputRef={emailRef} label="Email" name="email" />
          <TextField
            inputRef={passwordRef}
            type="password"
            label="Password"
            name="password"
          />
          <Button onClick={onSubmit} variant="contained">
            Register
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
export default RegisterPage;
