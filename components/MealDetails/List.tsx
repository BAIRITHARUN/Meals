import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

type ListProp = {
    data: string[] | undefined
}

const List: FC<ListProp> = (props: ListProp) => {
    return (
        <>

            {props.data ?
                props.data.map((dataPoint) => {
                    return <View key={dataPoint} style={styles.listItem}>
                        <Text style={styles.itemText}>{dataPoint}</Text>
                    </View>
                }) : null}
        </>
    )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#321401',
        textAlign: 'center'
    }
})