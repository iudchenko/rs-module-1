// useTypedSelector.ts
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './store'; // replace with your actual path

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
