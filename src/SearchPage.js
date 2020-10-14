import React from 'react';
import './SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
     <div className="search_page">

        <div className="searchpage_info">   

            <p>62 habitaciones . 26 de agosto al 30 de agosto . 2 personas</p>
            <h1>Stays Nearby</h1>
            <Button variant="outlined">
                Cancelation Flexibility
            </Button>
            <Button variant="outlined">
                Type of place
            </Button>
            <Button variant="outlined">
                Cancelation Flexibility
            </Button>
            <Button variant="outlined">
               Price
            </Button>
            <Button variant="outlined">
                Rooms and beds
            </Button>
            <Button variant="outlined">
               More filters
            </Button>
        </div>

        <SearchResult  
        
            img="https://a0.muscache.com/im/pictures/515101a7-b236-4286-b75f-6bf943458c67.jpg?im_w=960"
            location="Habitacion en el Algarve"
            title="Magnifica habitacion en Portugal"
            description="Amplio apartamento con vistas al mar, en primera línea de playa del último paraíso.
            Registrado en Consejeria de Turismo: VTF/CA/02324"
            stars={4.2}
            price="24€/noche"
            total="110€ total"

            />
            <SearchResult  
        
        img="https://a0.muscache.com/im/pictures/6bfd4257-b533-481f-9f1e-6024048b6b7c.jpg?im_w=960"
        location="Vistas maravillosas"
        title="Magnifica habitacion"
        description="Nuestro ático ACINIPO está ubicado en una zona inmejorable de la ciudad del Tajo. Cercano a todo tipo de comercios, bancos, restaurantes y bares, este apartamento de 48 metros cuadrados habitables está reformado recientemente."
        stars={4.2}
        price="30€/noche"
        total="140€ total"

        />




     </div>
    )
    
}

export default SearchPage
