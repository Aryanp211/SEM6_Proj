import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles ,useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useEffect } from "react";
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router';
import statename from '../States';


const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });


  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  // const statename = [
  //   'Oliver Hansen',
  //   'Van Henry',
  //   'April Tucker',
  //   'Ralph Hubbard',
  //   'Omar Alexander',
  //   'Carlos Abbott',
  //   'Miriam Wagner',
  //   'Bradley Wilkerson',
  //   'Virginia Andrews',
  //   'Kelly Snyder',
  // ];

 



  function Row(props) {
    let history = useHistory();
    let row = props.row;
    {console.log(row)}
    // let data=props.data
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    // const []
    
    // const handleSubmit=data_id=>{props.history.push('contractor/bidform')}
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.project_name}
          </TableCell>
          <TableCell >{row.project_category}</TableCell>
          <TableCell >{row.project_state}</TableCell>
          <TableCell >{row.project_duration}</TableCell>
          
          {/* <TableCell align="right">{row.project_estimatedamt}</TableCell> */}
          {console.log(row.project_estimatedenddate)}
          <TableCell >{JSON.stringify(row.project_estimatedenddate).substring(1,10)}</TableCell>
          <TableCell align="right">{row.bid_status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <TableRow>
                    {/* Amount Alloted */}
                    <TableCell>Amount Alloted</TableCell>
                    <TableCell> Amount Used</TableCell>
                    <TableCell>Amount left</TableCell>
                </TableRow>

              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }


  Row.propTypes = {
    row: PropTypes.shape({
      project_name: PropTypes.string.isRequired,
      project_category: PropTypes.string.isRequired,
      project_state: PropTypes.string.isRequired,
      project_duration: PropTypes.string.isRequired,
      proposal_description: PropTypes.string.isRequired,
      project_bidamount: PropTypes.number.isRequired,
      bid_status: PropTypes.string.isRequired,
      project_estimatedenddate: PropTypes.string.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      project_details: PropTypes.string.isRequired,
    }).isRequired,
  };


function FiledTenders(props) {
    const [data,updatedata]=React.useState([]);
    const [condition,updatecondition]=React.useState(true);
    const [datayy,updatedatayy]=React.useState([]);
    const [datax,updatedatax]=React.useState([]);


    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      setPersonName(event.target.value);
    };
  
    const handleChangeMultiple = (event) => {
      const { options } = event.target;
      const value = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setPersonName(value);
    };



    console.log(props.data._id)
    useEffect(() => {
        let zz=[]
        console.log(props.data._id)
          if(condition===true){
            
            
          axios.get('http://localhost:5000/contractor/filedtenders/'+props.data._id)
          .then(response => {
            
          // datax.push(response.data)
          updatedata(response.data.filed_tenders)
            console.log("Hi this is avalaibe filed  tenders list")
            // console.log(response)
     
          //  console.log(response.data)
            
            })
            
           
          }
         
        
        updatecondition(false);}
        
        )




        let cnt=-1
        console.log(personName)
        console.log(props.data._id)

    return (
        <div>
            Filed Tenders
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {statename.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    <TableContainer component={Paper}>
      
      {/* {console.log(datayy)} */}
      
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project name</TableCell>
            <TableCell>Project category</TableCell>
            <TableCell>Project state</TableCell>
            <TableCell>Project duration</TableCell>
            {/* <TableCell align="right">Tender Amount</TableCell> */}
            <TableCell >Bid end date</TableCell>
            <TableCell align="right">Bid Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {console.log(cnt,datayy)} */}
          {/* {cnt=cnt+1} */}
          {data.map((row) => {
            cnt+=1;
            console.log(cnt)
            console.log(row.project_name)
            return (
              <Row key={row.project_id} row={row} />
            )
           
          })}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default FiledTenders