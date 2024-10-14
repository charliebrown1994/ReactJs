import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <TodoEditor />
      <TodoList />
    </Wrapper>
  );
};

export default App;
