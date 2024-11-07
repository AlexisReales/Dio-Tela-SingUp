import { Button } from "../../components/Button";
import Header from "../../components/Header"
import { Input } from "../../components/Input"

import {
    Column,
    Container,
    LoginText,
    SubTitleSingup,
    Title,
    TitleSingup,
    Wrapper,
    Create,
    AwarningAlert
} from "./styles"

import {
    User,
    Mail,
    Lock
} from "lucide-react"

const SingUpF = () => {
    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleSingup>
                            Comece agora grátis
                        </TitleSingup>
                        <SubTitleSingup>
                            Crie sua conta e make the change._
                        </SubTitleSingup>
                        <form>
                            <Input placeholder="Nome completo" leftIcon={<User/>}/>

                            <Input placeholder="E-mail" type="password" leftIcon={<Mail/>}/>

                            <Input placeholder="Senha..." type="password" leftIcon={<Lock/>}/>

                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>

                        <Column>
                            <AwarningAlert>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</AwarningAlert>
                            <Create>
                                <p>já tenho conta.</p>
                                <LoginText>Fazer login</LoginText>
                            </Create>
                        </Column>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default SingUpF;