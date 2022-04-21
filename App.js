import { StatusBar } from 'expo-status-bar';

import Home from './src/views/Home';
import Task from './src/views/Task';
import QrCode from './src/views/QrCode';

const Routes=createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    QrCode
  })
);

export default function App() {
  return <Routes/>
}

