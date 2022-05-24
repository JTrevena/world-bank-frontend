export default class Networking {
  //try and write any fetch request functions in here
  async createAccount(username, password) {
    const newUser = { username, password };

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
  }
}
