import './InlineError.styles.css'

import React, { FC } from 'react'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'
import classnames from 'classnames'

type InlineErrorProps = {
  error?: {
    message: string
  }
}

const InlineError: FC<InlineErrorProps> = ({ error }) => {
  if (!error?.message) return null

  return (
    <p className={classnames('inline-error--root', 'm-0')}>
      <BsFillExclamationTriangleFill className='inline-error--icon' /> {error?.message}
    </p>
  )
}

export default InlineError
