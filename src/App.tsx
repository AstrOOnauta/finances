import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from 'react-toastify';

import Header from "./components/Header";
import NewTransactionModal from "./components/Modal";
import Summary from "./components/Summary";
import Transactions from "./components/Transactions";


export default function App() {

  //Required HOOKs fo this WebApp work
  const [title, setTitle] = useState("")
  const [value, setValue] = useState(0)
  const [switchFinance, setSwitchFinance] = useState("deposit")
  const [category, setCategory] = useState("")

  const [transactionsList, setTransactionsList] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false)

  //Functions to open and close the Modal Form
  function handleModalOpen(){
    setIsModalOpen(true)
  }
  function handleModalClose(){
    setIsModalOpen(false)
  }

  //Hooks used to get transactions saved in localStorage and
  //to do transfer this transactions to list array in this WebApp.
  useEffect(()=>{
    const json: any = localStorage.getItem("transactions")
    const loadedTasks = JSON.parse(json)
    if (loadedTasks) {
      setTransactionsList(loadedTasks)
    }
  }, [])

  //Hook used to save the transactions in localStorage
  useEffect(() => {
      const json = JSON.stringify(transactionsList)
      localStorage.setItem("transactions", json)
  }, [transactionsList])

  return (
    <>
      <Header onModalOpen={handleModalOpen} />
      <Summary transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
      <Transactions transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
      <NewTransactionModal isOpen={isModalOpen}
                          onRequestClose={handleModalClose}
                          title={title}
                          setTitle={setTitle}
                          value={value}
                          setValue={setValue}
                          switchFinance={switchFinance}
                          setSwitchFinance={setSwitchFinance}
                          category={category}
                          setCategory={setCategory}
                          transactionsList={transactionsList}
                          setTransactionsList={setTransactionsList}
                          />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}
