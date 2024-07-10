import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemClassesComponent } from './system-classes.component';

describe('SystemClassesComponent', () => {
  let component: SystemClassesComponent;
  let fixture: ComponentFixture<SystemClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
