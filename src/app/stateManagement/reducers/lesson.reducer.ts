import { createReducer, on } from "@ngrx/store";
import { Lesson } from "src/app/models/lesson";
import { addLesson, removeLesson } from "../actions/lesson.action";


// State Type
export interface IState{
    data:Lesson[];
}
//Initial State
export const InitialLessonState : IState = {
    data:Array<Lesson>()
}
//Reducer
export const lessonReducer = createReducer(InitialLessonState,
    on(addLesson,(state,lesson)=>{
        const newState : IState ={
            data : [...state.data,lesson]
        }
        return newState;
    }),
    on(removeLesson,(state,lesson)=>{
        const deleteLesson = state.data.find(l=>l.id==lesson.id);
        const deleteLessonIndexNo = deleteLesson ? state.data.indexOf(deleteLesson):0;
        const newState : IState ={
            data:[...state.data]
        };
        newState.data.splice(deleteLessonIndexNo,1);
        return newState;
    })
    )