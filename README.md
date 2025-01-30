# What is Zustand

**Zustand is a state management library for small projects. It helps you store data in a single place with functions to manipulate or update the data.**

Its usage is very simple:

1. Create a file with the extension `.js` or `.ts`. For example, `src/store.js`.
2. Import the `create` function from the Zustand library:
    ```javascript
    import { create } from 'zustand';
    ```
3. Call the `create` function and pass a callback function `create(() => {})` which will take the initial state/value:
    ```javascript
    create(() => ({
        data: {
            key: "value" // can be an object, string, or any data type supported by JavaScript
        },
        data: "zustand",
        data: 21
    }));
    ```
4. Use `create((set) => {});` in the callback function. The `create` function passes a parameter named `set` which will be responsible for changing the state/data.

5. Add functions in the callback `(set) => ({ data: "", function1, function2 })` to make changes in the data when they are called:
    ```javascript
    export const useStore = create((set) => ({
        data: {},
        function: () => {
            set((state /* the current data */) => ({ logic to update the data })); // this is like setData given by useState, it will set the data when called
        }
    }));
    ```

6. Let's use our store. To use the store, we need to import the store we created and call the store with a callback function. This will return the state/data and functions we created:
    ```javascript
    import { useStore } from "./store.js";

    const Jsx = () => {
        const [data, function] = useStore();
        // or
        const data = useStore((state) => state.data);
        const function = useStore((state) => state.function);

        return (
            <>
                {data}
                <div onClick={function}></div>
            </>
        );
    };
    ```

    