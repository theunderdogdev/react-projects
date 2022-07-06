import { useState } from "react";
import "./weather.css";
const api = {
	key: "6eabb55950451bde9513dceeb84e1f1c",
	baseUrl: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});
	const search = (evt) => {
		if (evt.key === "Enter" && query !== "") {
			fetch(`${api.baseUrl}weather?q=${query}&units=metric&appid=${api.key}`)
				.then((res) => res.json())
				.then((data) => {
					setWeather(data);
					setQuery("");
				});
		}
	};
	const dateBuilder = (dt) => {
		let months = [
			"January",
			"Februray",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"Decemeber",
		];
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		return `${days[dt.getDay()]} ${
			months[dt.getMonth()]
		} ${dt.getDate()} ${dt.getFullYear()}`;
	};
	return (
		<div
			id="main"
			className={
				weather.main !== undefined && weather.main.temp > 25 ? "warm" : ""
			}
		>
			<div className="curtain">
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="Search..."
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{weather.name !== undefined ? (
					<>
						<div className="location-box">
							<div className="location">
								{weather.name}, {weather.sys.country}
							</div>
							<div className="date">{dateBuilder(new Date())}</div>
						</div>
						<div className="weather-box">
							<div className="temp">{Math.round(weather.main.temp)}°C</div>
							<div className="weather">{weather.weather[0].main}</div>
						</div>
					</>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Weather;
