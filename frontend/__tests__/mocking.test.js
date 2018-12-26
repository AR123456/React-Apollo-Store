function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}
Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    //simulate an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};
describe("mocking learning", () => {
  it("mocks a ref function", () => {
    const fetchDogs = jest.fn();
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
    fetchDogs("hugo");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });
  it("Can create a person", () => {
    const me = new Person("AR", ["fruit", "nuts"]);
    expect(me.name).toBe("AR");
  });
  it("can fetch foods", async () => {
    const me = new Person("AR", ["fruit", "nuts"]);
    //mock favFoods Function
    me.fetchFavFoods = jest.fn().mockResolvedValue(["yogert", "berrys"]);
    const favFoods = await me.fetchFavFoods();

    expect(favFoods).toContain("yogert");
  });
});
