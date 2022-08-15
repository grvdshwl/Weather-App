import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCityWeather } from "../../redux/reducer/weather/weather.action";
import { TempInfoIcon } from "../card/card.styles";
import {
  Button,
  DropDownContainer,
  DropDownElement,
  DropDownList,
  Form,
  Header,
  HeaderIcon,
  Magnitude,
  NavContainer,
  SearchBar,
  Unit,
  WeatherInfoContainer,
  WeatherInfoDetail,
} from "./Navigation.styles";
import { cities } from "../../utils/cities";

const Navigation = ({ data, cityError }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const cityData = [...new Set(cities)];

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCityWeather(city));
    setCity("");
  };

  const handleDropDown = (data) => {
    setCity(data);
    dispatch(fetchCityWeather(data));
    setCity("");
  };

  return (
    <NavContainer>
      <HeaderIcon />
      <Header>Climate</Header>
      {!cityError.state && data && (
        <WeatherInfoContainer>
          <WeatherInfoDetail>{data.name}</WeatherInfoDetail>
          <WeatherInfoDetail>
            <Magnitude>{data.temp}</Magnitude>
            <Unit>&#176;C</Unit>
          </WeatherInfoDetail>
          <WeatherInfoDetail>
            <TempInfoIcon
              src={`http://openweathermap.org/img/wn/${data.icon}.png`}
              alt="weather-icon"
            />
          </WeatherInfoDetail>
        </WeatherInfoContainer>
      )}
      <Form onSubmit={handleSubmit}>
        <SearchBar onChange={(e) => setCity(e.target.value)} value={city} />
        <Button>Search</Button>
      </Form>
      {city.length && (
        <DropDownContainer>
          <DropDownList>
            {cityData
              .filter((name) =>
                name.toLowerCase().startsWith(city.toLowerCase())
              )
              .slice(0, 10)
              .map((city) => (
                <DropDownElement onClick={() => handleDropDown(city)}>
                  {city}
                </DropDownElement>
              ))}
          </DropDownList>
        </DropDownContainer>
      )}
    </NavContainer>
  );
};

export default Navigation;
