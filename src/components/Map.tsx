import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useEffect, useState } from "react";
import L from 'leaflet';
import Mark from "../assets/marker.png";

const customIcon = new L.Icon({
  iconUrl: Mark,
  iconSize: [35, 45], // Ensure the icon size matches your PNG dimensions
  iconAnchor: [17, 45], // Adjust based on your marker's image dimensions
  popupAnchor: [0, -45], // Adjust popup position
});
const position = [51.505, -0.09];
const Map = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://disease.sh/v3/covid-19/countries");
      setData(res.data);
      console.log(data);
    };
    getData();
  }, []);
  return (
      <MapContainer
      className="h-[25rem] w-auto lg:h-full lg:w-full"
        center={[51.505, -0.09]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((item) => {
          return (
            <Marker icon={customIcon} position={[item.countryInfo.lat, item.countryInfo.long]}>
              <Popup>
                <div className="p-2">
                  <h2 className="text-center">{item.country}</h2>
                  <div>
                    <div className="flex gap-4 justify-between">
                      <div>Total Active Cases: </div>
                      <div>{item.active}</div>
                    </div>
                    <div className="flex gap-4 justify-between">
                      <div>Total Recovered: </div>
                      <div>{item.recovered}</div>
                    </div>
                    <div className="flex gap-4 justify-between">
                      <div>Total Deaths: </div>
                      <div>{item.deaths}</div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
  );
};
export default Map;
