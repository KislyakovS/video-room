import getCssVariable from './get-css-variable';

describe('getCssVariable:', () => {
    const VARIABLE_VALUE = 'VARIABLE_VALUE'

    beforeEach(() => {
        global.document.querySelector = jest.fn(() => true);
        Object.defineProperty(window, 'getComputedStyle', {
            value: () => ({
                getPropertyValue: () => VARIABLE_VALUE
            })
        });
    })

    it('should return the value of the css variable', () => {
        const cssVariableValue = getCssVariable('--css-variable-name');

        expect(cssVariableValue).toBe(VARIABLE_VALUE);
    });
})