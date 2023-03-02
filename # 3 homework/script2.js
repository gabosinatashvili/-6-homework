const user = {
    banks: [
        {address: {city: 'Tbilisi' ,} },
        {address: {city: 'Senaki',} },
        {address: {city:'kutaisi',} }
    ]
}

console.log(citylog(user));
   function citylog({banks:[,,{address:{city}}]}){
        return(city);
   }
