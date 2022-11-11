import moment from 'moment';

const WeatherBlock = (props) => {
	const weather = props.weather;
	const locationName = props.locationName;

	const getImg = (iconNumber) => {
		if (iconNumber < 10) {
			iconNumber = '0' + iconNumber
		}
		return (`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`)
	}

	return (
		(weather) ?
			(<div className="row">
				<div className="col l3 s1 m1"></div>
				<div className="col l5 s10 m10 ">
					<div className="card   grey lighten-2">
						<div className="card-content ">
							<span className="card-title title">{locationName}</span>
							<div className='date'> {moment(new Date(weather.DailyForecasts[0].Date)).format('LL')} </div>
							<div className="forcast"> {weather.DailyForecasts[0].Day.IconPhrase} </div>
							<img src={getImg(weather.DailyForecasts[0].Day.Icon)} className="weather__icon" alt="ALT" />
							<div className='temp'> {weather.DailyForecasts[0].Temperature.Minimum.Value} - {weather.DailyForecasts[0].Temperature.Maximum.Value}
								°{weather.DailyForecasts[0].Temperature.Maximum.Unit} </div>
							<div className='moreinfo'>On next 5 days:
								<br />
								{weather.Headline.Text}.
								<br />
								<a href={weather.Headline.Link}>More info</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col l3 s1 m1"></div>
			</div>) : (
				<h4>Let's start with today's forecast</h4>
			)
	);
}

export default WeatherBlock;