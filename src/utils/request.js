const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export function post(url, data) {
    return fetch(BASE_URL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async res => {
        if (!res.ok) {
            throw new Error('请求失败')
        }
        return res.json()
    })
}