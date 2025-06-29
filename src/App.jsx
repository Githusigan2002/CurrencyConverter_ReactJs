import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [convertedAmt, setConvertedAmt] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(URL);
        console.log(res);
        

      } catch (error) {
        console.error(error)
      }
    };
  });


  const handleAMTchange = (e)=>{
    const val = parseFloat(e.target.val);
    setAmount(isNaN(val)?0:val);
  };
  return (
    <>
      <div className='cur-con'>
        <div className="box"></div>
        <div className="data">
          <h1>Currency Converter</h1>

          <div className="input-container">
            <label htmlFor="amt" >Amount:</label>
            <input type="number" value={amount} id="amt" onChange={handleAMTchange}/>
          </div>

          <div className="input-container">
            <label htmlFor="amt">From Currency:</label>
            <select name="" id="fromCurrency" value={fromCurrency}>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="LKR">LKR</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>

          <div className="input-container">
            <label htmlFor="amt">To Currency:</label>
            <select name="" id="toCurrency" value={toCurrency}>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="LKR">LKR</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div className="results">
            <p>{amount} {fromCurrency} = {convertedAmt} {toCurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
