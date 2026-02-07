const cds = require('@sap/cds')
const { expect } = require('chai')

const { DELETE } = cds.test(__dirname + '/../..')

describe('Delete Books', () => {
    it('should delete a book', async () => {
        const { status } = await DELETE('/odata/v4/catalog/Books(1)')
        expect(status).to.equal(204)
    })
})
