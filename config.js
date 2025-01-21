const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVa4+iSBT9L/VVe+X9MOlkEQVBwUcr2m42mxIKKB+ARfFy4n/foO1OZzIz6eVTpbice+65516+gSTFOZqgBvS/gYzgElLUHmmTIdAHgyIMEQFdEEAKQR8o9mh4UER+dAkN0xpx0kIIeznDmbic9WIsoy21G3PnTcfrV3DrgqzYn7D/G0DfhsM1Wc8usjVSchWypplFg/2aHq5eck3P1lFR8rI0FlftFdxaRIgJTqJRFqMzIvA0Qc0cYvI1+pamQCENlXqpWXTxvh0Km3S7ne4m1SVdDTzLcLGtxfUmNZSv0bekjVF13OZy9QZuo+3G7Puiina1W7DluICiRENHDzT9GB0f9HMcJSiwApRQTJsv6752eie1ZE08Zle6QPzcndVZRmOyX1fqrDoznoinZbpRGeZrxMe2zAyMCEl6hzlPKEv5kyCRiccse4qQOOZw1ZkPr70ass5n4nPy9Mrx/+g+mVeVURgd6i/N3D+UrqyRtcHOp6vG0k/rrSDCnWY0JXusvkZfK7jYZ51m2rjXVAynV3eb773YqAK3HrvycUDwjsUeY931+KAPaUF+xzKo+dE+6eHGPh1oyNa8nteidM2LcDmtegN6uRzG55lfHjvb3RS7Fxx4wXroF7u19yYIQ4fwl8xil5W3ifbbmieO4VWx9nqv6IgaKwB99tYFBEU4pwRSnCbtHSeoXQCD8g35BNG7vMBCwhJy9FS9G+HIc6+oE/gjWHu9Zq66cbWxlegwRPW7WvmvoAsykvooz1EwxjlNSeOgPIcRykH/r3un2qIJOqcU2TgAfSAyKi9KMiMy6p/5H1UMaQ6z7I8EUdAFIUnPDgJ9SgrUBfd4STEEVpMkjh1pksrwijHSdZnjNU7WeE6R2wrPj5wrfEY5hecM9FmZlwWJkSX59ncXJKimD/u0RfNsF4SY5HSdFNkphcHTW8+X0PfTIqFvTeLr7QER0Ge+XyNKcRLlbWFFAokf4xLpbR2gH8JTjm5dEKAS+6jFA7wyo+8eXi50CS2P/6RNkLLvWitcnCaPEF8QRFEUpBeWY4MXgQ2lF8ir0oso7GXoy1DeSzJo5XhMbvvNL400tepzKFrX8Wa/s2cx7e0vySxiQtUT7mZ4OAARFDxV3kP/WGSr9IiS3+DuJ4RgZaBOsl6uRo3GjHlcLdV4LS4+4T6cBfrfvm9LPQ1avI3Eua4ynYK2W22eH83QF360w+0/ydv4AFGITznoA93S2d58NBhZnfeSVKapjSJNj1pNny16TtzD0TbZRofzIB/j5Uo3HWyWQRCY45Nd0zAd+w4nOJ556Gjp2Hr9CUjbRFvT4Y5L6uFyf5jr6qjQaukYu6PGNousk5fX0pgM6mx6PG5q67q6xGvCBtdaDqT3ieebGnWCgNP1obOosY0CY8ZJWvTaZntY5XOy/E2cT5fIYc4qdx1uIi7QYrjgfCTp+4lZbTJvoqSpz+ROojk7ga5mq7rIL6hz1aY89uYiX086SpHNncqW8vGl9jfz5y6476LTxz8Af0zpw1ghRveVmsC2Qb9vzWeHM7fuJ4SPFf0LFw3eICtYYrQfCMd1FR+smPDb7TIW3/z9VhrwQ7cYGsu0F00GDbi1o5udIA1TcgZ9AJOApDgAXXCCOdW+D+nP5p7vgnOjZdkbhfQ520BrHzuxwe1fICNF+30IAAA=',
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

