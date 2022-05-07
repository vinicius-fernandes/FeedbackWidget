import { ArrowArcLeft } from 'phosphor-react-native';
import React, {useState} from 'react';
import { View,TextInput,Image,Text,TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import {FeedbackType} from '../../components/Widget'
import { styles } from './styles';
import {feedbackTypes} from '../../utils/feedbackTypes'
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';
import {captureScreen} from 'react-native-view-shot'
import { api } from '../../libs/api';
import * as FileSystem from 'expo-file-system';

interface Props{
feedbackType:FeedbackType;  
onFeedbackCanceled: ()=>void;
onFeedbackSent: ()=>void; 
}
export function Form({feedbackType,onFeedbackCanceled,onFeedbackSent}:Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    const [screenshot,setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback,setIsSendingFeedback] = useState(false);
    const [comment,setComment] = useState("");

    function handleScreenshot(){
        captureScreen({
            format:'jpg',
            quality:0.5
        })
        .then(uri=>setScreenshot(uri))
        .catch(error=>console.log(error))
    }
    function handleScreenshotRemove(){
        setScreenshot(null);
    }

    async function handleSendFeedback(){
        if(isSendingFeedback){
            return;
        }
        setIsSendingFeedback(true);
        const base64Screnshoot = screenshot && await FileSystem.readAsStringAsync(screenshot,{encoding:'base64'})
        try{
            await api.post('/feedbacks',{
                type:feedbackType,
                screenshot:`data:image/png;base64,${base64Screnshoot}`,
                comment:comment
            })

            onFeedbackSent();

        }
        catch(error){
            console.log(error);
            setIsSendingFeedback(false);
        }

    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={onFeedbackCanceled}>
                <ArrowArcLeft size={24} weight="bold" color={theme.colors.surface_secondary} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Image source={feedbackTypeInfo.image} style={styles.image}/>
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>
        </View>

        <TextInput multiline style={styles.input} 
        placeholder="Nos conte o que está acontecendo..." 
        placeholderTextColor={theme.colors.surface_secondary} 
        autoCorrect={false}
        onChangeText={setComment}
        />

        <View style={styles.footer}>
        <ScreenshotButton  
        onTakeShot={handleScreenshot}
        onRemoveShot={handleScreenshotRemove}
        screenshot={screenshot}
        />
        <Button 
        onPress={handleSendFeedback}
        isLoading={isSendingFeedback}/>
        </View>
    </View>
  );
}