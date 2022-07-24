class GeneralService {
    _apiBase = '/api/v1/';

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        return await response.json();
    }

    postResource = async (url, data) => {
        const response = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        return await response.json();
    }

    deleteResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
    }

    putResource = async (url, data) => {
        const response = await fetch(`${this._apiBase}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        return await response.json();
    }
}

export default GeneralService;
