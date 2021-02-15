import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { colors } from '../../utils/styles';

export const GoogleMapContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 0 2rem;
`;

export const GoogleMapMarker = styled(FaMapMarkerAlt)`
color: ${colors.lighterBlue};
font-size: 2rem;
`
