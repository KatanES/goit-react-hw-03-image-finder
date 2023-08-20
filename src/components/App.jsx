import { Component } from 'react';
import { fetchImages } from 'api.js';
import { nanoid } from 'nanoid';
import { ImageGallery } from '/Users/ekaterinakohas/Documents/GitHub/goit-react-hw-03-image-finder/src/components/Gallery/ImageGallery/ImageGallery.jsx';

export class ImageApp extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };
  async componentDidMount() {
    const images = await fetchImages();
    this.setState({ images });
  }

  changeQuery = newQuery => {
    this.setState(
      {
        query: `${nanoid()}/${newQuery}`,
        images: [],
        page: 1,
      },
      () => this.fetchImages()
    );
  };
  // setImages = () => {}; (не нужен, потому что используется в DidUpdate)

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { query, page } = this.state;
      const searchQuery = query.split('/').pop();
      fetchImages(searchQuery, page).then(images => {
        this.setState({ images });
      });
      // HTTP запрос за query - не забываем отрезать request-id/ от query
      // this.setState (images: результат запроса)
    }

    // handleLoadMore = () => {
    //   this.setState(prevState => ({ page: prevState.page + 1 }));
    // };
  }
  render() {
    const { query, images } = this.state;
    return (
      <div>
        <div>
          <form
            onSubmit={evt => {
              evt.preventDefault();
              const newQuery = evt.target.elements.query.value.trim();
              if (newQuery === '') {
                alert('Oops! Search query is empty!');
              } else {
                this.changeQuery(newQuery);
                evt.target.reset();
              }
            }}
          >
            <input
              type="text"
              value={this.state.query}
              onChange={evt => {
                // Обробник подій onChange, який оновлює стан query
                this.setState({ query: evt.target.value });
              }}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <ImageGallery />
        </div>
        <div>
          <button>Load more</button>
        </div>
      </div>
    );
  }
}
