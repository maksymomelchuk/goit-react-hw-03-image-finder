import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = { searchValue: '' };

  onInputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(event.target.input.value);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css.SearchButton}>
            <span className={css.SearchButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.onInputChange}
            value={this.state.searchValue}
            name="input"
            className={css.SearchFormInput}
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
