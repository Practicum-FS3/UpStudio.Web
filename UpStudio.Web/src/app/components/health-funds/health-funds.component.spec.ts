import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFundsComponent } from './health-funds.component';

describe('HealthFundsComponent', () => {
  let component: HealthFundsComponent;
  let fixture: ComponentFixture<HealthFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthFundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
