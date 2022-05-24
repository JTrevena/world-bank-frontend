export default class Networking {
  //try and write any fetch request functions in here
  async postUser(username, password) {
    const newUser = { username, password };

    await fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  }
}
