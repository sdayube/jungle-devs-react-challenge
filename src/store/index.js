import { configureStore } from '@reduxjs/toolkit';
import availableNannies from '../features/availability-widget/availabilitySlice';
import newsletter from '../features/info/infoSlice';

export default configureStore({
  reducer: {
    availableNannies,
    newsletter,
  },
});
