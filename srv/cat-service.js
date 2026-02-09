const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Books } = this.entities;

    this.on('getBookCount', async (req) => {
        const result = await SELECT.one.from(Books).columns('count(1) as count');
        return result.count;
    });
});
