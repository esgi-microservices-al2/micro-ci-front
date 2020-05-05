import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommandComponent } from './project-command.component';

describe('ProjectCommandComponent', () => {
  let component: ProjectCommandComponent;
  let fixture: ComponentFixture<ProjectCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
