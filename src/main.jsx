import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import IncomeExpenses from './components/IncomeExpenses.jsx'
import TransactionList from './components/TransactionList.jsx'
import AddTransaction from './components/AddTransaction.jsx'
import { GlobalProvider } from './context/GlobalState.jsx'
createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <App />
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList  />
      <AddTransaction />
      </div>
  </GlobalProvider>,
)
