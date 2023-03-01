export async function getAllStarships() {
    const key = process.env.REACT_APP_KEY
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-01-23&sortBy=publishedAt&apiKey=${key}`
      );
      const data = response.json();
      return data;
    }
    