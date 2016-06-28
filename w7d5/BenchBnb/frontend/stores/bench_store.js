const Store = require('flux/utils').Store;
const dispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');

let _benches = {};

const BenchStore = new Store(dispatcher);

BenchStore.all = function () {
  return Object.assign([], _benches);
};

BenchStore.resetAllBenches = function(benches) {
  _benches = {};
  benches.forEach(bench => {
    _benches[bench.id] = bench;
  });
  this.__emitChange();
};

BenchStore.addBench = function(bench){
  _benches[bench.id] = bench;
};

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this.resetAllBenches(payload.benches);
      break;
    case BenchConstants.BENCH_RECEIVED:
      this.addBench(payload.bench);
      break;
  }
};

module.exports = BenchStore;
