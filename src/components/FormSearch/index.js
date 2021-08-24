import React, { useReducer } from "react";

import { useLocation } from 'wouter'

import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

import useWidth from "../../hooks/useWidth";

const useStyles = makeStyles({
  formXs: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    background: '#f996',
  },
  ButtonMQ: {
    width: '100%'
  },
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

const initialState = {
  keyword: '',
  rating: 'g',
  language: 'en',
}

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  UPDATE_LANGUAGE: 'update_language',
}

const reducer = (state, action) => {
  switch(action.type)
  {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    case ACTIONS.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default: 
        return state
  }
}

const FormSearch = () => {
  const classes = useStyles()

  const [state, dispatch] = useReducer(reducer, initialState)

  const [ , setLocation] = useLocation();
  
  const mediaQuery = useWidth()
  
  const { keyword, rating, language } = state

  const handleChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value })
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLocation(`/gifs/${keyword}/${rating}/${language}`)
  }

  const handleChangeRating = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value })
  }

  const handleChangeLanguage = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: evt.target.value })
  }

  return (
    <div className={mediaQuery === 'xs' ? classes.formXs : classes.form}>
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
          <InputLabel id="ratio-of-gif" className={classes.FormControlLabel}> Select Ratio </InputLabel>
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
          <InputLabel id="language-of-gif" className={classes.FormControlLabel}> Select Language </InputLabel>
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
          <Button color="secondary" variant="contained" onClick={handleSubmit} className={mediaQuery === 'xs' ? classes.ButtonMQ : null}>
            Search a gifs...
          </Button>
  </div>
  );
};
export default FormSearch;
