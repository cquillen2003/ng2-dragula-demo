import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ProjApp} from '../app/proj';

beforeEachProviders(() => [ProjApp]);

describe('App: Proj', () => {
  it('should have the `defaultMeaning` as 42', inject([ProjApp], (app: ProjApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ProjApp], (app: ProjApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

