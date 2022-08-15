import { WarningWrapper } from "../WarningComponent/Warning.styles";
import {
  AdditionalInfoCard,
  AdditionalInfoCardDetail,
  AdditionalInfoCardTitle,
  CardContainer,
  CardSubtitle,
  CardTitle,
  TempInfo,
  TempInfoCard,
  TempInfoIcon,
  Magnitude,
  Unit,
} from "./card.styles";

const Card = ({ data, cityError, hasLocationAccess }) => {
  if (cityError.state) {
    return (
      <WarningWrapper>
        No city found with name {cityError.city}.Please try again.
      </WarningWrapper>
    );
  }

  if (!hasLocationAccess) {
    return (
      <WarningWrapper>
        Location Access Denied ! Please Check Again
      </WarningWrapper>
    );
  }

  const {
    name,
    last_updated,
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
    icon,
    feels_like,
  } = data;

  return (
    <CardContainer>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>Updated on {last_updated}</CardSubtitle>
      <TempInfoCard>
        <TempInfo>
          <Magnitude>{temp}</Magnitude>
          <Unit>&#176;C</Unit>
        </TempInfo>
        <AdditionalInfoCard>
          <AdditionalInfoCardTitle>Feels Like</AdditionalInfoCardTitle>
          <AdditionalInfoCardDetail>{feels_like}</AdditionalInfoCardDetail>
        </AdditionalInfoCard>
        <TempInfoIcon
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weather-icon"
        />
      </TempInfoCard>
      <TempInfoCard>
        <AdditionalInfoCard>
          <AdditionalInfoCardTitle>Humidity</AdditionalInfoCardTitle>
          <AdditionalInfoCardDetail>
            <Magnitude>{humidity}</Magnitude> <Unit>%</Unit>
          </AdditionalInfoCardDetail>
        </AdditionalInfoCard>
        <AdditionalInfoCard>
          <AdditionalInfoCardTitle>Pressure</AdditionalInfoCardTitle>
          <AdditionalInfoCardDetail>
            <Magnitude>{pressure}</Magnitude> <Unit>hPa</Unit>
          </AdditionalInfoCardDetail>
        </AdditionalInfoCard>
        <AdditionalInfoCard>
          <AdditionalInfoCardTitle>Min</AdditionalInfoCardTitle>
          <AdditionalInfoCardDetail>
            <Magnitude>{temp_min}</Magnitude>
            <Unit>&#176;C</Unit>
          </AdditionalInfoCardDetail>
        </AdditionalInfoCard>
        <AdditionalInfoCard>
          <AdditionalInfoCardTitle>Max</AdditionalInfoCardTitle>
          <AdditionalInfoCardDetail>
            <Magnitude>{temp_max}</Magnitude>
            <Unit>&#176;C</Unit>
          </AdditionalInfoCardDetail>
        </AdditionalInfoCard>
      </TempInfoCard>
    </CardContainer>
  );
};

export default Card;
