import React, { useRef, ChangeEvent } from 'react'
import { makeStyles, Typography, TextField, Button } from '@material-ui/core'

interface Props {
  value: string
  onChange: (value: string) => void
  text: string
  buttonText: string
}

const useStyles = makeStyles(() => ({
  minWidth: {
    minWidth: 480,
  },
  displayNone: {
    display: 'none',
  },
}))

export const SrcInput = (props: Props) => {
  const classes = useStyles()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleLocalFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.onChange(URL.createObjectURL(e.target.files![0]))
    }
  }

  return (
    <>
      <Typography variant="h6">{props.text}</Typography>
      <TextField
        variant="filled"
        className={classes.minWidth}
        value={props.value}
        onChange={handleChange}
      />

      <input
        type="file"
        ref={fileInputRef}
        className={classes.displayNone}
        onChange={handleLocalFileChange}
      ></input>
      <Button variant="contained" onClick={handleUploadClick}>
        {props.buttonText}
      </Button>
    </>
  )
}
