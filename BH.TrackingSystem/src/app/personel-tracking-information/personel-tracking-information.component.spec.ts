import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelTrackingInformationComponent } from './personel-tracking-information.component';

describe('PersonelTrackingInformationComponent', () => {
  let component: PersonelTrackingInformationComponent;
  let fixture: ComponentFixture<PersonelTrackingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelTrackingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonelTrackingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
