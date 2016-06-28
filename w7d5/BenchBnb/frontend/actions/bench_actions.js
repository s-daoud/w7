const dispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');
const BenchApiUtil = require('../util/bench_api_util');

const BenchActions = {
  fetchAllBenches(bounds){
    BenchApiUtil.fetchAllBenches(this.receiveAllBenches, bounds);
  },
  receiveAllBenches(benches){
    dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  createBench(bench){
    BenchApiUtil.createBench(this.receiveBench, bench);
  },
  receiveBench(bench){
    dispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  }
};

module.exports = BenchActions;
