import { HeaderContent, Container } from "./style";

interface HeaderProps{
    onModalOpen: ()=> void;
}

export default function Header(props: HeaderProps){
    return(
        <HeaderContent>
            <Container>
                <h1><i className="fas fa-meteor"></i> AstrOOnauta</h1>
                <button type="button" onClick={props.onModalOpen}>Nova transação</button>
            </Container>
        </HeaderContent>
    )
}