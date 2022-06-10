import { FC, useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from '../data/dummy-data'

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'
import MealsList from "../components/MealsList/MealsList";


type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;


const MealsOverviewScreen: FC<Props> = ({ route, navigation }: Props) => {

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) =>
            category.id === catId)?.title
        
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])


    return (
        <MealsList item={displayMeals}/>
        // <View style={styles.container}>
        //     <FlatList
        //         data={displayMeals}
        //         keyExtractor={(item) => item.id}
        //         renderItem={(itemData) => {
        //             const item = itemData.item;
        //             const mealItemProp = {
        //                 id: item.id,
        //                 title: item.title,
        //                 imageUrl: item.imageUrl,
        //                 duration: item.duration,
        //                 complexicity: item.complexity,
        //                 affordability: item.affordability
        //             }
        //             return <MealItem
        //                 {...mealItemProp}
        //             />
        //         }} />

        // </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

