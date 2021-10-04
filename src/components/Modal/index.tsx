import Modal from "react-modal"
import { Form, SwitchFinance } from "./style"
import { toast } from 'react-toastify';

Modal.setAppElement("#root")    //Specifies the root element for the Modal

//Specifies the types in props received for NewTransactionModal component 
interface ModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    setTitle: (value: string) => void;
    value: number;
    setValue: (value: number) => void;
    switchFinance: string;
    setSwitchFinance: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    transactionsList: Array<string&number>;
    setTransactionsList: (value: any) => void;
}

export default function NewTransactionModal(props: ModalProps){
    return(
        <Modal  isOpen={props.isOpen} 
                onRequestClose={props.onRequestClose}
                style={{
                    overlay:{
                        backgroundColor: "rgba(0,0,0,.5)"
                    },
                    content:{
                        backgroundColor: "var(--background)",
                        width: "60%",
                        height: "35rem",
                        margin: "auto"
                    }
                }}
        >
            <Form onSubmit={(e)=>{  //WHEN FORM IS SUBMITED, THE NEW TRANSACTION IS REGISTRED IF ALL FIELDS IS COMPLETED
                //Prevents the default behavior of the submit button that reloads the WebApp
                e.preventDefault()
                
                //Conditional for form validation 
                if(props.title === "" || props.category === "" || props.value === 0){

                    //If any field is not completed...a message is showed and the transaction is no registred
                    toast.warn("Forneça as informações necessárias para cadastrar uma nova transação!")
                }else{

                    //If all fields is completed...the transaction is registred and success message is showed

                    //New transaction is created with the fields form informations
                    const newTransaction = {
                        title: props.title,
                        value: props.value,
                        switchFinance: props.switchFinance,
                        category: props.category,
                        createdAt: new Date()
                    }

                    //Update the transaction list with the new transaction created in this form
                    props.setTransactionsList([...props.transactionsList, newTransaction])
                    
                    //Show success notification when new transaction is registred
                    toast.success('Transação cadastrada com sucesso!') 
                    
                    //Clean all fields in new transaction form modal
                    props.setTitle("")
                    props.setValue(0)
                    props.setSwitchFinance("deposit")
                    props.setCategory("")
                    
                    //Close the Modal after new transaction is registred
                    props.onRequestClose()
                }
            }}>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título" value={props.title} onChange={(e)=>props.setTitle(e.target.value)}/>
                <input type="number" value={props.value} onChange={(e)=>props.setValue(Number(e.target.value))} onClick={(e)=>(e.target as HTMLInputElement).select()}/>
                <div>
                    <SwitchFinance   type="button"
                                    style={{backgroundColor: `${props.switchFinance === "deposit" ? "var(--green)" : "#e7e9ee"}`}}
                                    onClick={()=>props.setSwitchFinance("deposit")}
                    >
                        <i className="far fa-arrow-alt-circle-up" style={{color: `${props.switchFinance === "deposit" ? "#000" : "var(--green)"}`}}></i>
                            Entrada
                    </SwitchFinance>
                    <SwitchFinance   type="button"
                                    style={{backgroundColor: `${props.switchFinance === "withdraw" ? "var(--red)" : "#e7e9ee"}`}}
                                    onClick={()=>props.setSwitchFinance("withdraw")}
                    >
                        <i className="far fa-arrow-alt-circle-down" style={{color: `${props.switchFinance === "withdraw" ? "#000" : "var(--red)"}`}}></i>
                            Saída
                    </SwitchFinance>
                </div>
                <input type="text" placeholder="Categoria" value={props.category} onChange={(e)=>props.setCategory(e.target.value)}/>
                <button type="submit">Cadastrar</button>
                <i className="fas fa-times" onClick={()=>props.onRequestClose()}></i>
            </Form>
        </Modal>

    )
}