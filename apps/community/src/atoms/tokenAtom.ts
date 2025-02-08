import { atom } from 'jotai';

const accessTokenAtom = atom<string | null>(null);

export { accessTokenAtom };
