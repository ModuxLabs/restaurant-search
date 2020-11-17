import React, { FC } from 'react'
import FormBase from 'react-bootstrap/Form'

import BoundFormControl from './FormControl'

interface OptionsEnum {
  [key: string]: string
}

type SelectProps = {
  name: string,
  options: OptionsEnum,
  placeholder?: string,
  className?: string,
  label?: string,
  subText?: string
}

const Select: FC<SelectProps> = props => (
  <FormBase.Group className={props.className} controlId={props.name}>
    {props.label && <FormBase.Label>{props.label}</FormBase.Label>}
    <BoundFormControl name={props.name} as='select' custom>
      {props.placeholder && <option value=''>{props.placeholder}</option>}
      {Object.keys(props.options).map(optionKey => (
        <option key={optionKey} value={optionKey}>{props.options[optionKey]}</option>
      ))}
    </BoundFormControl>
    {props.subText && <FormBase.Text>{props.subText}</FormBase.Text>}
  </FormBase.Group>
)

export default Select
