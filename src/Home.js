import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">

         
           < Banner />

           <div className="home_section">

            <Card 

                src="https://mediad.publicbroadcasting.net/p/wunc/files/styles/x_large/public/201905/SanFrancisco_12623927_PrivateRoomApt_LivingRoom.jpg"
            
                title="Estancia unica"
            
                description="Abstenerse inmobiliaria. Estupendo piso en alquiler, totalmente amueblado y equipado con todo nuevo a estrenar.
                Precio incluye alquiler de la vivienda+comunidad+agua.
                Consta de 2 dormitorios y un vestidor; Cocina con trastero; Salón con balcón-terraza y baño completo. Se encuentra muy cerca del Corte Inglés, C.C.Nervión, Estación Sta Justa, diversos Supermercados"
                
                price="15€/noche"
            
            />
            <Card
            
            src="https://a0.muscache.com/im/pictures/2cd22a87-3e1a-4218-88c5-963dcf889dcc.jpg?im_w=960"
            
            title="Entorno perfecto"
        
            description="Pequeño estudio situado en planta baja a unos 50 metros de la playa en el tranquilo pueblo de El Morche, perteneciente al municipio de Torrox, conocido por poseer el mejor clima de Europa. Todo exterior. Ideal para una persona que tenga que trabajar durante los meses de octubre a junio."
            
            price="30€/noche"

            />
            <Card 
            
            src="https://a0.muscache.com/im/pictures/f53ae993-0bd1-447f-b7e7-e2e858074f5e.jpg?im_w=960"
            
            title="Entorno increible"
        
            description="A tan solo 26 minutos de Sevilla y el Aljarafe. En plena Sierra Norte.

            Casa tradicional de pueblo situada en pleno centro; a 2 minutos a pie de la plaza principal con la iglesia, supermercados y bares. A 50 mts de un bonito sendero para pasear y conectar con la naturaleza."
            
            price="25€/noche"
            
            
            />

           </div>

           <div className="home_section">

            <Card 
            
            src="https://a0.muscache.com/im/pictures/63fac794-cad1-4e1c-90d8-ec4af262a141.jpg?im_w=960"
            
            title="Magnifica residencia"
        
            description="Antiguo garage totalmente reformado con cuarto de baño de diseño y griferías , cama doble de 1.50 x 2 alto con un cabecero vintage , gran armario y una cocina de tonos celestes suaves ."
            
            price="40€/noche"
            
            />
            <Card
            
            src="https://a0.muscache.com/im/pictures/43e4adc4-c7b0-4789-8bee-3fa39bbf1e53.jpg?im_w=960"
            
            title="Atarderes de pelicula"
        
            description="La casita es perfecta para parejas viajeros y gente que busca la tranquilidad
            Un lugar tranquilo cerca del mar.
            La casa es un espacio diáfano dónde encontrarás todo lo necesario para pasar una estancia corta o de larga temporada."
            
            price="27€/noche"
            
            />
            <Card 
            
            src="https://a0.muscache.com/im/pictures/78a0dd08-47a5-46f5-b6ad-f33fdf713d4a.jpg?im_w=960"
            
            title="Habitacion confortable"
        
            description="Are you looking for an ideal base to discover Jerez de la Frontera?

            We are one minute walk away from the main square. Restaurants, sherry bars, flamenco shows, wineries...nothing is more than five minutes' away. And yet it's so quiet here!"
            
            price="35€/night"
            
            
            />



            </div>

            
        </div>
    )
}

export default Home
