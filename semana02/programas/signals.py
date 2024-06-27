import signal
import sys

def signal_handler(signum, frame):
    print(f'Se recibe la senial: {signum} ({signal.Signals(signum).name})', flush=True)

for sig in signal.Signals:
    if sig not in (signal.SIGKILL, signal.SIGSTOP):  # SIGKILL y SIGSTOP no pueden ser manejadas
        signal.signal(sig, signal_handler)

print('Esperando por SIGNALS. PresIONE Ctrl+C para salir.')

try:
    while True:
        signal.pause()  
except KeyboardInterrupt:
    print('Saliendo del programa...')
    sys.exit(0)
