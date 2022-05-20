import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormInputs {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('Input an email valid').required('Field email is required'),
  password: yup.string().min(6, 'Password must be min 6 characters').required('Field password is required')
})

const Home: NextPage = () => {

  const {register, handleSubmit, formState: { errors }} = useForm<IFormInputs>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
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
            {errors.email && (<Typography variant="body1">{errors.email.message}</Typography>)}

            <input type="password" placeholder="Password" {...register("password")} />
            {errors.password && (<Typography variant="body1">{errors.password.message}</Typography>)}
            
            <Button variant="contained" type="submit">Enviar</Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default Home;
