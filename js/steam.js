const xmlUrl = 'https://steamcommunity.com/id/pogpog69420?xml=1';

// Fetch the XML data
fetch(xmlUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
    }
    return response.text();
  })
  .then(xmlData => {
    // Here, you can parse and work with the XML data as needed
    console.log(xmlData);
    
    // For example, you can parse the XML using DOMParser
    // const parser = new DOMParser();
    // const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
    // 
    // // Now you can work with the parsed XML document (xmlDoc)
    // console.log(xmlDoc);
  })
  .catch(error => {
    console.error('Error fetching XML:', error);
  });


