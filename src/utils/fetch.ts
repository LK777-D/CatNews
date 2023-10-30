

export const fetchNews = async () => {
    
  
    const appleUrl = `
    https://newsapi.org/v2/everything?q=apple&from=2023-10-29&to=2023-10-29&sortBy=popularity&apiKey=1dbc5d5c5ff2463ebe418405f6f567d5`;
    const teslaUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey=1dbc5d5c5ff2463ebe418405f6f567d5`;
    const usUrl = `
    https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1dbc5d5c5ff2463ebe418405f6f567d5`;
    const crunchUrl = `
    https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1dbc5d5c5ff2463ebe418405f6f567d5`;
    const wallStUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1dbc5d5c5ff2463ebe418405f6f567d5`;
  
    try {
      const appleResponse = await fetch(appleUrl , {next:{revalidate: 20000}});
      const teslaResponse = await fetch(teslaUrl,{next:{revalidate: 20000}});
      const usResponse = await fetch(usUrl,{next:{revalidate: 20000}});
      const crunchResponse = await fetch(crunchUrl,{next:{revalidate: 20000}});
      const wallStResponse = await fetch(wallStUrl,{next:{revalidate: 20000}});
  
      if (!appleResponse.ok || !teslaResponse.ok || !usResponse.ok || !crunchResponse.ok || !wallStResponse.ok) {
        throw new Error('One or more network responses were not ok');
      }
  
      const appleData = await appleResponse.json();
      const teslaData = await teslaResponse.json();
      const usData = await usResponse.json();
      const crunchData = await crunchResponse.json();
      const wallStData = await wallStResponse.json();
  
      return {
        appleData,
        teslaData,
        usData,
        crunchData,
        wallStData,
      };
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  };
  
  export  const fetchCrypto = async() => {
    try{
      const response = await fetch('https://api.coinstats.app/public/v1/coins?skip=0', {next:{revalidate:2000}})
      const cryptoData = await response.json()

      return cryptoData
    } catch (err) {
      console.log(err)
    }
      

  }