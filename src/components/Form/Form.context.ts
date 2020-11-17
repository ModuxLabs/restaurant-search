import { createContext, useContext } from 'react'

export const FormContext = createContext({
  control: null,
  register: null
})

export const useFormContext = () => useContext(FormContext)
