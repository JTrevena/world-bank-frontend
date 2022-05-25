export default class Networking {
  //try and write any fetch request functions in here
  async postUser(username, password) {
    const userLoginDetails = { username, password };

    await fetch(`https://safe-harbor-88927.herokuapp.com/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginDetails),
    });
  }
  async searchQuery(country, indicator, startYear, endYear) {
    let url = `https://safe-harbor-88927.herokuapp.com/results?country=${country}`;
    if (indicator) url += `&indicator=${indicator}`;
    if (startYear) url += `&startYear=${startYear}`;
    if (endYear) url += `&endYear=${endYear}`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json,",
      },
    });
  }
}
