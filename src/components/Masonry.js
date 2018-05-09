import React from 'react'
import MasonryLayout from 'react-masonry-layout'
 
class Masonry extends React.Component {
 
  state = {
    perPage: 10,
    items: ""
  }
 
  loadItems = () => {
      this.setState({
        items: this.state.items.concat(Array(this.state.perPage).fill())
      });
  }
 
  render() {
    let items;

    console.log('this.props', this.props.news);
    

    if(this.props.news) {
        items = this.props.news;
    }
    return (
      <div className="App">
 
        <MasonryLayout
          id="masonry-layout"
          infiniteScroll={this.loadItems}>
 
          {items.map((v, i) => {
            let height = i % 2 === 0 ? 200 : 100;
            return (
              <div
                key={i}
                style={{
                  width: '100px',
                  height: `${height}px`,
                  lineHeight: `${height}px`,
                  color: 'white',
                  fontSize: '32px',
                  display: 'block',
                  background: 'rgba(0,0,0,0.7)'
                }}>
                {i}
              </div>
            )}
          )}
 
        </MasonryLayout>
      </div>
    );
  }
}

export default Masonry;