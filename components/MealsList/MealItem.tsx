import { FC } from 'react'
import {
    StyleSheet, View, Text,
    Pressable, Image, Platform
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import MealDetails from '../MealDetails'

type MealItemProp = {
    id: string,
    title: string,
    imageUrl: string,
    duration: number,
    complexicity: string,
    affordability: string
}

const MealItem: FC<MealItemProp> = (props: MealItemProp) => {

    const navigation = useNavigation<'MealDetails' | any>();

    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: props.id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed
                        ? styles.buttonPressed
                        : null}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: props.imageUrl }}
                            style={styles.image} />
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <MealDetails
                        duration={props.duration}
                        complexicity={props.complexicity}
                        affordability={props.affordability}
                        textStyle ={styles.textStyle}/>
                    
                </View>
            </Pressable>

        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    textStyle: {

    }

})