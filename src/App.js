import { connect } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import Card from "./component/card/card.component";
import { initializeData } from "./redux/reducer/weather/weather.action";
import LoadingSpinner from "./component/LoadingSpinner/LoadingSpinner.component";
import Navigation from "./component/Navigation/Navigation.component";
import { AppContainer } from "./component/Helper/Helper.component";

// const API_KEY = "88f257bd7ecb498c90ab06b8aa33ddc2";

function App({
  initializeData,
  weatherData,
  isLoading,
  hasLocationAccess,
  cityError,
}) {
  useEffect(() => {
    initializeData();
  }, [initializeData]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Navigation data={weatherData} cityError={cityError} />
      <AppContainer>
        <Card
          data={weatherData}
          cityError={cityError}
          hasLocationAccess={hasLocationAccess}
        />
      </AppContainer>
    </div>
  );
}

const mapStateToProps = ({ weather }) => ({
  isLoading: weather.weatherLocationLoading,
  hasLocationAccess: weather.hasLocationAccess,
  weatherData: weather.weatherData,
  cityError: weather.cityError,
});

const mapDispatchToProps = (dispatch) => ({
  initializeData: () => dispatch(initializeData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
