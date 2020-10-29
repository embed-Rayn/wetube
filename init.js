import app from "./app";

const PORT = 4002;
const handlListening = () => console.log(`✔ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handlListening);