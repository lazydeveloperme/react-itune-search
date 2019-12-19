import { configureStore } from '@reduxjs/toolkit';
import media from './media';

const store = configureStore({ reducer: media });

export default store;
