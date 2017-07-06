import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderList(CityData){
    const name=CityData.city.name;
    const Temperature=CityData.list.map(weather => weather.main.temp);
    const Pressure=CityData.list.map(weather => weather.main.pressure);
    const Humidity=CityData.list.map(weather => weather.main.humidity);
    const {lon,lat} =CityData.city.coord;
    console.log(CityData);
    return (
      <div>
        <tr key={name}>
          <td><GoogleMap  lon={lon} lat={lat} /></td>
          <td><Chart data={Temperature} color="red" units="K"/></td>
          <td><Chart data={Pressure} color="green" units="hPa"/></td>
          <td><Chart data={Humidity} color="black" units="%"/></td>
        </tr>
      </div>
    );
  }

  render(){
    return (
          <table className="table table-hover">
            <thead>
            <tr>
              <th>City</th>
              <th>Tempreature(K)</th>
              <th>Pressure(hPa)</th>
              <th>Humidity(%)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.renderList)}
            </tbody>
          </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
