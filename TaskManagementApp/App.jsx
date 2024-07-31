
import React, {useEffect, useState} from 'react';
import { App_Navigation } from './config/App_Navigation';
import Splash_Screen from './screen/Splash_Screen';

const App = () => {
  const [hide_splash_screen, setHide_splash_screen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHide_splash_screen(true);
    }, 5000);
  }, []);

  return hide_splash_screen ? <App_Navigation /> : <Splash_Screen />;
  

  
};

export default App;