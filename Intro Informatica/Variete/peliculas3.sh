#!/bin/bash
mkdir peliculas3
cd peliculas3
mkdir Terror Comedia Infantiles Accion Romanticas
cd Terror
touch Annabelle 'El exorcista' 'El juego del miedo' IT
cd ..
cd Romanticas
touch 'Diario de una pasion' 'Orgullo y prejuicio' Titanic 'Yo antes de ti'
cd ..
cd Infantiles
touch Cars 'La dama y el vagabundo' Madagascar Pocahontas
cd ..
cd Comedia
touch 'La mascara' 'Que paso ayer'
cd ..
cd Accion
touch 'Los vengadores' 'Mision imposible' 'Rapido y furioso'
cd ..
ls -R
