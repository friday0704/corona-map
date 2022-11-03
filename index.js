function updatemap()
{
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;
            console.log(longitude);
            console.log(latitude);

            
            cases=element.infected;
            if(cases>255){
                colour= "rgb(255,0,0)";
            }
            else{
                colour= `rgb(${cases},0,0)`;
            }
            
           var marker= new mapboxgl.Marker({
                draggable:false,
                color:colour
            })
            .setLngLat([longitude,latitude])
            .addTo(map);
            
            // var marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
            // console.log(marker);

        });
    })
}
 
updatemap();