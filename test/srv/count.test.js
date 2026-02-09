const cds = require('@sap/cds');
const { expect } = require('chai');
const { GET } = cds.test(__dirname + '/../../');

describe('Book Count Function', () => {
    it('should return the total number of books', async () => {
        const { data } = await GET('/odata/v4/catalog/getBookCount()');
        expect(data).to.have.property('value');
        expect(data.value).to.be.a('number');
    });
});
