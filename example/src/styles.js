import styled from "styled-components";

export const Pad = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 4px;
  grid-column-gap: 4px;
  max-width: 180px;
`;

export const Button = styled.button`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  line-height: normal;
  font-size: 22px;
  margin: 0;
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease-in;
  &:before {
    content: "";
    background-color: #c0c0c0;
    border-radius: 10%;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(0.001, 0.001);
  }
  &:focus {
    outline: 0;
    color: #2f3941;
    &:before {
      animation: press_effect 0.8s ease-out;
    }
  }
`;

export const Subtext = styled.div`
  color: #737373;
  margin-top: 2px;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
