// @ts-ignore
import FormBase from 'react-bootstrap/Form'
import { useFormContext } from './Form.context'
import React from 'react'

// @ts-ignore
const FormControl: typeof FormBase.Control = props => {
  const { register } = useFormContext()

  return (
    <FormBase.Control ref={register} {...props} />
  )
}

export default FormControl
