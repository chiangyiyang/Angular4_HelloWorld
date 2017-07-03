import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyArtistSearchComponent } from './spotify-artist-search.component';

describe('SpotifyArtistSearchComponent', () => {
  let component: SpotifyArtistSearchComponent;
  let fixture: ComponentFixture<SpotifyArtistSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyArtistSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyArtistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
