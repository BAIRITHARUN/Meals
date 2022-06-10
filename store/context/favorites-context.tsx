import React, { createContext, FC, useState } from "react";
import { FavoritesContextState } from "./types";

const favoritesContextDefultValues: FavoritesContextState = {
    ids: [],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { }
}

export const FavoritesContext = createContext<FavoritesContextState>(
    favoritesContextDefultValues
)


const FavoritesContextProvider: FC = ({ children }) => {

    const [favoriteMealsIds, setfavoriteMealsIds] = useState<string[]>([])
    function addFavorite(id: string) {
        setfavoriteMealsIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id: string) {
        setfavoriteMealsIds((cuurentFavIds) => cuurentFavIds.filter(
            mealId => mealId !== id
        ))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider
