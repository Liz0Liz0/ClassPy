// Esto simula el login, después lo conectaremos a tu backend Python
export const login = async (username, password) => {
  // aquí normalmente harías un fetch/post al backend
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: 'Usuario o contraseña incorrectos' });
      }
    }, 500);
  });
};
