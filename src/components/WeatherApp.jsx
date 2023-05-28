import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Loading from "./Loading";
import { Result } from "./Result";

const WeatherApp = () => {
  const { result, loading, found } = useWeather();
  return (
    <>
      <main className='two-col'>
        <Form />

        {loading ? (
          <Loading />
        ) : result?.name ? (
          <Result />
        ) : found ? (
          <p>{found}</p>
        ) : (
          <p></p>
        )}
      </main>
    </>
  );
};

export default WeatherApp;
