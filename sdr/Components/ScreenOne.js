import React from 'react';
import {SDRClient} from 'react-native-sdr';

export default function ScreenOne({navigation}) {
  const getData = () => {
    return {navigation};
  };

  return <SDRClient url="/screenone" {...getData()} />;
}
