import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lesson } from 'src/app/models/lesson';
import { removeLesson } from 'src/app/stateManagement/actions/lesson.action';

@Component({
  selector: 'app-lesson-read',
  templateUrl: './lesson-read.component.html',
  styleUrls: ['./lesson-read.component.scss']
})
export class LessonReadComponent implements OnInit {
  lessons:any;
  constructor(private store:Store<Lesson>){}
  ngOnInit(): void {
   this.store.select("lesson").subscribe(lesson=>{
        this.lessons = lesson;
   })
  }
  removeLesson(lesson:Lesson){
    this.store.dispatch(removeLesson(lesson));
  }
}
