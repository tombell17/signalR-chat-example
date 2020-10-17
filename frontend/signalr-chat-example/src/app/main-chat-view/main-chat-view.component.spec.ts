import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatViewComponent } from './main-chat-view.component';

describe('MainChatViewComponent', () => {
  let component: MainChatViewComponent;
  let fixture: ComponentFixture<MainChatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainChatViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
