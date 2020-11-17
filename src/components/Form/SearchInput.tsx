import React, { FC } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { BsSearch } from 'react-icons/bs'

import FormControl from './FormControl'

const SearchInput: FC<any> = props => (
  <InputGroup>
    <FormControl
      name={props.name}
      type='text'
      placeholder='Search Restaurants'
    />
    <InputGroup.Append>
      <Button onClick={props.onClick}>
        <BsSearch style={{ marginTop: -3 }} />
      </Button>
    </InputGroup.Append>
  </InputGroup>
)

export default SearchInput
