import { ImageItem } from '/Users/ekaterinakohas/Documents/GitHub/goit-react-hw-03-image-finder/src/components/Gallery/ImageGallery/ImageItem.jsx';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li>
          <ImageItem image={image} />
        </li>
      ))}
    </ul>
  );
};
