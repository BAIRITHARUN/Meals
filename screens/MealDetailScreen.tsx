import { FC, useLayoutEffect, useContext } from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetails/SubTitle'
import List from '../components/MealDetails/List'
import IconButton from '../components/IconButton'
// import { FavoritesContext } from '../store/context/favorites-context'

import { useAppSelector, useAppDispatch } from "../store/redux/app/hooks";

import { addFavorite, removeFavorite } from '../store/redux/favorites'

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetails'>

const MealDetailsScreen: FC<Props> = (props: Props) => {

    // const favoriteMealsCtx = useContext(FavoritesContext)
    const favaoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids)
    const dispatch = useAppDispatch()

    const mealId = props.route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealsFavorite = favaoriteMealIds.includes(mealId)

    function ChangeFavoriteStatusHandeler(): void {
        if(mealsFavorite) {
            dispatch(removeFavorite({id: mealId}))
        } else {
            dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealsFavorite ?'star' : 'star-outline'}
                    color='white'
                    onPress={ChangeFavoriteStatusHandeler} />
            }
        })
    }, [props.navigation, ChangeFavoriteStatusHandeler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image}
                source={{ uri: selectedMeal?.imageUrl }} />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealDetails
                duration={selectedMeal?.duration}
                complexicity={selectedMeal?.complexity}
                affordability={selectedMeal?.affordability}
                textStyle={styles.detailsText}

            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>

                    <List data={selectedMeal?.ingredients} />

                    <SubTitle>Steps</SubTitle>

                    <List data={selectedMeal?.steps} />
                </View>

            </View>

        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailsText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})