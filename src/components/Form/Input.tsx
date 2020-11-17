import React, { FC } from 'react'
import FormBase from 'react-bootstrap/Form'

import BoundFormControl from './FormControl'

type InputProps = {
  name: string,
  label?: string,
  subText?: string
  type?: string
}

const Input: FC<InputProps> = props => (
  <FormBase.Group controlId={props.name}>
    {props.label && <FormBase.Label>{props.label}</FormBase.Label>}
    <BoundFormControl name={props.name} type={props.type || 'text'} />
    {props.subText && <FormBase.Text>{props.subText}</FormBase.Text>}
  </FormBase.Group>
)

export default Input
