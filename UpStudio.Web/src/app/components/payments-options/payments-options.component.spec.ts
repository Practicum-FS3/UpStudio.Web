import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsOptionsComponent } from './payments-options.component';

describe('PaymentsOptionsComponent', () => {
  let component: PaymentsOptionsComponent;
  let fixture: ComponentFixture<PaymentsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
