export const fetchingData = (url) => 
        fetch(url)
            .then(response => response.json());

//collect all recived data in one array if response about residents on choosen planet have more then one url(info about resident) 
export const fetchResidentsData = (arr) =>
  arr.reduce( async(acc, url) => {
    const resident = await fetch(url)
      .then(response => response.json())
      .then(data => data);

    return acc.then(data => [resident, ...data]);
  }, Promise.all([]));