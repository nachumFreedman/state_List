import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import * as wpActions from '../actions';
import { useDispatch } from 'react-redux';


let lastTap = null;
const tapDelay = 300;
let singleTapTimeout;

const StateItem = ({ eachState }) => {
    const dispatch = useDispatch();

    const handleDoubleTap = () => {
        clearTimeout(singleTapTimeout)
        const now = Date.now();
        if (
            lastTap &&
            (now - lastTap) < tapDelay
        ) {
            eachState.item.isSelected = !eachState.item.isSelected;
            dispatch(wpActions.updateStates(eachState));
        } else {
            lastTap = now;
            singleTapTimeout = setTimeout(() => {
                dispatch(wpActions.openModal(eachState));
            }, 300)
        }
    }
    return (
        <TouchableOpacity
            style={
                styles.stateItemContainer
            }
            onPress={handleDoubleTap}
        >
            <Text style={eachState.item.isSelected ?
                {
                    ...styles.eachState,
                    color: "red"
                }
                :
                {
                    ...styles.eachState,
                    color: "black"

                }}>
                {eachState.item.state}
            </Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({

    eachState: {
        textAlign: "center",
        fontSize: 30,
        margin: 5
    },
    stateItemContainer: {
        width: "50%"
    }
});
export default StateItem;