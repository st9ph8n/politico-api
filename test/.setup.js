const chai = require('chai')
const sinon = require('sinon')

chai.use(require('chai-string'))

global.expect = chai.expect;
global.sinon = sinon;