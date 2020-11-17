import React, { FC, ChangeEvent } from 'react'
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
  onChange?: (e: ChangeEvent) => any
}

const Select: FC<SelectProps> = ({ name, options, placeholder, className, label, subText, onChange }) => (
  <FormBase.Group className={className} controlId={name}>
    {label && <FormBase.Label>{label}</FormBase.Label>}
    <BoundFormControl name={name} onChange={e => onChange?.(e)} as='select' custom>
      {placeholder && <option value=''>{placeholder}</option>}
      {Object.keys(options).map(optionKey => (
        <option key={optionKey} value={options[optionKey]}>{options[optionKey]}</option>
      ))}
    </BoundFormControl>
    {subText && <FormBase.Text>{subText}</FormBase.Text>}
  </FormBase.Group>
)

export default Select
