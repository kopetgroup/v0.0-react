import React from "react";
import ReactDOM from "react-dom";
import Masonry from "react-masonry-css";

import "./style.css";

class Galeripet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      bs: {
        default: parseInt(this.props.col),
        1100: 3,
        700: 2,
        500: 2
      },
      attach: []
    };
  }

  componentDidMount() {
    var items = JSON.parse(document.getElementById("jspos").innerHTML);
    items = items.map(function(item) {
      return (
        <div key={item.src}>
          <a href={item.l}>
            <img src={item.src} width="100%" alt={item.t} />
            <div className="dS">{item.t}</div>
          </a>
        </div>
      );
    });

    // related
    var rels = JSON.parse(document.getElementById("jsrel").innerHTML);
    var ts = rels.map(function(item) {
      var s = { background: item.c };
      return (
        <div key={item.t} className="cS">
          <a href="#" className="bS" style={s}>
            {item.t}
          </a>
        </div>
      );
    });

    items.unshift(<div>{ts}</div>);

    this.setState({
      attach: items
    });
  }
  componentWillUnmount() {}

  render() {
    return (
      <Masonry breakpointCols={this.state.bs}>{this.state.attach}</Masonry>
    );
  }
}

/**
 * Render React
 */

const c = document.getElementById("imgal");
let cl = c.getAttribute("gridcol");
ReactDOM.render(<Galeripet col={cl} />, c);
