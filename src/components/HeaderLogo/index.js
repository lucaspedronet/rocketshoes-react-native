import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ButtonLogo, ImageLog } from './styles'
import Logo from '../../assets/logo/drawable-xxxhdpi/Logo.png'

export default function HeaderLogo() {
  const navigation = useNavigation()
  return (
    <ButtonLogo onPress={() => navigation.navigate("Home")} >
      <ImageLog
        source={Logo}
      />
    </ButtonLogo>
  );
}
