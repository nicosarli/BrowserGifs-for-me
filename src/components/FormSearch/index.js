import React, { useState } from "react";

import { useLocation } from 'wouter'

import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    background: '#f996',
  },
  FormControlLabel: {
    margin: '-15px 0'
  },
  FormControlInput: {
    padding: '8px 5px'
  }
})

const FormSearch = () => {
  const classes = useStyles()

  const [keyword, setKeyword] = useState('')
  const [ , setLocation] = useLocation();
  const [rating, setRating] = useState('g')
  const [language, setLanguage] = useState('en')


  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLocation(`/gifs/${keyword}/${rating}/${language}`)
  }

  const handleChangeRating = (evt) => {
    setRating(evt.target.value)
  }

  const handleChangeLanguage = (evt) => {
    setLanguage(evt.target.value)
  }

  return (
    <div className={classes.form}>
  <FormControl onSubmit={handleSubmit} >
    <TextField
        className={classes.textFieldFrom}
        id="outlined-basic"
        label="Write a gif to browse"
        variant="outlined"
        size="small"
        autoComplete="off"
        value={keyword}
        onChange={handleChange}
        />
  </FormControl>
    <FormControl onSubmit={handleSubmit}>
      <InputLabel id="ratio-of-gif" className={classes.FormControlLabel}> Select Ratio />
        <Select 
          className={classes.FormControlInput}
          labelId="ratio-of-gif"
          id="ratio-of-gif-select"
          value={rating}
          onChange={handleChangeRating}
         >
        <MenuItem value='g'> g </MenuItem>
        <MenuItem value='pg'> pg </MenuItem>
        <MenuItem value='pg-13'> pg-13 </MenuItem>
        <MenuItem value='r'> r </MenuItem>
        </Select>
    </FormControl>
    <FormControl  onSubmit={handleSubmit} >
      <InputLabel id="language-of-gif" className={classes.FormControlLabel}> Select Language />
        <Select 
          className={classes.FormControlInput}
          labelId="language-of-gif"
          id="language-of-gif-select"
          value={language}
          onChange={handleChangeLanguage}
         >
        <MenuItem value='en'> en </MenuItem>
        <MenuItem value='es'> es </MenuItem>
        <MenuItem value='pt'> pt </MenuItem>
        <MenuItem value='fr'> fr </MenuItem>
        <MenuItem value='id'> id </MenuItem>
        <MenuItem value='ar'> ar </MenuItem>
        <MenuItem value='th'> th </MenuItem>
        <MenuItem value='tr'> tr </MenuItem>
        <MenuItem value='ja'> ja </MenuItem>
        </Select>

  </FormControl>
  <Button color="secondary" variant="contained" onClick={handleSubmit}>
        Search a gifs...
      </Button>
  </div>
  );
};
export default FormSearch;
