import Nav from "./Nav";
const Header = () => {
  return (
    <div>
      <div className="bat">
        <a href="">Slick Fits</a>
        <Nav />
      </div>
      <div className="sub-bat">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
};

export default Header;
