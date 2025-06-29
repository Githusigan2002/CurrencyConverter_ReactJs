import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className='cur-con'>
        <div className="box"></div>
        <div className="data">
          <h1>Currency Converter</h1>
          <div className="input-container">
            <label htmlFor="amt">Amount:</label>
            <input type="number" id="amt" />
          </div>
          <div className="input-container">
            <label htmlFor="amt">From Currency:</label>
            <select name="" id="fromCurrency">
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
            <select name="" id="toCurrency">
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="LKR">LKR</option>
              <option value="INR">INR</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div className="results">
            <p>1 USD = 300 LKR</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
