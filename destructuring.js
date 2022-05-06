//Using ES6 or ES2015, to add proporties to the object, we do it one by one
const user = {};
user.name = 'Justine Kenyansa';
user.twitterHandle = 'JustinKenyansa';
user.location = 'Nairobi, Kenya';

const name = user.name;
const handle = user.handle;

//the only option of adding several properties to the object is using object literal notation, during initialization:
const country = {
    location: "East Africa",
    counties: 47,
    capital: "Nairobi",
};
// const capital = country.capital;
// const counties = country.counties;
//-----with destructing-----:
const {location, counties, capital} = country;
