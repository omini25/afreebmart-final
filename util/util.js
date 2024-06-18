// Find Product Index From List
export const findProductIndex = (list, slug) => {
    if (Array.isArray(list)) {
        const index = list.findIndex((item) => item.slug === slug);
        return index;
    }
    return -1; // return -1 if list is not an array
};

export const findProductIndexById = (list, id) => {
    if (Array.isArray(list)) {
        const index = list.findIndex((item) => item.id === id);
        return index;
    }
    return -1; // return -1 if list is not an array
};

export const deleteProduct = (state, productId) => {
    // Your function implementation here
    return state.filter((product) => product.id !== productId);
};