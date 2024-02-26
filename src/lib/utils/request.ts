import { writable } from "svelte/store";
import { _GET } from "./queries";

declare type Method = "GET" | "POST" | "PUT" | "DELETE";

export default function fetch(method: Method, model: string, conditions?: String[]) {

    const data: any    = writable([]);
    const loading: any = writable(false);
    const error: any   = writable(false);

    async function get() {
        try {
            const result = await _GET(model)
            data.set(JSON.parse(result))
        } catch (e) {
            console.error(e);
        }
    }

    // dont wait, return first data
    get();

    return [data, get, loading, error];

}