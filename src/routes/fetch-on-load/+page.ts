import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const response = await fetch("https://randomuser.me/api/", { skipLoading: true });
    const json = await response.json();
    return json;
}) satisfies PageLoad;
