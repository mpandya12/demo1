
import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    completedSteps: [],
  },
  reducers: {
    updateCompletedSteps: (state, action) => {
      state.completedSteps = action.payload;
    },
  },
});

export const { updateCompletedSteps } = profileSlice.actions;
export default profileSlice.reducer;
Update Redux Store on Step Completion:
Dispatch the updateCompletedSteps action whenever a step is completed.

javascript
Copy code
// Inside your Profilepage component

// ...

const dispatch = useDispatch();

const handleStepComplete = (stepIndex) => {
  const updatedSteps = [...completedstep, stepIndex];
  setcompletedstep(updatedSteps);
  dispatch(updateCompletedSteps(updatedSteps));
};

// Use handleStepComplete in your Tour component for each step completion callback.
Retrieve Completed Steps on Page Load:
When your page loads, retrieve the completed steps from the Redux store or local storage. Set the initial state accordingly.

javascript
Copy code
// Inside your Profilepage component

// ...

const completedStepsFromStore = useSelector(
  (state) => state.profile.completedSteps
);

useEffect(() => {
  setcompletedstep(completedStepsFromStore);
}, [completedStepsFromStore]);

// ...
Start Tour from the Last Completed Step:
Modify the Tour component to start from the last completed step.

javascript
Copy code
// Inside your Profilepage component

// ...

<Tour
  isOpen={IsToureopen}
  onRequestClose={handelToureColse}
  steps={stpes}
  initialStep={completedstep.length > 0 ? completedstep[completedstep.length - 1] : 0}
  getCurrentStep={(curr) => console.log(`The current step is ${curr + 1}`)}
/>