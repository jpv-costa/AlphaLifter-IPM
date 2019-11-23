import * as actionTypes from "./actions";

const initialState = {
    programs: [],   //[{program:id, name:name, cycles:number, workouts:[{workout:id, cycle}]}]
    workouts: [],   //[{workout:id, name: name, exercises:[{exercise:id, progression:progression, targetweight: weight, targetreps: reps, targetrir1:rir1, targetrir2:rir2}]
    exercises: [],  //[{exercise:id, name:name, primaryMuscles:primaryMuscles, secondaryMuscles:secondaryMuscles}]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PROGRAM: //DONE
            return {
                ...state,
                programs: state.programs.concat({...action.payload,program:state.programs.length+1, workouts:[]})

            };
        case actionTypes.ASSIGN_WORKOUTS_TO_PROGRAM: //DONE
            const { program, workouts } = action.payload;
            const newPrograms = {...state.programs};
            const newProgram = {...state.programs[program-1]};
            newProgram.workouts.concat(workouts);
            newPrograms.splice(program-1,1,newProgram);
            
            return {
                ...state,
                programs: newPrograms
            };
        case actionTypes.ADD_WORKOUT: //DONE
            return {
                ...state,
                workouts: state.workouts.concat({...action.payload, workout:state.workouts.length+1, exercises:[]})
            };
        case actionTypes.ADD_EXERCISE: //DONE
            return {
                ...state,
                exercises: state.exercises.concat({...action.payload, exercise:state.exercises.length+1})
            };
        case actionTypes.ASSIGN_PROGRESSION_TO_EXERCISE: //DONE
            const { workout, exercise, progression, targetWeight, targetReps1, targetReps2, targetRir1, targetRir2 } = action.payload;
            const newWorkouts = {...state.workouts};
            const newWorkout = {...newWorkouts[workout-1]};
            newWorkout.exercises.concat({exercise: exercise, progression:progression, targetWeight: targetWeight, targetReps1:targetReps1, targetReps2:targetReps2, targetRir1:targetRir1, targetRir2:targetRir2});
            newWorkouts.splice(workout-1,1,newWorkout);

            return {
                ...state,
                workouts: newWorkouts
            };
        case actionTypes.ASSIGN_EXERCISES_TO_WORKOUT: //Done
            const { workout, exercises } = action.payload;
            const newWorkouts = {...state.workouts};
            const newWorkout = {...state.workouts[workout-1]};
            newWorkout.exercises.concat(exercises);
            newWorkouts.splice(workout-1,1,newWorkout);
            return {
                ...state,
                workouts: newWorkouts
            };
        case actionTypes.REORDER: //TODO
            return {
                ...state,
                
            };
        default:
            return state;
    }
};

export default reducer;