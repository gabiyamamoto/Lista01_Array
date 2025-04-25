let jogos = [`Honkai Star Rail`, `Roblox`, `Minecraft`];
let jogoFavorito = `Honkai Star Rail`;

for (let i = 0; i < jogos.length; i++) {
    if (jogoFavorito === jogos[i]) {
    console.log (`🏆 ${i + 1} ° lugar: ${jogos[i]}`);
}
}