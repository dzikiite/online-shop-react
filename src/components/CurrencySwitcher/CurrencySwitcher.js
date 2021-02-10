import React from 'react';
import { CurrencySwitcherContainer, CurrencyText } from './CurrencySwitcher.elements';
import { useDispatch } from 'react-redux';
import { changeCurrency } from '../../actions/globalActions';
import { USD, EUR } from '../../utils/consts';

const CurrencySwitcher = ({handleOpenCurrencyMenu}) => {
  const dispatch = useDispatch();

  const handleCurrencySwitch = currency => {
    if (currency === USD) dispatch(changeCurrency(USD));
    else dispatch(changeCurrency(EUR));
    handleOpenCurrencyMenu(prevValue => !prevValue);
  }

  return ( 
    <CurrencySwitcherContainer>
      <CurrencyText onClick={() => handleCurrencySwitch(USD)}>
        USD
      </CurrencyText>
      <CurrencyText onClick={() => handleCurrencySwitch(EUR)}>
        EUR
      </CurrencyText>
    </CurrencySwitcherContainer>
   );
}
 
export default CurrencySwitcher;