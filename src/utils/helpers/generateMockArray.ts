export const generateMockArray = (
    valueGenerator = (index: number) => ({
        key: "value" + index,
        label: "test" + index,
    }),
    max = 10,
    min = 1
) => {
    const length = Math.floor(Math.random() * (max - min)) + min;

    const arrayList = [];

    for (let index = 0; index < length; index++) {
        const value = valueGenerator(index);
        arrayList[index] = value;
    }

    return arrayList;
};
