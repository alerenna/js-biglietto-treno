const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();


console.log(`Ora attuale: ${hours}:${minutes}:${seconds}`);

const minutiProssimaOra = (60 - now.getMinutes())

console.log(minutiProssimaOra);
