const cds = require('@sap/cds')
const { expect } = require('chai')

const { GET, DELETE } = cds.test(__dirname + '/../..')

describe('Delete Books', () => {
    it('should delete a book', async () => {
        const { data } = await GET('/odata/v4/catalog/Books')
        const bookToDelete = data.value[0]
        const { status } = await DELETE(`/odata/v4/catalog/Books(${bookToDelete.ID})`)
        expect(status).to.equal(204)
    })
})
