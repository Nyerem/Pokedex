import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecounterComponent } from './pagecounter.component';

describe('PagecounterComponent', () => {
  let component: PagecounterComponent;
  let fixture: ComponentFixture<PagecounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagecounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
