import React from 'react';

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
        <optgroup label="Explore">
          <option value="Restaurants">Restaurants</option>
          <option value="Shopping">Shopping</option>
          <option value="Sailing">Sailling</option>
        </optgroup>
        <optgroup label="Experience">
          <option value="Museums">Museums</option>
          <option value="Attractions">Attract</option>
          <option value="ParksGardens">Parks and Gardens</option>
        </optgroup>
        <optgroup label="Infos">
          <option value="Hotels">Hotels</option>
          <option value="HowToGet">How to get there</option>
          <option value="Map">Map</option>
        </optgroup>
      </select>
      <label>Genre</label>
    </div>
  </div>
);
