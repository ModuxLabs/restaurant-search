import React, { FC } from 'react'
import { DevTool } from '@hookform/devtools'
import FormBase, { FormProps } from 'react-bootstrap/Form'

import { FormContext } from './Form.context'
import Input from './Input'
import FormControl from './FormControl'
import SearchInput from './SearchInput'
import Select from './Select'

const IS_DEV = process.env.NODE_ENV === 'development'

type ExtendedFormProps = FormProps & {
  control: any,
  register: any
}

type FormSubComponents = {
  Group: typeof FormBase.Group,
  Label: typeof FormBase.Label,
  Control: typeof FormBase.Control,
  Text: typeof FormBase.Text,
  Input: typeof Input,
  SearchInput: typeof SearchInput,
  Select: typeof Select
}

const Form: FC<ExtendedFormProps> & FormSubComponents = ({ control, register, children, ...props }) => (
  <FormContext.Provider value={{ control, register }}>
    <FormBase {...props}>{children}</FormBase>
    {IS_DEV && <DevTool control={control} />}
  </FormContext.Provider>
)

Form.Group = FormBase.Group
Form.Label = FormBase.Label
Form.Control = FormControl
Form.Text = FormBase.Text
Form.Input = Input
Form.SearchInput = SearchInput
Form.Select = Select

export default Form
