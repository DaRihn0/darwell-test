import './App.css';
import React, { useEffect, useState,useRef } from "react";
import EnhancedTable from './components/table';
import Chart from './components/chart';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function App() {
  const [rows, setRow] = useState([]);
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault()
    var fromDate = format(event.target.fromdate.value);
    var toDate = format(event.target.todate.value);

    let formObject = {
      dateTo: toDate,
      dateFrom: fromDate
    }

    console.log(formObject);
    axios({
        method: "post",
        url: "http://localhost/darwellAPI/api.php",
        data: formObject
      })
    .then(function (response) {
      let res = response.data;
      console.log(res);
      if(res){
        setRow(res);
      }
    })
  }
  function format(inputDate) {
    var dateArray = inputDate.split("-");
var year = dateArray[0];
var month = parseInt(dateArray[1], 10);
var date = dateArray[2];
return month +"/"+date+"/"+year;
}
  return (
    <div>
    <form className={classes.container} noValidate onSubmit={handleSubmit}>
      <TextField
        id="Todate"
        label="To Date"
        name="todate"
        type="date"
        defaultValue="2020-09-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="Fromdate"
        label="From Date"
        name="fromdate"
        type="date"
        defaultValue="2020-09-05"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button type="submit">Submit</button>
    </form>
    <Chart data={rows}/>
    <EnhancedTable data={rows}/>
    </div>
  );
}

export default App;
