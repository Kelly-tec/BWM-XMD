const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqH5GLolVdNYiKKKhcvUydhwABo9wMAaS7/PcptLtOP8w508NTKiFrr6y19n4HaYYLtEINGL+DnOAKUtQuaZMjMAaTMgwRAV0QQArBGGS6aB5E5za7NqZ64Iignk16ENm52+NUi3AGs1t0HNlUL5dXcO+CvPRi7P8BMAy84IinXNZMBRxfGJJvj7HQ1P2e5g0SgmrbupHt4BQ6xiu4t4gQE5xGs/yEEkRgvELNFmLyPfqNbHii5Qx1vJrl+tpI1s5pKVkdq77qduStI20wj8MD8ZnZ9+hv0L6Zzdb2bKDMdtoxrDvTUk6wVqB13yGinpZX/XoYNSfXedIvcJSiQA1QSjFtvq17qde7no9qNhGQpYhqmkRyep3brLLjmmsdaWc2Wh/TStjx3yNul56xGAbOcnbd2JXk+3oElzF7WS6igZ8nQa2M6oll8I5TfyW+JZ9Zufwf3Z1Jth4NB5LB5LRztmtSiPvblspTfedchcQ6rrDHafyyx9Tfo7+dyMjhFWcYkdHiqAXa266aUbtQNrqJXVtWGteT6UEfPfT4oA9pSf7E8josrSI47EmOp8fpKrMl1jY15wx3+50T9mpLZdWVq/ZVOdvrgl+KUC87jcJz/BGee3jWs9jZZDkNmwtX6qcQsg0fn6PXx4suqFEDMO7fu4CgCBeUQIqztN1juUEXwKCykE8QfcgLDO5ty0rxQdutls1JicI3K+bP0l45TM7LU48VeHjyNGaxkKVX0AU5yXxUFChY4IJmpNFRUcAIFWD8988uSNGNPo1ry3H9LggxKaiTlnmcweDT1c9D6PtZmVKrSX25XSACxsyvbUQpTqOi1bFMIfFPuELyCdICjEMYF+jeBQGqsI9aPDB0FcudBozJwxROvMpWiDePWsqnLH3+4gWIFQWOfRmOYPjCs7D/4g1H4cswYAKWYUTUHyLQBfijZ9o7v59P7jq5ZTPDNWPoj/RF0LDHlXnzi8h/2PDUHhEUgDElJeoCD/qXMrezC0r/gCtZyW4T8grFe9zhhZ6YLmeutjluz19xn56C8fuvOSVnQYvncsLR3bE26ILkEUHcvlxgRlx/yImc0B8LzF/Fj7rVEeb5jxTRFvZD8/ZCgCjEcQHGQNZ7m0EsGXTlXSrpcJAsSVpJjxx8evQZ9meYFnpgHG7urWwEczvcmhsh9hBW9VhNBY1xTj4bDxh2c57Y6r+BgDFQDLoJZF4cpYtIUjA1ec3gV5owMGbXniBoNI39Q1VIK1UVLWxR8RibB+wajZs5NlcZBjtKtssKViQpG9k7TVFzkaXXttozK1+LxcSkwbyaTpe2tJ7X2tap3+YZy/jM3MFDd3fqT5CQ2GIUzaFXLF3pekkoM23cPlsZSJVstgmkqlHXsW0P1rY0Sb1JZDzb8DEG4o/xix8N8v6RrBCjxzRLYevQf3jzNePMvfsF4mM8/iZHE/Nt4Si663tF6didN8Yujzsuw9OltexYo7m6X+eIrs9Z7TTgfv/ZBXkMaZiRBIwBTAOS4QB0QQwLKv1qUxsnqKAwycG4pcyIQl8cdEHSSHluUUg/uxtI7bfKTHD/BwdX7cP5BwAA',
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
    ANTICALL : process.env.ANTICALL || 'no',
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

