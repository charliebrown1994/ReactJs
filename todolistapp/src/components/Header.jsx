import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #1f93ff;
`;

const Header = () => {
  return (
    <div>
      <h3>오늘은 📆</h3>
      <Title>{new Date().toDateString()}</Title>
    </div>
  );
};

export default Header;
