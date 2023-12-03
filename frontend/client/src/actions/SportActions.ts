const coreUrl = "http://localhost:4000";

const getAllSports = async () => {
  try {
    const response = await fetch(`${coreUrl}/sports/all`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
};

export default getAllSports;
