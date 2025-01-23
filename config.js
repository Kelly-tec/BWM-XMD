const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WV25KqOBSG3yW32tOcQau6ahBF8CwHFafmIkLAICcTQHCX7z5Fu3t2166ZPT13qZD8Wetf31p8A1mOKZqjFgy/gYLgGpaoW5ZtgcAQjKowRAT0QQBLCIZA0mPpXvshvQesYzmWJ1wvxjLj50nTY+3ZJfYVYsunxp0ob+DRB0V1SrD/C8GTSv2920Bs7AzP6clLMt9tKmG+onY9kbbebs2tjzXRGOv2Bh6dIsQEZ9GkOKMUEZjMUbuBmHwt/Ol4XdPCYHrXYDQ3vAs27T32iL+buMvb3a4mKvXu3DmIE/q18P3JfSUk19lh35xuzfY4iGrrHurNZFznY69qRxZLEro7xJzyDJ/iKEOBGaCsxGX7Zd+jCTyYBR45rd8Smdo8EyuHzJo5joY8JRqhrNDdWE1mxhd9t49OGvUSDbbG5bXBxbSs2pqmmzV/WgqCvjhW00D05dWWXX4OfEM+WLn8H9/xvLhKFV3UxBAiyOmyP137r9Jk4fTorNDWnlIE5Iht4eB9Lfx1eKrl1zwQFvucwYmcTbSRdt4xiqObt0AxXSHybNSmjOv/CB+WFfmlyWYvnZrp2AonF6XXU6fTY7vi9HnTW9P9iuybKJD0drdV5/l9y+/wzLmEhXmaKTKja/biwIq7sna3u1taTeu0nAyMBuHo7T2jC2rNAAzZRx8QFGFaEljiPOv2RL4PYFDbyCeofHcXCAv2GuI16hXHs75PrKpnR2qsBDfL3w9SRmr4Q6/2aXT0t2+gDwqS+4hSFBiYljlpl4hSGCEKhn+8F6rLmaA0L9EMB2AIRGbAszKv8CL7O/3tdoYlhUXxW4ZK0AchydMlAsOSVKgPnud1VR1NRF4RWXUsDnhWGysjidd0QZF0jVW7BNPnmw5OES1hWoAhK/OyJHA8xz7+7IMMNeWTni5nnu2DEBNaullVJDkMPtD6+Ah9P6+y0m4zX+sWiIAh82MblSXOItolVmWQ+GdcI63LAwxDmFD06IMA1dhHnR6IdXHw4q2xNVsvyFg3i5lsZGpn3DnPnkdCNhwgGPgvAzGUXwQFKS9QZk4vDCP4XAjDAeJZ0NnxbNzuzr/T7u61MCtaddU0YmyfX3mKDhDaFrd9Z+EJACIo+HD5BP1LVTj5BWW/0I3p1Umoz1j6RWXI3eKMe1UJ1ti8fNZ9ggWG334MSy0POj1jO1poo+MYdNXq3vkZhqEw+JmHx9+edxcCVEKcUDAE2lJeS4m6reFiVquep9qqOlfVjsaPGn103BNpYxlsvWbXVK1obeSNtRaTE8LmMjEzccG4Z59LJIZbxyPH/CcRMAQXXro7lTlaLKy1R5F3dDPbjmEzi/eX3bZ3kZyB7HKvt423uQ605p4ifc/JLj5z89XIx9o1uq6vgbc6cB6RYix4Y6seqW/da09WPj8mJIFuCvJGDXfVUvTYXeyeBCdvz/Ox63LZRIgl+x6f54YTSCi+CrdXK1jWfHq+Tq3FnvHudCOcmdcoOkNGV8WS8sSIts9Z8D6Lku//APy9TZ9khRi9j9QMdhX6j9p8Zpx59D9JfJ/R/8LRyLob7nS580+0cp3enXGq457P8Xhmz3r2QDcPqwKVqzi/uS14dM1bJLAMc5KCIYBZQHIcgD5IIC3VH236D53Pio+/AL7jx1RhCAAA',
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

