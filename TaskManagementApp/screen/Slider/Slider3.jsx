import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageSlide from '../../components/slider_component/Image_Slide';
import Content from '../../components/slider_component/Content';
import Gradient from '../../components/slider_component/Gradient';
import ArrowButton from '../../components/slider_component/ArrowButton';

const Slider3 = () => {
  const navigation = useNavigation();

  const go_to_login = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageSlide source={require('../../assets/slide03.jpg')} />
      <Content
        title="Task Management"
        subtitle={["Manage your", "quickly for", "Results"]}
        highlightedText="Tasks"
        skipAction={go_to_login}
      />
      <Gradient colors={['#8B78FF', '#7065EB', '#5451D6']}>
        <ArrowButton onPress={go_to_login} />
      </Gradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Slider3;
