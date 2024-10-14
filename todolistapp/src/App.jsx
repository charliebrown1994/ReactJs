import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";

const Wrapper = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px; */
  width: 500px;
  margin: 100px auto 0;
`;

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래하기",
    createdDate: new Date().getTime(),
  },
];

const App = () => {
  const [todo, setTodo] = useState([mockTodo]);
  return (
    <Wrapper>
      <Header />
      <TodoEditor />
      <TodoList />
    </Wrapper>
  );
};

export default App;
