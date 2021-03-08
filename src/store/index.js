import { configureStore } from '@reduxjs/toolkit';
import availableNannies from '../features/availability-widget/availabilitySlice';

export default configureStore({
  reducer: {
    availableNannies,
  },
});
