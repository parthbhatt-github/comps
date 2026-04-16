import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsHome } from './elements-home';

describe('ElementsHome', () => {
  let component: ElementsHome;
  let fixture: ComponentFixture<ElementsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementsHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
