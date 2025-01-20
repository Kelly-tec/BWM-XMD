const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXZOiRhT9L/2qG0FB1KqpCl8CgoMKImMqDy002IKATSPglv89he5kpjbJ1oSnrqY5fe6551y+gyzHJTJRC2bfQUHwFVLULWlbIDADUhVFiIA+CCGFYAZMU3TmvmBae4vnxzYvjCgZi4uBeba0aI3lNp8rhZ86+k59Afc+KKpDioNfAOY7e42XuqFu7EUjpqQQXGcluOtrs5e3XunxUmFhXmw2bPkC7h0ixARnsVoc0RkRmJqoXUFMvkZfNg1nm8vSWOBuNTKS3kJ38yyxmLHFQkXDp6zVlOJ2iH3ja/SNfLw6vCW0d76Yk8ovlb1VxI1Hyyhu7MvRt7TL+OocL6SdPOmXOM5QaIQoo5i2X9ZdXg1Sn016bWYy3I2ntryPPWvH6qeLYY5G6629HW8HFoR+/TXia2dKlrs4GpPz4SZveuyVLIeb62Qh+MpELOVQtPKkMRXjGH8mviLvXkn+j+62wsHpLvInA4sSqA/zWvPsKVHtrZu9eeqNaMe4cKVT4uVfo2+mfnON8blItkpTWivHT+IdRrHUXrmRHb9pzWC3Px2E1q0/6ENakV+x1HrzU6Jr4TCmzjAfu55sSReBOiNfCvRaxNvB/hTTtp7svNWreKntt1XPcqcKe2Fs0RsoQ1bBKjU9gfOz63StH1p/L69fHhUlqDVCMGPvfUBQjEtKIMV59tibsn0Aw6uDAoLoQ14w3y0Znh3Oz8ngdChyVYF1q/RkWZvXUcbH6pxLtcZUB0vIvYA+KEgeoLJEoY5LmpN2icoSxqgEsz8eneqKJuicU7TAIZgBnpmO+LHA8Mz09/K3+ghpCYvitwxR0AcRyc9LBGaUVKgPHudHzESSOVaWWZaVpeFwzvAKM5VHvKoqssBOugrPzztdfEYlhecCzFhhJHAMyzPs/c8+yFBDn/bpih6xfRBhUtJtVhVpDsN3b72/hEGQVxl12iyQuwUiYMZ8bCNKcRaXXWFVBklwxFckd3WAWQTTEt37IERXHKAOD4i2v986B81ZtEfDqpT1/IKVuhPumGfPI5OJMIRDnv3GIA5+4+AUfpsEzOEbCpgJxx2iCIY86OR4Jrf75j+N5K90dVOsSDrEr2nrmT71zJQ0taJwDzM8HYAICt9VPsAgqQo3T1D2C9zF0LhV01OJ9xVTV2eRvxS9nesMN6T8hPt0Fph9/5iWch52eOJwbm4c9g103eru+dkMs9HPdrj/LXl3PkQU4rR8DKQeM1ipkmpki4rUmiYasSjHIvho0Xvino5eED8+naVSxxtX1pZYu4ZhqOnpoqFRrgfLIbf0tFNPzHXj5V9AwAxUI291m4Svp+viLTJb2Nuj9ajxpBvR61DNWEleus7SzmK5MIjpyhP5YLerSklZYXNb93bRPllLNdptw2nQvNqG22zelC6e71b5fJmmyYKrr3qT4eAwOPHIi+0FrSnRy20yxfzS1KKyxZU/r01uKVmW4iz3V7gcXOaKi7a3m3FiUtVrAp2cBkc1XVXUd+T4OQsesyj98Q/AP1L6NFaE0WOkZrBr0K9b89nhzL3/CeHHiP4PF0kOZDmDjw8Sl2zr48k4kpHvb468Exz8sTRSXitlvskHsSm14N5Ft0ghjXJyBjMAs5DkOAR9kMKSih8h/Wfuuem4D86tWBQOhfQ920DsnkW2APe/AIPBHjZ9CAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "wolf",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "31738351",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

