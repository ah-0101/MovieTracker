const ADD_CATEGORY = "category/ADD_CATEGORY"
const REMOVE_CATEGORY = "category/REMOVE_CATEGORY"


const add = (categories) => ({
    type: ADD_CATEGORY,
    payload: categories
})
const removeCategory = () => ({
    type: REMOVE_CATEGORY,
})

export const addCategory = () => async(dispatch) => {
    const res = await fetch('/api/categories/');
    const jsonRes = await res.json();
    dispatch(add(jsonRes));
};

export const logoutCategory = () => async(dispatch) => {
    dispatch(removeCategory());
};


const CategoryReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ADD_CATEGORY:
            newState = {};
            action.payload.categories.forEach(category => {
                newState[category.id] = category
            })
            return newState;
        case REMOVE_CATEGORY:
            return {};
        default:
            return state;
    }
}

export default CategoryReducer