import axios from "axios";

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "Bethlehem" },
  headers: {
    "X-RapidAPI-Key": "6c644fd532msh6303fddf6235f12p1b9386jsn1ba1ad3612be",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const WeatherApi = async () => {
  const response: any = await axios.request(options);

  return response.data;
};

const Weather = async () => {
  const response: any = await WeatherApi();

  return (
    <div>
      <h1 className="font-semi-bold text-2xl">
        {response.location.name} Weather
      </h1>
      <h2 className="font-bold text-4xl">{response.current.temp_c}&deg;C</h2>
      <p className="text-xl font-medium">
        hi
      </p>
    </div>
  );
};

export default Weather;
