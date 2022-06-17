import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListDisplayComponent } from './recipe-list-display.component';

describe('RecipeListDisplayComponent', () => {
  let component: RecipeListDisplayComponent;
  let fixture: ComponentFixture<RecipeListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
