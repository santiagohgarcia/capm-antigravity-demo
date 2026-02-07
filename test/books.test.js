/* eslint-disable no-undef */
const cds = require('@sap/cds')
const { expect } = require('chai')

describe('Bookshop Service', () => {
    const { GET } = cds.test('serve', '--in-memory', '--project', __dirname + '/..')

    it('should return 4 books', async () => {
        const { data } = await GET('/odata/v4/catalog/Books')
        expect(data.value).to.have.lengthOf(4)
    })
})
