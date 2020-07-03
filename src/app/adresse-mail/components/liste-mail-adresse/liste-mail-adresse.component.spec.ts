import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListeMailAdresseComponent} from './liste-mail-adresse.component';

describe('ListeMailAdresseComponent', () => {
  let component: ListeMailAdresseComponent;
  let fixture: ComponentFixture<ListeMailAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMailAdresseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMailAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
