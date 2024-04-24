import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HTHomePage } from './hthome.page';

describe('HTHomePage', () => {
  let component: HTHomePage;
  let fixture: ComponentFixture<HTHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HTHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
