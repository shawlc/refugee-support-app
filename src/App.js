import React from "react";
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer ,GeoJSON} from 'react-leaflet'
import './App.css';
import countries from './countries.json';
import programs from './refugeeprograms.json';
import $ from 'jquery';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function About() {
  return (<h2>About</h2>);
}

function CashSupport() {
  return <h2>Users</h2>;
}


function InteractiveMap() {

  {/* A JSX comment

  function clickToFeature(feature){
    if (feature.properties && feature.properties.name) {
      return $('#sidebar').append("<div id='locale'>"+feature.properties.name+"</div>")
    }
  }

  function onEachFeature(feature, layer){
    layer.on({
      click: this.clickToFeature
    });
    }

    */}



    function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.name && programs[feature.properties.name]) {

        var buffer = ''
        var progArray = programs[feature.properties.name]
          for (var i = 0; i < progArray.length; i++) {
            var item = progArray[i];

            if(item.Website != ""){
              buffer += " <li><a href=" + item.Website + ">" + item.Name + "</a><ul>";
            }else{
              buffer += " <li>" + item.Name + "<ul>";
            }

            if(item.Affiliations != ""){
              buffer+="<li>Affiliations : " + item.Affiliations + "</li>"
            }
            if (item.Services != "") {
              buffer+="<li>Services : " + item.Services + "</li>"

            }
            buffer+="</ul></li>"
          }


        // specify popup options
        var customOptions =
            {
            'className' : 'custom'
            }

        layer.bindPopup(feature.properties.name+"<ul>"+buffer+"</ul>",customOptions);
      }
    }

    function featureFilter(feature){
      if (programs.hasOwnProperty(feature.properties.name)){
        return true
      }
    }

  return (
      <div>
      <div id="sidebar"></div>
      <Map id="map" center={[0.0, -0.0]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <GeoJSON data={countries} onEachFeature={onEachFeature} filter={featureFilter}/>
      </Map>
      </div>
  )
}

function Resources() {
  return <h2>Home</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className = "navigation">
          <div className = "title"><span>Sustainable Livelihoods and Cash Support <br></br>for Refugees Around the World</span></div>
          <div className="btn-group">
            <Link to="/resources/"><button id="link" type="button">Resources for Lawyers and NGOs</button></Link>
            <Link to="/map/"><button id="link" type="button">Interactive Map</button></Link>
            <Link to="/cashsupport/"><button id="link" type="button">Why Cash-based Support</button></Link>
            <Link to="/about/"><button id="link" type="button">About Us</button></Link>
          </div>
        </nav>

        <Route path="/about/" component={About} />
        <Route path="/cashsupport/" component={CashSupport} />
        <Route path="/map/" exact component={InteractiveMap} />
        <Route path="/resources/" exact component={Resources} />
      </div>
    </Router>
  );
}

export default AppRouter;
