import React, { useEffect, useState } from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import TabNavigation from "./TabNavigation";
import StateModal from "./StateModal";
import {
    ActivityIndicator
} from 'react-native';

const Stack = createStackNavigator();
function MyStack() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        })
    }, []);


    if (!ready) return <ActivityIndicator />
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="TabNavigation" component={TabNavigation} />
            {/* <Stack.Screen options={{
                headerShown: true,
                title: 'State details',
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        label="back"
                        onPress={() => {
                            props.onPress();
                        }}
                    />
                ),
            }} name="Modal" component={ } /> */}
        </Stack.Navigator>
    );
}

export default MyStack;