import axios from 'axios'
import cheerio from 'cheerio'

const url = 'https://topappdevelopmentcompanies.com/cy/directory/app-developers/cyprus';
axios.get(url)
.then(data => processData(data))
.catch(err =>console.log(err.message));

function processData(response){
    const $ = cheerio.load(response.data);
    var urlsList = [];
    $(".text-center").find("a").each(function(i, link){
    urlsList.push($(link).attr('href'));
});
console.log(urlsList.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]));
}
