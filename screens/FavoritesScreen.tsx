import { FC, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { color } from "react-native-reanimated";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
import { store } from '../store/redux/store';
import { useAppSelector, useAppDispatch } from "../store/redux/app/hooks";
import Meal from "../models/meal";

const FavoritesScreen: FC = () => {

    // const favoriteMealsCtc = useContext(FavoritesContext)
    const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids)

    const favoriteMeals = MEALS.filter((meal: Meal) => {
        return favoriteMealIds.includes(meal.id)
    }
    )
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals</Text>
            </View>
        )
    }

    return (
        <MealsList item={favoriteMeals} />
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})