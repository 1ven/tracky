import * as fs from 'fs';

export const readSync = (path: string) => fs.readFileSync(path, 'utf-8');