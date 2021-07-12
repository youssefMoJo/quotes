import React, { Component } from 'react';
import { StyleSheet, Text, View, Share } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import Icon from 'react-native-vector-icons/FontAwesome5';


class ShareComp extends React.Component {

    onShare = async () => {
        try {
            const result = await Share.share({
                message: this.props.data.text + ` By: " ${this.props.data.author} "`
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Slider
                    childrenContainer={{ backgroundColor: 'red' }}
                    onEndReached={() => {
                        this.onShare()
                    }}
                    containerStyle={{
                        margin: 8,
                        backgroundColor: 'white',
                        borderRadius: 50,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '95%'
                    }}
                    sliderElement={
                        <Icon style={styles.icon} name="arrow-circle-right" size={45} />

                    }
                >
                    <Text style={styles.sliderText}>{'SLIDE TO SHARE'}</Text>
                </Slider>

            </View>
        )

    }

}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
    },
    sliderText: {
        color: "black",
        backgroundColor: "white",
        fontSize: 20
    },
    icon: {
        margin: 4,
    }
});

export default ShareComp;