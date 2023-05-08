import * as S from "./styled";

function Button(props) {
    
    const handleClick = () => {
        document.write("Hello World")
    }
    
    return <S.Button onClick={handleClick}>{props.children}</S.Button>
}

export default Button;