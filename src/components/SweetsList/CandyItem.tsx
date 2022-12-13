import StyledCandyItem from "./CandyItemStyles";
import classicChocolateChipCookies from "../../assets/classic-chocolate-chip-cookies.jpg";

const CandyItem = () => {
  return (
    <StyledCandyItem>
      <img alt="" src={classicChocolateChipCookies} />
      <div className="item__text">
        <h3>classic-chocolate-chip-cookies</h3>
        <p>opis opis opis opis</p>
      </div>
      <div className="btn-container">
        <div className="btns-add-remove">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button>Add To cart</button>
      </div>
    </StyledCandyItem>
  );
};

export default CandyItem;
