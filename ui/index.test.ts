import * as UiElements from './index';

describe('ui', () => {
    it('should have exports', () => {
        expect(typeof UiElements).toBe('object');
    });

    it('should not have undefined exports', () => {
        Object.values(UiElements).forEach(element => {
            expect(Boolean(element)).toBeTruthy();
        });
    });
});