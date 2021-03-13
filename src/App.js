import { Component } from 'react';
import s from './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import getImages from './services/services';
import Button from './components/Button/Button';
import Spinner from './components/Loader/Loader';

const { getFetch } = getImages;

class App extends Component {
  state = {
    query: '',
    page: 1,
    perPage: 12,
    gallery: [],
    msg: '',
    error: '',
  };

  // async componentDidMount() {
  //   console.log(`hi`);
  //   const { query, page } = this.state;

  //   getFetch(query, page).then(result => {
  //     console.log(result);
  //     this.setState({ gallery: [] });
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.fetchGallery();
    }
  }

  fetchGallery = () => {
    const { query, page, gallery } = this.state;

    getFetch(query, page)
      .then(result => {
        if (result.length) {
          this.setState({
            gallery: [...gallery, ...result],
            msg: '',
          });
          if (page !== 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        } else {
          this.setState({ msg: 'Nothing to show by your request!' });
        }
      })
      .catch(() => {
        this.setState({
          gallery: [],
          error: 'error',
        });
      });
  };

  onSubmitForm = searchQuery => {
    this.setState(({ query }) => {
      if (query === searchQuery) return;
      return {
        query: searchQuery,
        page: 1,
        gallery: [],
      };
    });
  };

  incrementPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  clickBtn = () => {
    console.log(`Button`);
    this.incrementPage();
  };

  render() {
    const { gallery, msg } = this.state;
    const { clickBtn, onSubmitForm } = this;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={onSubmitForm} />

        {msg && <p>{msg}</p>}
        <ImageGallery gallery={gallery} />

        {gallery.length > 0 && <Button onClickBtn={clickBtn} />}

        {gallery.length > 12 && <Spinner />}
      </div>
    );
  }
}

export default App;
