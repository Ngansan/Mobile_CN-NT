import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import DarkModeSwitch from './components/DarkModeSwitch';
import NotificationsSwitch from './components/NotificationsSwitch';
import Feedback from './components/Feedback';
import FAQ from './components/FAQ';
import ReturnNotify from './components/ReturnNotify';

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNotified, setNotified] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);

  const submitFeedback = (feedback) => {
    setFeedbackList([feedback, ...feedbackList]);
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <Header isDarkMode={isDarkMode}/>
      <DarkModeSwitch isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
      <NotificationsSwitch isNotified={isNotified} setNotified={setNotified} isDarkMode={isDarkMode}/>
      <Feedback onSubmitFeedback={submitFeedback} isDarkMode={isDarkMode}/>
      <FAQ feedbackList={feedbackList} isDarkMode={isDarkMode}/>
      <ReturnNotify isNotified={isNotified} feedback={feedbackList[0]} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
