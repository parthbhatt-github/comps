import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsHome } from './views-home';

describe('ViewsHome', () => {
  let component: ViewsHome;
  let fixture: ComponentFixture<ViewsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewsHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
