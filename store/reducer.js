import * as actionTypes from "./actions";

const initialState = {
    programs: [],   //[{program:id, name:name, cycles:number, workouts:[{workout:id, [cycles]}]}]
    workouts: [],   //[{workout:id, name: name, exercises:[{exercise:id, progression:progression, targetweight: weight, targetreps: reps, targetrir1:rir1, targetrir2:rir2}]
    exercises: [],  //[{exercise:id, name:name, primaryMuscles:primaryMuscles, secondaryMuscles:secondaryMuscles}]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PROGRAM: { //DONE
            return {
                ...state,
                programs: state.programs.concat({...action.payload,program:state.programs.length+1, workouts:[]})

            };
        }
        case actionTypes.ASSIGN_WORKOUT_TO_PROGRAM: { //DONE
            let { program, workoutName, cycles } = action.payload;
            var workout;
            state.workouts.map((e,index)=> {
                if (e.name==workoutName) {
                    workout = index+1;
                }
            })
            let newPrograms = {...state.programs};
            let newProgram = {...state.programs[program-1]};
            newProgram.workouts.concat(workout);
            newPrograms.splice(program-1,1,newProgram);
            
            return {
                ...state,
                programs: newPrograms
            };
        }
        case actionTypes.ADD_WORKOUT: { //DONE
            return {
                ...state,
                workouts: state.workouts.concat({...action.payload, workout:state.workouts.length+1, exercises:[]})
            };
        }
        case actionTypes.ADD_EXERCISE: { //DONE
            return {
                ...state,
                exercises: state.exercises.concat({...action.payload, exercise:state.exercises.length+1})
            };
        }
        case actionTypes.ASSIGN_PROGRESSION_TO_EXERCISE: { //DONE
            let { workout, exercise, progression, targetWeight, targetReps1, targetReps2, targetRir1, targetRir2 } = action.payload;
            let newWorkouts = {...state.workouts};
            let newWorkout = {...newWorkouts[workout-1]};
            newWorkout.exercises.concat({exercise: exercise, progression:progression, targetWeight: targetWeight, targetReps1:targetReps1, targetReps2:targetReps2, targetRir1:targetRir1, targetRir2:targetRir2});
            newWorkouts.splice(workout-1,1,newWorkout);

            return {
                ...state,
                workouts: newWorkouts
            };
        }
        case actionTypes.ASSIGN_EXERCISES_TO_WORKOUT: { //Done
            let { workout, exercises } = action.payload;

            let newWorkouts = {...state.workouts};
            let newWorkout = {...state.workouts[workout-1]};
            newWorkout.exercises.concat(exercises);
            newWorkouts.splice(workout-1,1,newWorkout);
            return {
                ...state,
                workouts: newWorkouts
            };
        }
        case actionTypes.REORDER: { //TODO
            return {
                ...state,
                
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;