const test       = require('tape')
    , testCommon = require('abstract-leveldown/testCommon')
    , leveldown  = require('../')
    , abstract   = require('abstract-leveldown/abstract/chained-batch-test')

if (require.main === module)
  abstract.all(leveldown, test, testCommon)
