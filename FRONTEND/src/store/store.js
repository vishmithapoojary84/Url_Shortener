
export const store = configureStore({
    reducer: {
        user: authReducer,
    }
});

export default store;