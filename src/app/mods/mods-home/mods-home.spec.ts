import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsHome } from './mods-home';

describe('ModsHome', () => {
  let component: ModsHome;
  let fixture: ComponentFixture<ModsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModsHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ModsHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
