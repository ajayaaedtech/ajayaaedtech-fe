"use client";
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust the path as necessary
export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
