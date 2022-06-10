import { FC } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Meal from '../../models/meal'

import MealItem from './MealItem'

type MealsListProps = {
    item: Meal[]
}

const MealsList: FC<MealsListProps> = (props:MealsListProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.item}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => {
                    const item = itemData.item;
                    const mealItemProp = {
                        id: item.id,
                        title: item.title,
                        imageUrl: item.imageUrl,
                        duration: item.duration,
                        complexicity: item.complexity,
                        affordability: item.affordability
                    }
                    return <MealItem
                        {...mealItemProp}
                    />
                }} />

        </View>
    )
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})