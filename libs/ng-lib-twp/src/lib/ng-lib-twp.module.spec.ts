import { async, TestBed } from '@angular/core/testing';
import { NgLibTwpModule } from './ng-lib-twp.module';

describe('NgLibTwpModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgLibTwpModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgLibTwpModule).toBeDefined();
  });
});
