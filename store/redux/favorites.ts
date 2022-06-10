import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface favoritesState {
    ids: string []
}

// Define the initial state using that type
const initialState: favoritesState = {
    ids: [],
  }

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state: any, action: PayloadAction<{id: string}>) => {
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state: any, action: PayloadAction<{id: string}>) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
})

export const addFavorite = favoriteSlice.actions.addFavorite;

export const removeFavorite = favoriteSlice.actions.removeFavorite;

export default favoriteSlice.reducer;

