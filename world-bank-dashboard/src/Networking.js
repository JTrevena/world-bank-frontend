export default class Networking {
  //try and write any fetch request functions in here
  async createAccount(username, password) {
    const response = await fetch("/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }); // waiting for for backend endpoint to be finalised. This is a placeholder
  }
}
