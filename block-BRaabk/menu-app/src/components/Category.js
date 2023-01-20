import React from 'react';
import data from '../data';
console.log(data);

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'all',
      data: data,
    };
  }
  selectCategory = (e) => {
    this.setState((prevState) => {
      return {
        activeCategory: e.target.innerText,
        data:
          e.target.innerText === 'all'
            ? data
            : data.filter((obj) => obj.category === e.target.innerText),
      };
    });
  };
  render() {
    return (
      <>
        <ul className="flex hero">
          {['all', 'breakfast', 'lunch', 'shakes'].map((category) => {
            return (
              <li
                onClick={this.selectCategory}
                className="active"
                key={category}
              >
                {category}
              </li>
            );
          })}
        </ul>
        <div className="grid">
          {this.state.data.map((food, i) => {
            return (
              <div key={food.id} className="box">
                <img src={food.img} alt={i} />

                <div>
                  <h3>
                    <span>{food.title}</span>
                    <span className="price">{food.price}</span>
                  </h3>
                  <hr />
                  <p>{food.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Category;
