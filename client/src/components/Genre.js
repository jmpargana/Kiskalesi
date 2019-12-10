import React, {Component} from 'react';

export default class Genre extends Component {
  render() {
    const numOfRows = Math.ceil(this.props.events / 3);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>

        <div className="container">
          {Array(numOfRows)
            .fill()
            .map((_, rowIndex) => (
              <div className="row" key={rowIndex}>
                {this.props.events
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map(event => (
                    <div className="col-sm">
                      <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={event.img} />
                        <div className="card-body">
                          <h5 className="card-title">{event.title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
