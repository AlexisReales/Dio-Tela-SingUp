import {
    Container,
    MenuRight,
    Row,
    Wrapper
} from "./styles"
import { Button } from "../Button"
import logo from "../../assets/logo-dio.png"

const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio" />
                </Row>
                <Row>
                    <MenuRight href="#">
                        Home
                    </MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header;