export const fetchCurrentPosition = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const handleSuccess = (position) => {
        const navData = position.coords;
        resolve(navData);
      };

      const handleError = (navErr) => {
        reject({
          isRejected: true,
          message: navErr.message,
        });
      };

      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } catch (err) {
      reject(err);
    }
  });
};

export const kelvinToCelcius = (temp) => {
  return Math.ceil(temp - 273.15);
};

export const getDate = () => {
  return new Date(Date.now()).toLocaleString("en-US", {
    hour12: true,
  });
};
