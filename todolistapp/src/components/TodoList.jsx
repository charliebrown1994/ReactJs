import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Wrapper = styled.div``;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(220, 220, 220);
  padding: 15px 0;
  transition: border-bottom 0.3s;
  &:focus {
    outline: none;
    border-bottom: 1px solid #1f93ff;
  }
`;

const ItemLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 0;
`;

const TodoList = () => {
  return (
    <Wrapper>
      <h4>Todo List</h4>
      <Input type="search" placeholder="검색어를 입력하세요" />
      <ItemLists>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ItemLists>
    </Wrapper>
  );
};

export default TodoList;
