import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageSlide from '../../components/slider_component/Image_Slide';
import Content from '../../components/slider_component/Content';
import ArrowButton from '../../components/slider_component/ArrowButton';
import Gradient from '../../components/slider_component/Gradient';
import Statusbar from '../../components/statusbar';

const Slider1 = () => {
  const navigation = useNavigation();

  const go_to_login = () => {
    navigation.navigate('Login');
  };

  const go_to_Slider2 = () => {
    navigation.navigate('Slider2');
  };

  return (
    <View style={styles.container}>
      <Statusbar />
      <ImageSlide source={require('../../assets/slide01.jpg')} />
      <Content
        title="Task Management"
        subtitle={["Let's Create a", "Space for your", "Workflows"]}
        highlightedText="Space"
        skipAction={go_to_login}
      />
      <Gradient colors={['#8B78FF', '#7065EB', '#5451D6']}>
        <ArrowButton onPress={go_to_Slider2} />
      </Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Slider1;
