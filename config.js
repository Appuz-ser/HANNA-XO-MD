const {
    Sequelize
} = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
    require('dotenv').config({
        path: './config.env'
    });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL || './assets/database.db';

module.exports = {
    ANTILINK: toBool(process.env.ANTI_LINK) || false,
    LOGS: toBool(process.env.LOGS) || true,
    ANTILINK_ACTION: process.env.ANTI_LINK || 'kick',
    SESSION_ID: process.env.SESSION_ID || '',
    LANG: process.env.LANG || 'EN',
    HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
    RMBG_KEY: process.env.RMBG_KEY || false,
    BRANCH: 'master',
    PACKNAME: process.env.PACKNAME || 'ʜᴀɴɴᴀ xᴏ',
    WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
    GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
    AUTHOR: process.env.AUTHOR || 'ᴀʙʜɪʏ xᴏ',
    SUDO: process.env.SUDO || '14402220018',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
    OWNER_NAME: process.env.OWNER_NAME || 'ᴀʙʜɪʏ xᴏ',
    BOT_NAME: process.env.BOT_NAME || 'ʜᴀɴɴᴀ-xᴏ-ᴍᴅ',
    BOT_INFO: process.env.BOT_INFO || '𝗛𝗔𝗡𝗡𝗔-𝗫𝗢-𝗠𝗗;𝗔𝗕𝗛𝗜𝗜𝗬;https://i.imgur.com/bX4ueai.jpeg',
    WORK_TYPE: process.env.WORK_TYPE || 'public',
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './assets/database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
    }): new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
            native: true,
            ssl: {
                require: true, rejectUnauthorized: false
            },
        },
        logging: false,
    }),
};
