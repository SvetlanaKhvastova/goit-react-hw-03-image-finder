import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    queryValue: '',
  };

  handleChange = e => {
    this.setState({
      queryValue: e.target.value,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    if (this.state.queryValue.trim() === '') {
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(this.state.queryValue);

    this.setState({
      queryValue: '',
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            onChange={handleChange}
            value={this.state.queryValue}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
