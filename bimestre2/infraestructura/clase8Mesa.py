import random

while True: 
    aleatorio = random.randrange(1, 5)
    eligePc = ""
    print("1)Piedra")
    print("2)Papel")
    print("3)Tijera")
    print("4)Spock")
    print("5)Largartija")
    print("6)Salir del Programa")
    opcion = int(input("Que eliges: "))
    
    if opcion == 1:
        eligeUsuario = "piedra"
    elif opcion == 2:
        eligeUsuario = "papel"
    elif opcion == 3:
        eligeUsuario = "tijera"
    elif opcion == 4:
        eligeUsuario = "spock"
    elif opcion == 5:
        eligeUsuario = "lagartija"
    elif opcion == 6:
        print ("Nos vemos!")
        break
    else:
        print ("Valor Invalido")
        continue
        
    print("Tu eliges: ", eligeUsuario)   
    if aleatorio == 1:
        eligePc = "piedra"
    elif aleatorio == 2:
        eligePc = "papel"
    elif aleatorio == 3:
        eligePc = "tijera"
    elif aleatorio == 4:
        eligePc = "spock"
    elif aleatorio == 5:
        eligePc = "lagartija"
    print("PC eligio: ", eligePc)
    
    if eligeUsuario == eligePc:
        print("Empate")
    elif eligeUsuario == "piedra":
        if eligePc == "papel":
            print("Ganaste, papel envuelve piedra")
        elif eligePc == "tijera":
            print("Perdiste, piedra pisa tijera")
        elif eligePc == "spock":
            print("Perdiste, spock vaporiza piedra")
        elif eligePc == "lagartija":
            print("Ganaste, piedra aplasta largarto")
    elif eligeUsuario == "papel":
        if eligePc == "piedra":
            print("Ganaste, el papel envuelve a la piedra")
        elif eligePc == "tijera":
            print("Perdiste, la tijera corta el papel")
        elif eligePc == "spock":
            print("Ganaste, papel desautoriza spock")
        elif eligePc == "lagartija":
            print("Perdiste, lagarto devora papel")
    elif eligeUsuario == "tijera":
        if eligePc == "piedra":
            print("Perdiste, la piedra rompe la tijera")
        elif eligePc == "papel":
            print("Ganaste, la tijera corta el papel")
        elif eligePc == "spock":
            print("Perdiste, spock rompe tijera")
        elif eligePc == "lagartija":
            print("Ganaste, la tijera decapita lagarto")
    elif eligeUsuario == "spock":
        if eligePc == "piedra":
            print("Ganaste, Spock vaporiza piedra")
        elif eligePc == "papel":
            print("Perdiste, papel desautoriza a spock")
        elif eligePc == "tijera":
            print("Ganaste, Spock rompe tijera")
        elif eligePc == "lagartija":
            print("Perdiste, lagarto envenena Spock")
    elif eligeUsuario == "lagartija":
        if eligePc == "piedra":
            print("Perdiste, piedra aplasta lagarto")
        elif eligePc == "papel":
            print("Ganaste, lagarto devora papel")
        elif eligePc == "tijera":
            print("Perdiste, tijera decapita lagarto")
        elif eligePc == "spock":
            print("Ganaste, lagarto envenena Spock")
    
    again = input("Jugamos de nuevo? Si/No: ")
    if 'si' in again:
        continue
    elif 'no' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")
