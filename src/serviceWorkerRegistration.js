// Este archivo se encarga de registrar el Service Worker
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] es el localhost para IPv6.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 es considerado localhost para IPv4.
    window.location.hostname.match(/^127(?:\.\d{1,3}){3}$/)
);

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // El service worker no será registrado si PUBLIC_URL es diferente del origen de la página.
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Esto es para localhost: realiza las comprobaciones para asegurarte de que el service worker esté ejecutándose correctamente.
        checkValidServiceWorker(swUrl, config);
      } else {
        // Registrar el service worker en producción
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // Notificar al usuario de una actualización disponible
              console.log(
                "Nuevo contenido está disponible; por favor, recarga."
              );
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // El contenido se ha guardado para usarlo sin conexión.
              console.log("Contenido en caché para uso offline.");
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error durante el registro del Service Worker:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Comprobar si el service worker aún existe
  fetch(swUrl)
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // Si no se encuentra el archivo, recargar la página.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Si el service worker está disponible, registrarlo.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No se encontró una conexión a Internet. La aplicación se está ejecutando en modo offline."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(
          "Error durante la desregistración del Service Worker:",
          error
        );
      });
  }
}
