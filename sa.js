function validateSuccessResponse(res) {
  test("status is 2xx", () => {
    expect(res.status).to.be.within(200, 299);
  });

  test("response has body", () => {
    expect(res.body).to.exist;
  });
}

module.exports = {
  validateSuccessResponse
};