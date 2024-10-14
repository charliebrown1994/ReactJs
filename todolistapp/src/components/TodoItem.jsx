import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
  padding-bottom: 10px;
`;

const CheckBox = styled.div`
  width: 20px;
`;

const Title = styled.div`
  flex: 1;
`;

const TodoDate = styled.div`
  font-size: 14px;
  color: #808080;
`;

const DeletBtn = styled.div`
  & > button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    transition: background 0.3s, color 0.3s;
    &:hover {
      background: crimson;
      color: #fff;
    }
  }
`;

const TodoItem = () => {
  return (
    <Wrapper>
      <CheckBox>
        <input type="checkbox" />
      </CheckBox>
      <Title>할 일</Title>
      <TodoDate>{new Date().toLocaleDateString()}</TodoDate>
      <DeletBtn>
        <button>삭제</button>
      </DeletBtn>
    </Wrapper>
  );
};

export default TodoItem;
