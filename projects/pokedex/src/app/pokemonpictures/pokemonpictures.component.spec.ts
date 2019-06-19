import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonpicturesComponent } from './pokemonpictures.component';

describe('PokemondetailsComponent', () => {
  let component: PokemonpicturesComponent;
  let fixture: ComponentFixture<PokemonpicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonpicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonpicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
