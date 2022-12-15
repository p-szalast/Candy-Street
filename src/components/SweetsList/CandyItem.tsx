import StyledCandyItem from "./CandyItemStyles";
import classicChocolateChipCookies from "../../assets/classic-chocolate-chip-cookies.jpg";

const CandyItem: React.FC<{ name: string }> = (props) => {
  return (
    <StyledCandyItem>
      <img alt="" src={classicChocolateChipCookies} />
      <div className="item__text">
        <h3 className="item__title">
          {props.name}Classic Chocolate Chip Cookies
        </h3>
        <p className="item__description"> opis opis opis opis</p>
      </div>
      <div className="btn-container">
        <div className="btns-add-remove">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button>Add To Cart</button>
      </div>
    </StyledCandyItem>
  );
};

export default CandyItem;
