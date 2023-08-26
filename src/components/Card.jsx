import PropTypes from "prop-types";

const Card = ({ image, star, rating, content, price, openspots, online }) => {
  let badgetext;
  if (openspots === 0) {
    badgetext = "Sold Out";
  } else if (online) {
    badgetext = "Online";
  }

  return (
    <div className="w-[176px] h-[340px] p-2 shadow-md m-2 mt-1 relative ">
      {badgetext && (
        <div className=" bg-[#FFF] rounded-[5px] m-1  pl-1 pr-1 absolute top-[6px] left-[6px]">
          <span className="text-center text-[11px] font-normal">
            {badgetext}
          </span>
        </div>
      )}
      <img src={`/assets/${image}`} alt="" />
      <div className="rating flex items-center p-1 ">
        <span>
          <img src="/assets/star.svg" alt="" />
        </span>
        <span className="ml-1">{star.toFixed(1)}</span>
        <span className="text-[#918E9B] text-[12px] m-1">({rating})</span>
        <span className="text-[#918E9B] text-[12px] "> .USA</span>
      </div>
      <div className="text-sm p-1">
        <p>{content}</p>
        <p>
          <span className="font-semibold ">From ${price}</span> /person
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  image: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openspots: PropTypes.number.isRequired,
  online: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  rating: 3, // Set the default value you want here
};
export default Card;
