import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tv_showsComponent } from './tv_shows.component';

describe('TvshowsComponent', () => {
  let component: Tv_showsComponent;
  let fixture: ComponentFixture<Tv_showsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tv_showsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tv_showsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
