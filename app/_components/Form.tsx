'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Btn from './Btn'

interface FormValues {
  name: string
  lastName: string
  email: string
  message: string
}

interface FormErrors {
  name: string
  lastName: string
  email: string
  message: string
}

const Form: React.FC = () => {
  const [formValues, setFormValues] = React.useState<FormValues>({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = React.useState<FormErrors>({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    let error = ''

    switch (name) {
      case 'name':
        error = value.trim() ? '' : 'Nombre es requerido'
        break
      case 'lastName':
        error = value.trim() ? '' : 'Apellido es requerido'
        break
      case 'email':
        error =
          value && /^\S+@\S+\.\S+$/.test(value)
            ? ''
            : 'Correo electrónico inválido'
        break
      case 'message':
        error = value.trim() ? '' : 'Mensaje es requerido'
        break
      default:
        break
    }

    setFormValues({
      ...formValues,
      [name]: value,
    })

    setFormErrors({
      ...formErrors,
      [name]: error,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const errors: FormErrors = {
      name: '',
      lastName: '',
      email: '',
      message: '',
    }

    Object.entries(formValues).forEach(([key, value]) => {
      switch (key as keyof FormValues) {
        case 'name':
          errors.name = value.trim() ? '' : 'Nombre es requerido'
          break
        case 'lastName':
          errors.lastName = value.trim() ? '' : 'Apellido es requerido'
          break
        case 'email':
          errors.email =
            value && /^\S+@\S+\.\S+$/.test(value)
              ? ''
              : 'Correo electrónico inválido'
          break
        case 'message':
          errors.message = value.trim() ? '' : 'Mensaje es requerido'
          break
        default:
          break
      }
    })

    setFormErrors(errors)

    if (Object.values(errors).some((error) => error !== '')) {
      event.preventDefault()
      return
    }

    console.log('Form submitted successfully!')
  }

  return (
    <Box
      component='form'
      autoComplete='off'
      action='https://api.web3forms.com/submit'
      method='POST'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      onSubmit={handleSubmit}
    >
      <input
        type='hidden'
        name='access_key'
        value='6903a94c-8226-4612-8405-5e93f26da622'
      />
      <Box
        sx={{
          display: 'flex',
          gap: 2.5,
        }}
      >
        <TextField
          label='Nombre'
          error={Boolean(formErrors.name)}
          helperText={formErrors.name}
          id='outlined-start-adornment'
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          }}
          name='name'
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          label='Apellido'
          error={Boolean(formErrors.lastName)}
          helperText={formErrors.lastName}
          id='outlined-start-adornment'
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          }}
          name='lastName'
          value={formValues.lastName}
          onChange={handleChange}
        />
      </Box>
      <div>
        <TextField
          label='Email'
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
          id='outlined-start-adornment'
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          }}
          name='email'
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          label='Mensaje'
          multiline
          minRows={5}
          error={Boolean(formErrors.message)}
          helperText={formErrors.message}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          }}
          name='message'
          value={formValues.message}
          onChange={handleChange}
        />
      </div>
      <input
        type='hidden'
        name='redirect'
        value='https://franciscogarciarena.netlify.app/success'
      />
      <div>
        <Btn href='' contained={true}>
          Enviar
        </Btn>
      </div>
    </Box>
  )
}
export default Form
