import {
    IconContainer,
    InputContainer,
    InputText,
} from "./styles"

const Input = ({leftIcon, name, ...rest}) => {
    return(
        <>
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <InputText />
            </InputContainer>
        </>
    )
}

export { Input }