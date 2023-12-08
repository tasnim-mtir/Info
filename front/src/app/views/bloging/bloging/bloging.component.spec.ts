import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogingComponent } from './bloging.component';

describe('BlogingComponent', () => {
  let component: BlogingComponent;
  let fixture: ComponentFixture<BlogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
