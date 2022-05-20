import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { RHFTextInput } from "./components/RHFTextInput";

interface IFormInputs {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('Input an email valid').required('Field email is required'),
  password: yup.string().min(6, 'Password must be min 6 characters').required('Field password is required')
})

const Home: NextPage = () => {

  const methods = useForm<IFormInputs>({
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
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

              
              <RHFTextInput label="Email" name="email" />
              <RHFTextInput label="Password" type="password" name="password" />

              <Button variant="contained" type="submit">Enviar</Button>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </Stack>
  );
};

export default Home;
