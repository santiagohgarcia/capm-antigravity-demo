const cds = require('@sap/cds')
const { expect } = require('chai')
const { POST } = cds.test(__dirname + '/../..')

describe('Create Book Validation', () => {
    it('should fail to create a book with missing mandatory fields', async () => {
        const bookData = {
            title: 'Test Book'
            // Missing author, stock, pages
        }

        try {
            await POST('/odata/v4/catalog/Books', bookData)
            expect.fail('Should have failed')
        } catch (error) {
            expect(error.response.status).to.be.oneOf([400, 500])
        }
    })
})
