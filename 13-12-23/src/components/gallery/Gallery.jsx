import Pic from "../pic/pic";
import "./index.css";

const Gallery = ({ GalleryObj }) => {
  return (
    <div className="gallery">
      <h2>{GalleryObj.title}</h2>

      <div className="gallery-items">
        {GalleryObj.list.map((image) => (
          <Pic picObj={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
