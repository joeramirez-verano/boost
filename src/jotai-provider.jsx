import * as React from 'react';
import { Provider, createStore } from 'jotai';

export const store = typeof window !== 'undefined' ? window.jotaiStore || createStore() : createStore()
if (typeof window !== 'undefined' && !window.jotaiStore) {
  window.jotaiStore = store
}

export function JotaiProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
