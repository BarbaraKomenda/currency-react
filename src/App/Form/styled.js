import styled, { css } from "styled-components";

export const MainForm = styled.form`
   width: 100%;
    max-width: 500px;
    margin: 10px auto;
    color: black;
`;

export const Header = styled.h1`
  color: black;
  font-size: xxxlarge;
`;

export const LabelText = styled.span`
  width: 150px;
  max-width: 200px;
  display: inline-block;
  margin-right: 5px;

  ${({ required }) =>
    required &&
    css`
      font-size: 12px;
    `};
`;

export const Field = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  border-color: #ff7f50;
  border-radius: 5px;

  ${({ required }) =>
    required &&
    css`
      border-color: #ff7f50;
    `};

  ${({ invalid }) =>
    invalid &&
    css`
      background-color: #e5dfdf;
    `};

  ${({ select }) =>
    select &&
    css`
      background-color: #eee;
    `};
`;

export const Button = styled.button`
  width: 38%;
  border: none;
  background-color: #ff7f50;
  color: black;
  padding: 10px;
  border-radius: 5px;
  position: 0 0;
  text-align: center;
  display: block;
  margin: 0 auto;
  transition: 0.3s;

  &:hover {
    background-color: #999a9a;
  }

  &active {
    background-color: #5e808f;
  }
`;

export const Info = styled.p`
  text-align: center;
  margin-top: 50px;
  color: black;
`;
