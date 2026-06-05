class Street {
    constructor(...args) {
        [this.id, this.name, this.color, this.coordinates] = args;
    }
}

module.exports = Street;