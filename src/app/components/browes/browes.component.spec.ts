import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowesComponent } from './browes.component';

describe('BrowesComponent', () => {
  let component: BrowesComponent;
  let fixture: ComponentFixture<BrowesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowesComponent]
    });
    fixture = TestBed.createComponent(BrowesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
