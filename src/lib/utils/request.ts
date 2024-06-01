import { type Writable, writable } from 'svelte/store'

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export default function request<T>(method:Method, url: string, requestData: any, queries: any = []) {

    //initial values
    const data: Writable<T>  = writable();
    const fetching  = writable(false);
    const error     = writable(false);

    //do the thing
    async function get() {
        fetching.set(true);

        let headers: any = {
            'Content-Type': 'application/json'
        };
        let queryString: string = '';
        let params: any = {
            method: method,
            Headers: headers,
            mode: 'cors',
            credentials: 'same-origin'
        };

        if(queries.length > 0) {
            queryString = '?';
            for(const query of queries) {
                queryString += query.key + '=' + query.value + '&';
            }
        }

        if(requestData && (method == 'POST' || method == 'PATCH')) {
            params.body = JSON.stringify(requestData);
        }

        try {
            const body = await fetch(url + queryString, params);
            const json = await body.json();
            data.set(json);
        } catch (exception:any) {
            error.set(exception);
        }
        fetching.set(false);
    }

    //run synchronously, dont wait
    get();

    return [data, fetching, error, get] as const;
}