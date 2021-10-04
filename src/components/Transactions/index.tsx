import { NoTransitionTable, TransactionsTable } from "./style";
import { toast } from 'react-toastify';

interface TransactionsListProps{
    transactionsList: Array<any>,
    setTransactionsList: (value: any) => void;
}

export default function Transactions(props: TransactionsListProps){

    //Function to remove the chosen transaction
    function removeTransition(index: number){
        const newTransactionsList = [...props.transactionsList]
        newTransactionsList.splice(index, 1)
        props.setTransactionsList(newTransactionsList)
        toast.error('Transação deletada com sucesso!')
    }

    //Conditional to show the table with transaction only when there are transactions registred
    if(props.transactionsList.length === 0){
        return(
            <NoTransitionTable>
                <i className="fas fa-search-dollar"></i>
                <h2>Nenhuma transação cadastrada!</h2>

            </NoTransitionTable>
        )
    }else{
        return(
            <TransactionsTable>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {props.transactionsList.map((transition, index)=>{
                        return(
                            <tr key={index}>
                                <td><strong>{transition.title.charAt(0).toUpperCase() + transition.title.slice(1)}</strong></td>
                                <td className={transition.switchFinance}>
                                    {transition.switchFinance === "deposit" ?   //Show negative or positive
                                        (new Intl.NumberFormat("pt-BR", {       //money balance.
                                            style: "currency",
                                            currency: "BRL"
                                        }).format(transition.value))
                                    :
                                        (new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        }).format(-transition.value))
                                    }
                                </td>
                                <td>{transition.category.charAt(0).toUpperCase() + transition.category.slice(1)}</td>
                                <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(transition.createdAt))}</td>
                                <td>
                                    <button type="button" onClick={()=>removeTransition(index)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </TransactionsTable>
        )
    }

}