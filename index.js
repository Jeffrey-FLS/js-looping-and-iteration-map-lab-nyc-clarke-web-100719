// Code your solution in this file.

function log(msg) {
  console.log(msg);
}

function lowerCaseDrivers(arrStrDrivers) {
  return arrStrDrivers
    .map(strDriver => strDriver.toLowerCase());
}

function nameToAttributes(arrStrDrivers) {
  return arrStrDrivers
    .map((strDriver) => {
      const arrStrDriverName = strDriver.split(' ');

      const objDriverName = {
        firstName:arrStrDriverName[0],
        lastName: arrStrDriverName[1]
      };

      return Object.assign({}, objDriverName);
    });
}

function attributesToPhrase(arrStrDrivers) {

  // const drivers = arrStrDrivers
  //   .map((strDriver) => {
  //     const arrStrDriver = strDriver.split(' ');
  //     // log("Drivers are " + arrStrDriver);
  //
  //     const objDriverName = {
  //       name: arrStrDriver[0],
  //       hometown: arrStrDriver[1]
  //     };
  //
  //     debugger
  //
  //     return Object.assign({}, objDriverName);
  //   });
  //
  // return drivers
  //   .filter(objDriver => `${objDriver.name} is from ${objDriver.hometown}`);

  return arrStrDrivers
    .map(strDriver => `${strDriver.name} is from ${strDriver.hometown}`);


}
