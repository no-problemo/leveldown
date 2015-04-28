const test       = require('tape')
    , testCommon = require('abstract-leveldown/testCommon')
    , leveldown  = require('../')
    , abstract   = require('abstract-leveldown/abstract/del-test')

if (require.main === module)
  abstract.all(leveldown, test, testCommon)
