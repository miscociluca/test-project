
class DataSource {
    constructor() {

    }

    static getAPis() {
        let url = 'https://api.publicapis.org/entries';
        return fetch(url)
            .then(response => {
                return response.json()
            })
    }
    static getCatFacts() {
        let url = 'https://catfact.ninja/fact';
        return fetch(url)
            .then(response => {
                return response.json()
            })
    }
}
export default DataSource;