import styled from "styled-components";

export const CardContainer = styled.div`
  width: 50rem;
  height: 26rem;
  background-color: #444;
  box-shadow: -2px 2px 15px rgba(0, 0, 0, 0.07);
  padding: 1.6rem;
`;

export const CardTitle = styled.p`
  font-size: 2.4rem;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const CardSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

export const TempInfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TempInfo = styled.p`
  font-size: 5.2rem;
  color: #ffea51;
  display: flex;
  gap: 0.3rem;
`;

export const Magnitude = styled.span``;

export const Unit = styled.sup`
  font-size: 0.5em;
  text-transform: lowercase;
`;

export const TempInfoIcon = styled.img``;

export const AdditionalInfoCard = styled.p`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  color: #fff;
  text-transform: capitalize;
`;

export const AdditionalInfoCardTitle = styled.span`
  font-size: 1.2rem;
  text-align: center;
  color: #ccc;
`;

export const AdditionalInfoCardDetail = styled.span`
  font-size: 2.4rem;
  text-align: center;
  gap: 0.2rem;
`;
