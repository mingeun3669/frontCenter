import Button from "../../../components/Button";
import * as S from "./styled";

function CreateItemBox({ onChange, createTodo }) {
  const handleInputValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <S.InputBox>
      <S.Input placeholder="Write TODO in here" onChange={handleInputValue}></S.Input>
      <Button onClick={createTodo}>등록</Button>
    </S.InputBox>
  );
}

export default CreateItemBox;
