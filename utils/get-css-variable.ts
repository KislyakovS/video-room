const getCssVariable = (name: string) => {
    const root = document.querySelector(':root');

    if (!root) {
        throw new Error('no \':root\' element');
    }

    const rootStyles = getComputedStyle(root);

    return rootStyles.getPropertyValue(name);
};

export default getCssVariable;
