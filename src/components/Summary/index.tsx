import { Container, SummaryBody, SummaryContent, SummaryHeader } from "./style";

interface TransactionsProps{
    transactionsList: Array<any>,
    setTransactionsList: (value: any) => void;
}

export default function Summary(props: TransactionsProps){

    //The calculations for the summaries are done with accumulator (acc) of reduce method.
    const summary = props.transactionsList.reduce((acc, transation) => {

        //Conditional for go to any element with "deposit" or "withdraw" in array list 
        if(transation.switchFinance === "deposit"){
            acc.deposits += transation.value
            acc.total += transation.value
        }else{
            acc.withdraw += transation.value
            acc.total -= transation.value
        }
        return acc
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    return(
        <Container>
            <SummaryContent>
                <SummaryHeader>
                    <h4>Entrada</h4>
                    <i className="far fa-arrow-alt-circle-up" style={{color: "var(--green)"}}></i>
                </SummaryHeader>
                <SummaryBody>
                    <h1>{new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.deposits)}
                    </h1>
                </SummaryBody>
            </SummaryContent>
            <SummaryContent>
                <SummaryHeader>
                    <h4>Saída</h4>
                    <i className="far fa-arrow-alt-circle-down" style={{color: "var(--red)"}}></i>
                </SummaryHeader>
                <SummaryBody>
                    <h1>- {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.withdraw)}
                    </h1>
                </SummaryBody>
            </SummaryContent>
            <SummaryContent style={{backgroundColor: "var(--yellow)"}}>
                <SummaryHeader>
                    <h4>Total</h4>
                    <i className="fas fa-dollar-sign"></i>
                </SummaryHeader>
                <SummaryBody>
                    <h1>{new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(summary.total)}
                    </h1>
                </SummaryBody>
            </SummaryContent>
        </Container>
    )
}