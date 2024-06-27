import time
import sys

def main():
    count = 0
    while True:
        print("Mensaje de exito, salida estándar (stdoOUT). Contador: {}\n".format(count), flush=True)
        time.sleep(5)

        sys.stderr.write("Mensaje de error  (stdERR) Contador: {} .....\n".format(count))
        sys.stderr.flush()
        time.sleep(5)
        count = count +1

if __name__ == "__main__":
    main()