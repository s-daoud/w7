module.exports = {
  fetchAllBenches(callback, bounds){
    $.ajax({
      url: "/api/benches",
      data: bounds,
      success(response) {
        callback(response);
      }
    });
  }
};
