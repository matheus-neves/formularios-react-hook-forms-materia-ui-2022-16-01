import { TextField, Typography } from "@mui/material"
import { useFormContext, Controller } from 'react-hook-form';

interface RHFTextInputProps {
  name: string
  type?: 'text' | 'password'
  label: string
}

export function MUITextField({name, type = 'text', label}: RHFTextInputProps) {

  const {control, formState: {errors}} = useFormContext()

  return (
    <>
      <Controller 
        name={name}
        control={control}
        render={({field}) => (
          <TextField 
            label={label} 
            type={type}
            {...field} 
            error={!!errors[name]?.message} 
            helperText={errors[name]?.message} 
          />
        )}
      />
    </>
  )
}