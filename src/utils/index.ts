const net = require("net");

if (net.setDefaultAutoSelectFamily) {
  net.setDefaultAutoSelectFamily(false);
}

export const fetchNews = async () => {
    const apiKey = 'cbe857cf89d040dcab2db41efb3ce48b';
  
    const appleUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-10-01&to=2023-10-01&sortBy=popularity&apiKey=${apiKey}`;
    const teslaUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-09-02&sortBy=publishedAt&apiKey=${apiKey}`;
    const usUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    const crunchUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
    const wallStUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`;
  
    try {
      const appleResponse = await fetch(appleUrl , {next:{revalidate: 10000}});
      const teslaResponse = await fetch(teslaUrl,{next:{revalidate: 10000}});
      const usResponse = await fetch(usUrl,{next:{revalidate: 10000}});
      const crunchResponse = await fetch(crunchUrl,{next:{revalidate: 10000}});
      const wallStResponse = await fetch(wallStUrl,{next:{revalidate: 10000}});
  
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