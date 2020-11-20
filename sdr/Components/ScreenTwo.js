import React from 'react';
import {SDRClient} from 'react-native-sdr';

export default function ScreenTwo({navigation}) {
  const getData = () => {
    return {navigation, console};
  };
  return <SDRClient url="/screentwo" {...getData()} />;
}
