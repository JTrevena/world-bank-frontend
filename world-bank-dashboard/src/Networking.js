import readCookieValue from "./readCookieValue.js";

export default class Networking {
  //try and write any fetch request functions in here
  async createAccount(username, password) {
    const newUser = { username, password };

    try {
      const response = await fetch(
        "https://safe-harbor-88927.herokuapp.com/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      return await response.json();
    } catch (error) {
      return { error: "failed to fetch" };
    }
  }

  async userLoginAttempt(username, password) {
    const userLoginDetails = { username, password };

    const response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginDetails),
      }
    );
    const data = await response.json();
    if (data.response) return data.response;
    else if (data.error) return data;
  }
  async searchQuery(country, indicator, startYear, endYear, sessionID) {
    let url = `https://safe-harbor-88927.herokuapp.com/results?country=${country}`;
    if (indicator) url += `&indicator=${encodeURIComponent(indicator)}`;
    if (startYear) url += `&startYear=${startYear}`;
    if (endYear) url += `&endYear=${endYear}`;
    url += `&sessionID=${sessionID}`;
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json,",
      },
    });
    return await response.json();
  }

  async logUserOut() {
    const sessionID = readCookieValue("sessionID");
    const response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/logout?sessionID=${sessionID}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  }

  async verifyUserSession() {
    const sessionID = readCookieValue("sessionID");
    const response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/verify-session?sessionID=${sessionID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  }

  async getUserHistory() {
    const sessionID = readCookieValue("sessionID");
    console.log(sessionID);
    let response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/history?sessionID=${sessionID}`
    );
    const history = await response.json();
    return history;
  }
}
