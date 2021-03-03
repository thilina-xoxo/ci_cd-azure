import React,{useState,useCallback, useRef} from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,

} from '@react-google-maps/api'

import 
    usePlacesAutocomplete,{
        getGeoCode,
        getLatLng,
    } 
 from 'use-places-autocomplete';

 import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
   
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";



const libraries=["places"];
const mapContainerStyle={
    width:'100vw',
    height:'50vh',
}
const center={
    lat:6.7589,
    lng:81.2491,
}

export default function Map () {

const {isLoaded, loadError}=useLoadScript({
    googleMapsApiKey:"AIzaSyADxQDLFQhxjIz3u6NV8pwVZF8AKpkl61U",
    libraries,
})

const [markers, setMarkers] = useState([])
const [selected, setSelected] = useState(null)

const onMapClick= useCallback(
    (event)=>{
       
        setMarkers((current)=>[...current,
         {
     lat:event.latLng.lat(),
     lng:event.latLng.lng(),
     
        }
     ])
     },
    [],
)

const mapRef = useRef();
const onMapLoad= useCallback(
    (map) => {
        mapRef.current=map;
    },
    [],
)

if (loadError) return "Error loading Maps";
if (!isLoaded) return "Loading Maps";

return <div>


   <Search/>



    <GoogleMap   
    mapContainerStyle={mapContainerStyle}
    zoom={8} 
    center={center}
    onClick={onMapClick}
    onLoad={onMapLoad}
    >
{markers.map(marker=>(
<Marker
 key={marker}
  position={{lat:marker.lat, lng:marker.lng}}
onClick={()=>{
    setSelected(marker)
}}

  />
 ) )}

{selected ? (<InfoWindow  position ={{lat:selected.lat, lng:selected.lng}} onCloseClick={()=>{
    setSelected(null)
}}>
    <div>
        <h2>
          Location Selected  
        </h2>
       
    </div>
</InfoWindow>):null}

    </GoogleMap>
</div>

   
}

function Search () {

    const {ready,
        value,
        suggestions:{status,data},
        setValue,clearSuggestions} = usePlacesAutocomplete({
        requestOptions:{
            location:{ lat:()=> 6.7589,
                lng:()=> 81.2491,},

                radius:200*1000,
        }
    })
    return (
       
<div className ='z-20'>
        
      <Combobox onSelect={(address)=>{
          console.log(address)
          }}>
<ComboboxInput 
value={value} 
onChange={(e)=>{
    setValue(e.target.value)

}}
disabled={!ready}
placeholder='Enter an Address'
/>
<ComboboxPopover>
    {status === "OK" && data.map(({id, description})=>(
    <ComboboxOption key ={id} value={description} />
    ))}
</ComboboxPopover>
      </Combobox>
      </div>
    )
}


