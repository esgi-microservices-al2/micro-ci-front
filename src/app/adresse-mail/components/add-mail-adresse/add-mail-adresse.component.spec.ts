import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddMailAdresseComponent} from './add-mail-adresse.component';

describe('AddMailAdresseComponent', () => {
  let component: AddMailAdresseComponent;
  let fixture: ComponentFixture<AddMailAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddMailAdresseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMailAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
