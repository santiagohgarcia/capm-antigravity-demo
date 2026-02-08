const cds = require('@sap/cds')
const { expect } = require('chai')

const { POST } = cds.test(__dirname + '/../..')

describe('Create Book', () => {
    it('should create a book with auto-generated UUID', async () => {
        const bookData = {
            title: 'Test Book',
            author: 'Test Author',
            stock: 10,
            pages: 100
        }

        const { data, status } = await POST('/odata/v4/catalog/Books', bookData)

        expect(status).to.equal(201)
        expect(data).to.have.property('ID')
        expect(data.ID).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i) // UUID regex
        expect(data.title).to.equal(bookData.title)
    })
})
