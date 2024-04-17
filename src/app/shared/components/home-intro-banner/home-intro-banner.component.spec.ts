import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroBannerComponent } from './home-intro-banner.component';

describe('HomeIntroBannerComponent', () => {
  let component: HomeIntroBannerComponent;
  let fixture: ComponentFixture<HomeIntroBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIntroBannerComponent]
    });
    fixture = TestBed.createComponent(HomeIntroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
