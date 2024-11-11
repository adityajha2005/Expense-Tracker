import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseTracker from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import IncomeExpenses from './components/IncomeExpenses.jsx'
import TransactionList from './components/TransactionList.jsx'
import AddTransaction from './components/AddTransaction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ExpenseTracker />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList  />
      <AddTransaction />
      </div>
  </StrictMode>,
)
