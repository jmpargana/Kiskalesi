import React from 'react';

const list = {
  Explore: ['Restaurants', 'Shopping', 'Sailing'],
  Experience: ['Museums', 'Attractions', 'ParksGardens'],
  Infos: ['Hotels', 'HowToGet', 'Map'],
};

export const GenreInputSelector = props => (
  <div className="row">
    <div className="input-field col s12 m6">
      <select
        name="genre"
        onChange={props.onChange}
        value={props.value}
        required>
        <option value="" disabled>
          Choose your option
        </option>

        {Object.keys(list).map((obj, i) => (
          <optgroup label={obj} key={i}>
            {list[obj].map((val, j) => (
              <option value={val} key={i + j}>{val}</option>
            ))}
          </optgroup>
        ))}
      </select>
      <label>Genre</label>
    </div>
  </div>
);
