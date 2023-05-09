import * as S from "./styled";
import { useState } from "react";
import CreateItemBox from "./CreateItemBox";
import ItemList from "./ItemList";

function Todos() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    setTodos((prevState) => [...prevState, { id: prevState.length, name: todoName }]);
  };

  return (
    <S.Container>
      <S.Title>TODO List</S.Title>
      <CreateItemBox onChange={setTodoName} createTodo={createTodo} />
      <ItemList todos={todos} />
    </S.Container>
  );
}

export default Todos;
