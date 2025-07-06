import * as React from 'react';
import { Provider, createStore } from 'jotai';

export const store = createStore();

export function JotaiProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
