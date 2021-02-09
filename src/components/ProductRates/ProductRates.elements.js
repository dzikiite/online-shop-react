import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const RatesContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: .5rem;
`

export const RatesStar = styled(AiFillStar)`
font-size: .8rem;
color: ${({ isYellow }) => isYellow ? '#FFC600' : '#C1C8CE'};
` 