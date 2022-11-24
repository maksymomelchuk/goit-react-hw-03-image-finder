import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Api } from './API/Api';
import { Gallery } from './Gallery/Gallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    data: [],
    isLoading: false,
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    try {
      if (searchValue !== prevState.searchValue || page !== prevState.page) {
        this.setState({ isLoading: true });
        const data = await Api(searchValue, page);
        this.setState(prevState => {
          const { hits, totalHits } = data;
          return {
            data: [...prevState.data, ...hits],
            isLoading: false,
            totalHits: totalHits,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  onFormSubmit = searchValue => {
    this.setState(prevState => {
      if (searchValue === this.state.searchValue) {
        return prevState;
      }
      return { searchValue, page: 1, data: [] };
    });
  };

  onButtonClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, isLoading: true };
    });
  };

  render() {
    const { data, totalHits, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <Gallery data={data} showImg={this.onImgShow} />
        {data.length < totalHits ? (
          <Button onClick={this.onButtonClick} />
        ) : null}
        {isLoading && <Loader />}
      </div>
    );
  }
}
