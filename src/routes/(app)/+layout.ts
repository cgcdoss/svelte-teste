import type { LayoutLoad } from './$types';
import {
    PUBLIC_TESTE,
} from '$env/static/public';

// o titleApplication irá sobrescrever o titleApplication do +layout.ts na raiz da pasta routes
export const load = (async () => {
    return {
        titleApplication: 'Agrupado',
        teste: PUBLIC_TESTE,
    };
}) satisfies LayoutLoad;
