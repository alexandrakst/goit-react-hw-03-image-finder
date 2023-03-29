import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export default class App extends Component {
  state = {
    searchInput: '',
  };

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchInput={this.state.searchInput} />
      </div>
    );
  }
}
