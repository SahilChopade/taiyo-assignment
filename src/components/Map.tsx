import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
      className="w-full h-full"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((item) => {
          return (
            <Marker position={[item.countryInfo.lat, item.countryInfo.long]}>
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
