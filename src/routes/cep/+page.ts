import type { PageLoad } from './$types';

// Apenas para utilizar o recurso de load()
export const load = (async () => {

    return {
        title: 'Encontrar CEP',
    };
}) satisfies PageLoad;
