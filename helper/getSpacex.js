import fetch from 'isomorphic-unfetch';

const getSpacex = async path => {
  const response = await fetch(`https://api.spacexdata.com/v3/${path}`);
  const data = await response.json();
  return data;
};

export default getSpacex;
