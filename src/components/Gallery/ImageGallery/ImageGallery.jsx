import { ImageItem } from '/Users/ekaterinakohas/Documents/GitHub/goit-react-hw-03-image-finder/src/components/Gallery/ImageGallery/ImageItem.jsx';
import { nanoid } from 'nanoid';

export const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>Немає зображень для відображення</div>;
  }
  return (
    <ul>
      {images.map(image => (
        <li key={nanoid()}>
          <ImageItem image={image} />
        </li>
      ))}
    </ul>
  );
};
