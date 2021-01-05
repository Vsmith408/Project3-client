import React from "react";
import places from "../../apis/places";
import SearchBar from "../SearchBar";
import ResultsCard from "../ResultsCard";

class Home extends React.Component {
  state = { hotels: [], food: [], interest: [], isLoading: false };

  filterData = (arr) =>
    arr.map((item) => ({
      name: item.name,
      address: item.formatted_address,
      rating: item.rating,
    }));

  onSearchSubmit = async (type) => {
    this.setState({ isLoading: true });
    try {
      const response = await places.get(
        `http://localhost:3001/api/google/places`,
        {
          params: { type },
          headers: {
            Authorization: "AIzaSyAgyAAPxiaxnD23FRxnI03LYR7TKavLk1Q",
          },
        }
      );
      console.log(response.data);
      this.setState({
        hotels: this.filterData(response.data.hotels.results).slice(0, 9),
        food: this.filterData(response.data.food.results).slice(0, 9),
        interest: this.filterData(response.data.interest.results).slice(0, 9),
      });
    } catch (e) {
      alert("Something broke");
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", background: "white" }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.isLoading ? (
          <p>Loading....</p>
        ) : (
          <>
            <h1>Hotels</h1>
            <div className="ui grid">
              {this.state.hotels.map((hotel) => (
                <div className="five wide column" key={hotel.name}>
                  <ResultsCard
                    name={hotel.name}
                    address={hotel.address}
                    rating={hotel.rating}
                  />
                </div>
              ))}
            </div>

            <h1>Restaurants</h1>
            <div className="ui grid">
              {this.state.food.map((food) => (
                <div className="five wide column" key={food.name}>
                  <ResultsCard
                    name={food.name}
                    address={food.address}
                    rating={food.rating}
                  />
                </div>
              ))}
            </div>

            <h1>Points of Interest</h1>
            <div className="ui grid">
              {this.state.interest.map((interest) => (
                <div className="five wide column" key={interest.name}>
                  <ResultsCard
                    name={interest.name}
                    address={interest.address}
                    rating={interest.rating}
                  />
                </div>
              ))}
            </div>
          </>
          
        )}
      </div>
    );
  }
}
export default Home;