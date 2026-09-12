const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'angelmc.play.hosting',
    port: 25565,
    username: 'AngelMC',
    version: false
  });

  bot.on('spawn', () => {
    console.log('Bot sunucuya bağlandı!');

    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('Bağlantı koptu, 5 saniye sonra yeniden bağlanılıyor...');
    setTimeout(createBot, 5000);
  });

  bot.on('kicked', (reason) => console.log('Sunucudan atıldı:', reason));
  bot.on('error', (err) => console.log('Hata:', err));
}

createBot();
