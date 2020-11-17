import React, { FC } from 'react'
import { DevTool } from '@hookform/devtools'
import FormBase from 'react-bootstrap/Form'

import { FormContext, useFormContext } from './Form.context'

const IS_DEV = process.env.NODE_ENV === 'development'

// @ts-ignore
const BoundFormControl: typeof FormBase.Control = props => {
  const { register } = useFormContext()

  return (
    <FormBase.Control ref={register} {...props} />
  )
}

type FormInputProps = {
  name: string,
  label?: string,
  subText?: string
  type?: string
}

const FormInput: FC<FormInputProps> = props => (
  <FormBase.Group controlId={props.name}>
    {props.label && <FormBase.Label>{props.label}</FormBase.Label>}
    <BoundFormControl name={props.name} type={props.type || 'text'} />
    {props.subText && <Form.Text>{props.subText}</Form.Text>}
  </FormBase.Group>
)

type FormProps = {
  control: any,
  register: any
}

type FormSubComponents = {
  Group: typeof FormBase.Group,
  Label: typeof FormBase.Label,
  Control: typeof FormBase.Control,
  Text: typeof FormBase.Text,
  Input: typeof FormInput
}

const Form: FC<FormProps> & FormSubComponents = ({ control, register, children, ...props }) => (
  <FormContext.Provider value={{ control, register }}>
    <FormBase {...props}>{children}</FormBase>
    {IS_DEV && <DevTool control={control} />}
  </FormContext.Provider>
)

Form.Group = FormBase.Group
Form.Label = FormBase.Label
Form.Control = BoundFormControl
Form.Text = FormBase.Text
Form.Input = FormInput

export default Form
