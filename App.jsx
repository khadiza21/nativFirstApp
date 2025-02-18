/* eslint-disable react-native/no-inline-styles */

// rnfe
import React from 'react';
import { Text, View } from 'react-native';
// import First from './src/components/First';
// import InputText from './src/components/InputText';
// import FlatListScreen from './src/components/FlatListScreen';
// import SectionListScreen from './src/components/SectionListScreen';
// import LoginForm from './src/components/LoginForm';
// import ContactListScreen from './src/screens/ContactListScreen';
//import Grid from './src/components/Grid';
// import ClassComponents from './src/components/ClassComponents';
import UseEffect from './src/components/UseEffect';
import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';
import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase';
import HideShowToggle from './src/components/HideShowToggle';
import StyleWithButton from './src/components/StyleWithButton';
import Loader from './src/components/Loader';
import PressableComponent from './src/components/PressableComponent';
import StatusBarExample from './src/components/StatusBarExample';
import UseRefHook from './src/components/UseRefHook';
import ModalDialogBox from './src/components/ModalDialogBox';
import AlertExample from './src/components/AlertExample';
import GetApi from './src/components/GetApi';
import POST_API from './src/components/POST_API';
import PutApi from './src/components/PutApi';
import Api_Patch from './src/components/Api_Patch';
import DeleteApi from './src/components/DeleteApi';
import GetApiList from './src/components/GetApiList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <GetApiList />
     {/*  <DeleteApi />
     <Api_Patch />
      <PutApi />
      <POST_API />
    <GetApi />
      <AlertExample />
         <ModalDialogBox />
       <UseRefHook />
      <StatusBarExample />
       <PressableComponent />
  <Loader/>
 <StyleWithButton />
       <HideShowToggle />
  <UseEffectHookUnmountingPhase />
     <UseEffect />
  <UseEffectHookUpdatingPhase />
       <ClassComponents />
      <Grid />
      <ContactListScreen />
     <LoginForm />
      <SectionListScreen />
       <FlatListScreen />
      <Text style={{ fontSize: 30 }}>Khadiza is Nice </Text>
      <Text style={{ fontSize: 20 }}>Khadiza is  Smart</Text>
      <Button title="Press Here" />
      <First />
      <InputText /> */}
    </View>
  );
};

export default App;
