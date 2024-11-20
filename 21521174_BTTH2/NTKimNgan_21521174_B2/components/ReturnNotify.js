import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function ReturnNotify({isNotified, feedback}){
    useEffect(() => {
        if (isNotified && feedback) {
          Alert.alert('Thank you for your feedback!!!');
        }
    }, [feedback, isNotified]);
    
    return null;
}