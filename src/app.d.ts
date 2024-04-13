// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		fetch: (input: RequestInfo | URL, init?: RequestInit | undefined, skipLoading?: boolean) => Promise<Response>;
	}

	function fetch(input: RequestInfo | URL, init?: RequestInit | undefined, skipLoading?: boolean): Promise<Response>;
}

export { };
