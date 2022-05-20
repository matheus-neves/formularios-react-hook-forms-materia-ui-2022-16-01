import { Typography } from "@mui/material"
import { useFormContext } from 'react-hook-form';

interface RHFTextInputProps {
  name: string
  type?: 'text' | 'password'
  label: string
}

export function RHFTextInput({name, type = 'text', label}: RHFTextInputProps) {

  const {register, formState: {errors}} = useFormContext()

  return (
    <>
      <input type={type} placeholder={label} {...register(name)} />
      {errors[name] && (<Typography variant="body1" color='red'>{errors[name].message}</Typography>)}
    </>
  )
}