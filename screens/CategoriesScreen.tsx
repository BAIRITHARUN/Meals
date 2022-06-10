import { FC } from 'react'
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'


type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;

const CategoriesScreen: FC<Props> = ({ route, navigation }: Props) => {

    function renderCategoryItem(itemData: Category) {
        
    }

    return (

        // <ScrollView>
        //     {CATEGORIES.map((category) => {
        //         return <CategoryGridTile key={category.id} title={category.title} color={category.color}/>
        //     })}
        // </ScrollView>

        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={(itemData) => {
                    function pressHandler() {
                        navigation.navigate('MealsOverview', {
                            categoryId: itemData.item.id
                        })
                    }
            
                    return <CategoryGridTile
                        title={itemData.item.title}
                        color={itemData.item.color}
                        onPress={pressHandler}
                    />
                }}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>

        // <FlatList
        //     data={CATEGORIES1}
        //     renderItem = {(itemData) => {

        //     }}
        // />

        //  <FlatList 
        //     data={CATEGORIES1}
        //      keyExtractor={item => item.id}
        //      // renderItem={renderCategoryItem}
        //      renderItem={(itemData)=> {
        //          <View>{itemData.item}</View>
        //      }}
        //  />

    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({

})