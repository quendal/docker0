import time
import sys
import os

def main():
    count = 0    
    while True:
        try:
            sleep_time = int(os.getenv('ENV_MI_PROGRAMA_SLEEP', '5'))
        except ValueError:
            print("La variable ENV_MI_PROGRAMA_SLEEP no es un número válido. Usando 5 segundos.\n", flush=True)
            sleep_time = 5

        texto = os.getenv('ENV_MI_PROGRAMA_TEXTO', 'Texto por defecto')

        print("\nIteracion {}\n".format(count))
        print(texto, flush=True)
        print("\nMe dormire {} segundos....\n".format(sleep_time), flush=True)
        time.sleep(sleep_time)
        count = count +1

if __name__ == "__main__":
    main()

    