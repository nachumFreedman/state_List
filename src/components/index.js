import React, { useState } from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import TabNavigation from "./TabNavigation";
import StateModal from "./StateModal";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="TabNavigation" component={TabNavigation} />
            <Stack.Screen options={{
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
            }} name="Modal" component={StateModal} />
        </Stack.Navigator>
    );
}

export default MyStack;