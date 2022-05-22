#Creacion de un modulo 
ng g m shared

#Creacion de componentes
#-is -> significa que no va crear los estilos
ng g c shared/sidebar --skipTests -is

#Creacion de un Service
ng g s gifs/services/gifs --skipTests
