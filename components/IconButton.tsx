import { FC } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'

type IconButtonProps = {
    icon: 'star' | 'star-outline'
    color: string
    onPress: () => void
}

const IconButton: FC<IconButtonProps> = (props: IconButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={props.onPress}>
            <Ionicons
                name={props.icon}
                size={24}
                color={props.color} />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})