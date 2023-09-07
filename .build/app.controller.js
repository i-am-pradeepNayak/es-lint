class App extends Error {
    constructor (message) {
        super(message);
        this.name = 'App class Not found';
    }
}

module.exports = { App };
