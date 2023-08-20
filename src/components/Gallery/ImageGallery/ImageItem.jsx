export const ImageItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <div>
      <a href={largeImageURL} target="_blank" rel="noopener noreferrer">
        <img src={webformatURL} alt={tags} width="100" />
      </a>
    </div>
  );
};
