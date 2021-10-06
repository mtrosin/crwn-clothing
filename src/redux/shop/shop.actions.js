import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMaps) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMaps
});