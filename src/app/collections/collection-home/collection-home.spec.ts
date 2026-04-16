import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHome } from './collection-home';

describe('CollectionHome', () => {
  let component: CollectionHome;
  let fixture: ComponentFixture<CollectionHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionHome],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
