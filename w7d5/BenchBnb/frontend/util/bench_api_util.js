module.exports = {
  fetchAllBenches(callback, bounds){
    $.ajax({
      url: "/api/benches",
      data: bounds,
      success(response) {
        callback(response);
      }
    });
  },
  createBench(callback, bench){
    $.ajax({
      url: "/api/benches",
      method: "POST",
      data: {bench: bench},
      success(response) {
        callback(response);
      }
    });
  }
};
