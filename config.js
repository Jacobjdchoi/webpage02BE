var config = {}

config.host = 'smtp.mailplug.co.kr';
config.port = 587;
config.secure = false; // true for 465, false for other ports like 587
config.username = process.env.SMTP_USERNAME;
config.password = process.env.SMTP_PASSWORD;
config.sendAddr = '"웹사이트" <sales@choistechnics.com>';
config.subject = '웹사이트 Contact';
config.receAddr = 'sales@choistechnics.com';


module.exports = config;