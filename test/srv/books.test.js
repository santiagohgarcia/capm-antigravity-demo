/* eslint-disable no-undef */
const cds = require('@sap/cds')
const { expect } = require('chai')

const { GET } = cds.test(__dirname + '/../..')

describe('Bookshop Service', () => {

    it('should return 4 books with all fields', async () => {
        const { data } = await GET('/odata/v4/catalog/Books')
        expect(data.value).to.have.lengthOf(4)
        data.value.forEach(book => {
            expect(book).to.have.property('ID')
            expect(book).to.have.property('title')
            expect(book).to.have.property('author')
            expect(book).to.have.property('stock')
            expect(book).to.have.property('pages')
        })
    })
})
