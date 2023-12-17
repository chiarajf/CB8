import "./index.css";

const Pic = ({ picObj }) => {
  return (
    <div className="pic">
      <img src={picObj.img} alt={picObj.title} />
    </div>
  );
};

export default Pic;
