describe('Sanity Test: APP', () => {
    it('Is Running', () => {
        const test1 = 1;
        expect(test1).toBe(1);
        expect(test1).not.toBe(2);
    });
});
