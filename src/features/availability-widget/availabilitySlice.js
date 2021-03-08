import { createSlice } from '@reduxjs/toolkit';
import profile from '../../common/images/profile-picture.png';

export const availabilitySlice = createSlice({
  name: 'availableNannies',
  initialState: [
    {
      id: 1,
      profile,
      name: 'Sarah',
      link: '#',
      neighborhood: 'North Sydney',
      days: ['Wednesday', 'Thursday', 'Friday'],
      workingHours: { start: '7:30', end: '5:30' },
    },
  ],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => [...state].filter((nanny) => nanny.id !== action.payload),
  },
});

export const { add, remove } = availabilitySlice.actions;
export default availabilitySlice.reducer;
