import * as actionTypes from "./actions";

const initialState = {
    programs: [
        {
            id: 1,
            name: "High Volume Program",
            cycles: 3,
            workouts: [
                {
                    id: 1,
                    name: "Upper Workout",
                    exercises: 3,
                    cycles: [1]
                }
            ]
        }
    ], //[{id:id, name:name, cycles:number, workouts:[{workout:id, [cycles]}]}]
    workouts: [
        {
            id: 1,
            name: "Upper Workout",
            exercises: [
                {
                    exercise: 1,
                    progression: "Double Progression",
                    targetsets: 10,
                    targetweight: 120,
                    targetreps1: 6,
                    targetreps2: 8,
                    targetrir1: 6,
                    targetrir2: 8
                }
            ]
        }
    ], //[{id:id, name: name, exercises:[{exercise:id, progression:progression, targetweight: weight, targetreps: reps, targetrir1:rir1, targetrir2:rir2}]
    exercises: [
        {
            id: 1,
            name: "Chest Press",
            primaryMuscles: ["chest", "abs"],
            secondaryMuscles: [""]
        }
    ] //[{id:id, name:name, primaryMuscles:primaryMuscles, secondaryMuscles:secondaryMuscles}]
};

const reducer = (state = initialState, action) => {
    console.log("payload");
    console.log(action.payload);
    switch (action.type) {
        case actionTypes.ADD_PROGRAM: {
            //DONE
            let workouts = action.payload.workouts;
            let transformedArray = [];

            workouts.forEach((cycle, index) => {
                cycle.forEach(workout => {
                    const transformedWorkout = transformedArray.filter(
                        w => w.name == workout.title
                    );
                    const added = transformedWorkout.length >= 1;

                    if (added) {
                        transformedWorkout.cycles.push(index + 1);
                    } else {
                        transformedArray.push({
                            id: transformedArray.length + 1,
                            name: workout.title,
                            exercises: workout.value[0].value,
                            cycles: [index + 1]
                        });
                    }
                });
            });

            return {
                ...state,
                programs: state.programs.concat({
                    workouts: transformedArray,
                    cycles: action.payload.cycles,
                    name: action.payload.name,
                    id: state.programs.length + 1,
                    workouts: []
                })
            };
        }
        case actionTypes.ASSIGN_WORKOUT_TO_PROGRAM: {
            //DONE
            let { program, workoutName, cycles } = action.payload;
            console.log("program to add = " + program);
            var workout;
            state.workouts.map((e, index) => {
                if (e.name == workoutName) {
                    workout = index + 1;
                }
            });

            let newPrograms = state.programs.filter(() => true);
            console.log(newPrograms);
            let newProgram = { ...state.programs[program - 1] };
            newProgram.workouts.concat(workout);
            newPrograms.splice(program - 1, 1, newProgram);

            return {
                ...state,
                programs: newPrograms
            };
        }
        case actionTypes.ADD_WORKOUT: {
            //DONE
            return {
                ...state,
                workouts: state.workouts.concat({
                    ...action.payload,
                    workout: state.workouts.length + 1,
                    exercises: []
                })
            };
        }
        case actionTypes.ADD_EXERCISE: {
            //DONE
            return {
                ...state,
                exercises: state.exercises.concat({
                    ...action.payload,
                    exercise: state.exercises.length + 1
                })
            };
        }
        case actionTypes.ASSIGN_PROGRESSION_TO_EXERCISE: {
            //DONE
            let {
                workout,
                exercise,
                progression,
                targetsets,
                targetWeight,
                targetReps1,
                targetReps2,
                targetRir1,
                targetRir2
            } = action.payload;
            let newWorkouts = state.workouts.filter(() => true);
            let newWorkout = { ...newWorkouts[workout - 1] };
            newWorkout.exercises.concat({
                exercise: exercise,
                progression: progression,
                targetsets: targetsets,
                targetweight: targetWeight,
                targetreps1: targetReps1,
                targetreps2: targetReps2,
                targetrir1: targetRir1,
                targetrir2: targetRir2
            });
            newWorkouts.splice(workout - 1, 1, newWorkout);

            return {
                ...state,
                workouts: newWorkouts
            };
        }
        case actionTypes.ASSIGN_EXERCISES_TO_WORKOUT: {
            //Done
            let { workout, exercises } = action.payload;

            let newWorkouts = state.workouts.filter(() => true);
            let newWorkout = { ...state.workouts[workout - 1] };
            newWorkout.exercises.concat(exercises);
            newWorkouts.splice(workout - 1, 1, newWorkout);
            return {
                ...state,
                workouts: newWorkouts
            };
        }
        case actionTypes.REORDER: {
            //TODO
            let { workouts } = action.payload;
            let newWorkouts = { ...state.workouts };
            for (i = 0; i < workouts.length; i++) newWorkouts[i] = workouts[i];

            return {
                ...state,
                workouts: newWorkouts
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
