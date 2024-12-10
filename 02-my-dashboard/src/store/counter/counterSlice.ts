import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Siempre interface para como luce el state
interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState  = {
    //initial state
    count: 5,
    isReady: false,
} satisfies CounterState as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
        if (state.isReady) return;

        state.count = action.payload;
        state.isReady = true;
    },

    addOne(state) {
        state.count += 1
    },

    substractOne(state) {
        if ( state.count === 0) return;
        state.count -= 1
    },
    resetCount(state, action: PayloadAction<number>) {
        if(action.payload < 0 ) action.payload = 0;

        state.count = action.payload;

    }

  }
});

export const { addOne, substractOne, resetCount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;