import { categoryService } from '../service/categoryService';
import { MockBackend } from '@angular/http/testing';
import { Category } from '../model/category';
import { async, ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
import { WorkoutCategoryComponent } from './workout-category.component';

describe('WorkoutCategoryComponent', () => {
  let component: WorkoutCategoryComponent;
  let fixture: ComponentFixture<WorkoutCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: 
      [ WorkoutCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should retrieve single record',

inject([categoryService,
MockBackend], 

fakeAsync((categoryService:
categoryService, mockBackend:
MockBackend) => {

let res:
Category[]; 

categoryService.getAll().subscribe((response)=> {
res = response;

});

tick();

expect(res[0].CategoryName).toBe('Jogging');

}))

);



it('should retrieve record count',

inject([categoryService,
MockBackend], 

fakeAsync((categoryService:
categoryService, mockBackend:
MockBackend) => {

let res:
Category[]; 

categoryService.getAll().subscribe((response)=> {

res = response;

});

tick();

expect(res.length).toEqual(4);

}))

);


});
