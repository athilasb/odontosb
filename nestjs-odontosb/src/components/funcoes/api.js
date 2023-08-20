export async function api(method, endpoint, data) {
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
  
      return json; 
  
    } catch (error) {
      throw error; 
    }
  }
  