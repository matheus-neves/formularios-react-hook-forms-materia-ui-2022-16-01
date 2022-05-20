import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useForm } from 'react-hook-form';

interface IFormInputs {
  email: string
  password: string
}

const Home: NextPage = () => {

  const {register, handleSubmit} = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: IFormInputs) => {
    console.log(data)
  }

  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#2b2a33",
      }}
    >
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={2}
            sx={{
              p: 4,
              width: "300px",
              borderRadius: 1,
              background: "#edede9",
            }}
          >
            <Typography variant="h4" textAlign="center" fontSize={26}>
              React Hook Form
            </Typography>
            <input type="text" placeholder="Email" {...register("email")} />
            <input type="password" placeholder="Password" {...register("password")} />
            <Button variant="contained" type="submit">Enviar</Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default Home;
