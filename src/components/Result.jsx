import useWeather from "../hooks/useWeather";

export const Result = () => {
  const { result } = useWeather();

  const kelvin = 273.15;
  return (
    <div className='container weather'>
      <h2>The Weather in {result.name} is:</h2>
      <p>
        {parseInt(result.main.temp - kelvin)}
        <span>&#x2103;</span>
      </p>
      <div className='temp_max_min'>
        <p>
          Min: {parseInt(result.main.temp_min - kelvin)}
          <span>&#x2103;</span>
        </p>
        <p>
          Max: {parseInt(result.main.temp_max - kelvin)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
