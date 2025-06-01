import { atom, selector } from 'recoil'

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector",
    get: (p) => {
        const count = p.get(countAtom);
        console.log(count % 2)
        return count % 2;
    }
})