import React from 'react'

import { FormHelperText } from '@material-ui/core'

const FormError = ({id, descriptionError}) => {
  return (
    <FormHelperText id={id} error > { descriptionError } </FormHelperText>
  )
}

export default FormError
