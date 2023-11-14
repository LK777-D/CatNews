

export const fetchNews = async () => {
  var url = 'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2023-11-14&' +
  'sortBy=popularity&' +
  'apiKey=29d88f1b2b844fb9b0e1ca9d7c7b2774';

  
    const appleUrl = `
    https://newsapi.org/v2/everything?q=Apple&from=2023-11-14&sortBy=popularity&apiKey=29d88f1b2b844fb9b0e1ca9d7c7b2774`;
    const teslaUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=29d88f1b2b844fb9b0e1ca9d7c7b2774`;
    const usUrl = `
    https://newsapi.org/v2/top-headlines?country=us&apiKey=29d88f1b2b844fb9b0e1ca9d7c7b2774`;
    const crunchUrl = `
    https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=29d88f1b2b844fb9b0e1ca9d7c7b2774`;
    const wallStUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=29d88f1b2b844fb9b0e1ca9d7c7b2774`;
  
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