
import { workoutcollectionService } from '../service/workoutcollectionService';
import { MockBackend } from '@angular/http/testing';
import { Category } from '../model/category';
import { async, ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { WorkoutTrackComponent } from './workout-track.component';
import { WorkOut } from '../model/workouttracker';

describe('WorkoutTrackComponent', () => {
  let component: WorkoutTrackComponent;
  let fixture: ComponentFixture<WorkoutTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should retrieve single record',

inject([workoutcollectionService,
MockBackend], 

fakeAsync((workoutcollectionService:
workoutcollectionService, mockBackend:
MockBackend) => {

let res: WorkOut[]; 

workoutcollectionService.getAll().subscribe((response)=> {
res = response;

});

tick();

expect(res[0].WorkOutTitle).toBe('Walking for 20 minutes');

}))

);



it('should retrieve record count',

inject([workoutcollectionService,
MockBackend], 

fakeAsync((categoryService:
workoutcollectionService, mockBackend:
MockBackend) => {

let res:
WorkOut[]; 

categoryService.getAll().subscribe((response)=> {

res = response;

});

tick();

expect(res.length).toEqual(4);

}))

);


});
