import nanoid from 'nanoid';
import { useMemo } from 'react';

export const useId = (id) => useMemo(() => (id === undefined ? nanoid(5) : id), [id]);
