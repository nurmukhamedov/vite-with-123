import { useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const ExampleReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function reducer(state, action) {
        switch (action.type) {
            case ACTIONS.INCREMENT:
                return { count: state.count + 1 }
            case ACTIONS.DECREMENT:
                return { count: state.count - 1 }
            default:
                return state
        }
    }

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })
    }
    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <div>
            {state.count}
            <button onClick={() => increment()}>Plus</button>
            <br />
            <button onClick={() => decrement()}>Minus</button>
        </div>
    )
}

export default ExampleReducer