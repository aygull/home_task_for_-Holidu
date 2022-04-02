import './App.css';
import React, {useState, useEffect, useCallback} from "react"
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function App() {
  const [data, setData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [payment, setPayments] = useState('');

  const handleChange = useCallback((event) => {
    setPayments(event.target.value);
    if (filteredResults.length > 1) {
      setFilteredResults(filteredResults.filter(item => item.paymentModes.find(mode => mode === payment)))
    }
    else {
      setFilteredResults(data.filter(item => item.paymentModes.find(mode => mode === payment)))
    }
  }, [searchName, searchStatus, filteredResults, setPayments])

  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:3000/data-200.json')
          .then(res => res.json()).then(res => setData(res)).catch(error => console.log(error))
    }
    fetchData()
  }, [])
  const searchItems = (searchValue, filterBy='name') => {
    if (filterBy === 'name'){
      setSearchName(searchValue)
    }
    if (filterBy === 'status'){
      setSearchStatus(searchValue)
    }
    if (searchName !== '' || searchStatus !== '') {
      const filteredData = data.filter((item) => {
        if (searchName) {
          if (searchStatus) {
            return item['name'].toLowerCase().includes(searchName) && item['status'].toLowerCase().includes(searchStatus)
          }
          return item['name'].toLowerCase().includes(searchName)
        }
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(data)
    }
  }
  return (
  <>
    <div className="filters">
    <FormControl className="form">
      <InputLabel id="demo-simple-select-label">Payment methods</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={payment}
          label="Payments"
          onChange={handleChange}
      >
        <MenuItem value='CREDIT_CARD'>CREDIT_CARD</MenuItem>
        <MenuItem value='PAYPAL'>PAYPAL</MenuItem>
        <MenuItem value='BANK_TRANSFER'>BANK_TRANSFER</MenuItem>
      </Select>
    </FormControl>
    <TextField placeholder='Search name...' onChange={(e) => searchItems(e.target.value, 'name')}/>
    <TextField placeholder='Search status...' onChange={(e) => searchItems(e.target.value, 'status')}/>
    </div>
    <div className="results">
    {searchName.length > 1 || searchStatus.length > 1 || payment ? (
      filteredResults.map((item) => {
        return (<div className="common">
          <span className="name">{item.name}&nbsp;</span>
          <span className="status">{item.status}&nbsp;</span>
          <div className="payments">{item.paymentModes.map((item, index) => (<span key={index}>{item} </span>))}</div>
        </div>)})) :
        data.map(item => (
            <div className="common">
              <span className="name">{item.name}&nbsp;</span>
              <span className="status">{item.status}&nbsp;</span>
              <div className="payments">{item.paymentModes.map((item, index) => (<span key={index}>{item} </span>))}</div>
            </div>))}
    </div>
    </>
  );
}

export default App;
