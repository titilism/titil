//
// search if page is loaded
//
//

// image remover
// getting all available images element in the page
let img = document.querySelectorAll('img');

// iterating through all the images and deleting them
for (let i = 0; i < img.length; i++) {
    img[i].remove();
}

// random list
var keys =
       ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
"Central African Republic","Chad","Chile","China","Colombi","Comoros","Congo (Brazzaville)","Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
"East Timor (Timor Timur)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
"Fiji","Finland","France",
"Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea",
"Guinea-Bissau","Guyana",
"Haiti","Honduras","Hungary",
"Iceland","India","Indonesia","Iran","Iraq",
"Ireland {Republic} of (Eire)","Israel",
"Italy",
"Jamaica","Japan",
"Jordan",
"Kazakhstan","Kenya",
"Kiribati",
"Korea, North (DPRK)","Korea, South (ROK)",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia","Lebanon",
"Lesotho","Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia (FYROM)",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia,Federated States of ",
"Moldova, Republic of ",
"Monaco ",
"Mongolia ",
"Morocco ",
"Mozambique ",
"Myanmar (Burma) ",
"Namibia ",
"Nauru ",
"Nepal ",
"Netherlands ",
"New Zealand ",
"Nicaragua ",
"Niger ",
"Nigeria ",
"Norway ",
"Oman ",
"Pakistan ",
"Palau ",
"Palestinian State* (proposed)",
"Panama ",
"Papua New Guinea ",
"Paraguay ",
"Peru ",
"The Philippines ",
"Poland ","Portugal ","Qatar ","Romania ","Russia ","Rwanda ","Saint Kitts and Nevis ","Saint Lucia ","Saint Vincent and The Grenadines ","Samoa ","San Marino ","Sao Tome and Principe ","Saudi Arabia ","Senegal ","Serbia and Montenegro ","Seychelles ","Sierra Leone ","Singapore ","Slovakia ","Slovenia ","Solomon Islands ","Somalia ","South Africa ","Spain ","Sri Lanka ","Sudan ","Suriname ","Swaziland ","Sweden ","Switzerland ","Syria ",
"Tajikistan ",
"Tanzania ",
"Thailand ",
"Togo ",
"Tonga ",
"Trinidad and Tobago ",
"Tunisia ",
"Turkey ",
"Turkmenistan ",
"Tuvalu ", 
"Uganda ", 
"Ukraine ", 
"The United Arab Emirates ", 
"The United Kingdom ", 
"The United States of America ", 
"Uruguay ", 
"Uzbekistan ", 
"Vanuatu ", 
"The Vatican City (Holy See) ", 
"Venezuela ", 
"Vietnam ", 
"The Western Sahara* ", 
"Wales {Principality} of ", 
"The Yemen ", 
"The Zaire (Democratic Republic of Congo) ", 
"The Zambia ", 
"The Zimbabwe" ];



// this function will return random generated word
function words(){
	return keys[Math.floor(Math.random() * keys.length)];
}

// making combinations of words
let link = 'https://www.bing.com/search?q=';
let load = Boolean(document.querySelectorAll('h2')[0])
let keyWords = link + words() + ' ' + words();

if (load) {
    document.location.href = keyWords;
}
