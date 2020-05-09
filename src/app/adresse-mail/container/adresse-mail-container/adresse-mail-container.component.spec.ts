import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdresseMailContainerComponent} from './adresse-mail-container.component';

describe('AdresseMailContainerComponent', () => {
  let component: AdresseMailContainerComponent;
  let fixture: ComponentFixture<AdresseMailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdresseMailContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseMailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
