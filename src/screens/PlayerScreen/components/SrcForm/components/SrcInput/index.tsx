import React, { useRef, ChangeEvent } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
  value: string
  onChange: (value: string) => void
  text: string
  buttonText: string
}

const useStyles = makeStyles(() => ({
  container: {
    minWidth: 720,
  },
  wrapper: {
    minWidth: 720,

    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  minInputWidth: {
    minWidth: 480,
  },
  fileButton: {
    flex: 1,
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
    <div className={classes.container}>
      <Typography variant="h6">{props.text}</Typography>
      <div className={classes.wrapper}>
        <TextField
          variant="filled"
          className={classes.minInputWidth}
          value={props.value}
          onChange={handleChange}
        />

        <input
          type="file"
          ref={fileInputRef}
          className={classes.displayNone}
          onChange={handleLocalFileChange}
        ></input>

        <Button
          variant="contained"
          className={classes.fileButton}
          onClick={handleUploadClick}
        >
          {props.buttonText}
        </Button>
      </div>
      <br />
    </div>
  )
}
