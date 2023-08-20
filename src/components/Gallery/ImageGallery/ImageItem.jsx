export const ImageItem = ({
  image: { webformatURL, id, largeImageURL, tags },
}) => {
  return (
    <div>
      <a href={webformatURL}></a>
      <img src={largeImageURL} alt={tags} width="100" />
    </div>
  );
};
