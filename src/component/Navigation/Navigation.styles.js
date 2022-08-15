import styled from "styled-components";
import sunIcon from "./sun.png";

export const NavContainer = styled.div`
  width: 100%;
  background-color: #212529;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  position: relative;
`;

export const Header = styled.div`
  font-size: 2.4rem;
  color: #fff;
  margin-left: 1.2rem;
  cursor: pointer;
`;

export const HeaderIcon = styled.img.attrs({
  src: sunIcon,
  width: "40px",
  height: "40px",
})`
  display: inline;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  gap: 1rem;
`;

export const WeatherInfoDetail = styled.span`
  font-size: 1.6rem;
  color: #ddd;
`;
export const Magnitude = styled.span``;

export const Unit = styled.sup`
  font-size: 0.7em;
  text-transform: lowercase;
`;

export const Form = styled.form`
  width: 300px;
  position: absolute;
  right: 20rem;
`;

export const SearchBar = styled.input.attrs({
  type: "search",
  placeholder: "Please enter a city",
})`
  border: none;
  outline: none;
  padding: 8px 12px;
  width: 20rem;
  margin-right: 2rem;
`;

export const DropDownContainer = styled.div`
  width: 20rem;
  box-shadow: inset 0 0 1px #000;
  height: 20rem;
  position: absolute;
  right: 30rem;
  top: 4.55rem;
  background-color: #fff;
  border-top: 0;
`;

export const DropDownList = styled.ul`
  list-style: none;
  padding: 0.8rem;
`;

export const DropDownElement = styled.li`
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid white;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 1.4rem;
  cursor: pointer;
  color: #000;
`;
