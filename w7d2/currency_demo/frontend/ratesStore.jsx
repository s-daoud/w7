let _callbacks = [];
let _rates = {};

const RatesStore = {
  addListener(callback) {
    _callbacks.push(callback);
  },

  executeListeners() {
    for (let i = 0; i < _callbacks.length; i++) {
      _callbacks[i]();
    }
  },

  all() {
    return Object.assign({}, _rates);
  },

  fetchRates(currency) {
    $.ajax({
      url: `http://api.fixer.io/latest?base=${currency}`,
      type: "GET",
      dataType: "JSON",
      success: function(res) {
        _rates = res.rates;
        this.executeListeners();
      }.bind(this)
    });
  }
};


module.exports = RatesStore;
