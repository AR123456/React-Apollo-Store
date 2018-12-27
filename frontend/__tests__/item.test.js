import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import { valueToObjectRepresentation } from "apollo-utilities";

const fakeItem = {
  id: "ABC123",
  title: "A cool Item ",
  price: 5000,
  description: "this item is really cool!",
  image: "dog.jpg",
  largeImage: "largedog.jpg"
};
describe("<Item/>", () => {
  it("renders the image properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find("img");
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });
  it("renders the price tab properly", () => {
    //this is where enzyme shallow rendering comes in
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find("PriceTag");
    console.log(PriceTag.children());
    expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  });
  it("renders out the buttons properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find(".buttonList");
    expect(buttonList.children()).toHaveLength(3);
    console.log("the console log here : ", buttonList.debug());
    expect(buttonList.find("Link")).toHaveLength(1);
    expect(buttonList.find("AddToCart").exists()).toBe(true);
  });
});
