export type FavoritesContextState = {
    ids: string[],
    addFavorite: (id: string) => void,
    removeFavorite: (id: string) => void
}

