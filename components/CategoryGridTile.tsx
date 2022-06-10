import { FC } from 'react'
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native'

type CategoryGridTileProps = {
    title: string,
    color: string,
    onPress: () => void
}

const CategoryGridTile: FC<CategoryGridTileProps> = (props: CategoryGridTileProps) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                onPress={props.onPress}
                android_ripple={{color:'#ccc'}}
                style={({pressed})=> [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
       opacity: 0.5 
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})