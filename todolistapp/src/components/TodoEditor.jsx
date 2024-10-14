import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  & > input {
    flex: 1;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    padding: 15px;
    transition: border 0.3s;
    &:focus {
      outline: none;
      border: 1px soild #1f93ff;
    }
  }
  & > button {
    width: 80px;
    border: none;
    border-radius: 5px;
    background: #1f93ff;
    color: #fff;
    cursor: pointer;
    transition: border 0.3s, background 0.3s, color 0.3s;
    &:hover {
      border: 1px solid #1f93ff;
      background: #fff;
      color: #1f93ff;
    }
  }
`;

const TodoEditor = () => {
  return (
    <Wrapper>
      <h4>새로운 Todo 작성하기 📣</h4>
      <FormGroup>
        <input type="text" placeholder="새로운 Todo..." />
        <button>추가</button>
      </FormGroup>
    </Wrapper>
  );
};

export default TodoEditor;
