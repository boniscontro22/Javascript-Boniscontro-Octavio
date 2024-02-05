const aeropuertos = [
    { nombre: "Aeropuerto Internacional de Ezeiza", codigo: "EZE" },
    { nombre: "Aeropuerto Internacional de San Pablo", codigo: "GRU" },
    { nombre: "Aeropuerto Internacional de Santiago", codigo: "SCL" },
    // ...
  ];
  
  let aeropuertoOrigen;
  let aeropuertoDestino;
  let tiempoVuelo;
  let faseVuelo = "inicio";
  
  // Otras variables...
  aeropuertoOrigen = aeropuertos.find(aeropuerto => aeropuerto.codigo === "EZE");
aeropuertoDestino = aeropuertos.find(aeropuerto => aeropuerto.codigo === "SCL");

tiempoVuelo = calcularTiempoVuelo(aeropuertoOrigen, aeropuertoDestino);

// ...
const apiKey = "YOUR_API_KEY";

const fetchFlights = async (origin, destination, date) => {
  const url = `https://api.skyscanner.net/v1/flights?apiKey=${apiKey}&origin=${origin}&destination=${destination}&date=${date}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
