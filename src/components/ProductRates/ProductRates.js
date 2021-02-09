import React from 'react';
import { getStars } from '../../utils/helpers';

import { RatesContainer } from '../ProductRates/ProductRates.elements';

const ProductRates = ({rate}) => {
    const stars = getStars(rate);

    return ( 
        <RatesContainer>
            {stars}
        </RatesContainer>
     );
}
 
export default ProductRates;