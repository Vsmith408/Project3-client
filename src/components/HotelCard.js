import React from "react";

class HotelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.hotelRef = React.createRef();
  }

  componentDidMount() {
    this.hotelRef.current.addEventListener("load", this.setSpans);
  }

  //   setSpans = () => {
  //     const height = this.hotelRef.current.clientHeight

  //     const spans = Math.ceil(height / 10)
  //     //
  //     this.setState({ spans: spans })
  //   }

  render() {
    const { description, urls } = this.props.hotel;
    return (
      <div>
        <img ref={this.hotelRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default HotelCard;

// ref - createRef and wire to individual element by passing it to individual property
// style={{ gridRowEnd: `span ${this.state.spans}` }}
