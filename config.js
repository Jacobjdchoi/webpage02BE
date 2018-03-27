var config = {}

config.host = 'smtp.mailplug.co.kr';
config.port = 587;
config.secure = false; // true for 465, false for other ports like 587
config.username = '';
config.password = '';
config.sendAddr = '"웹사이트" <sales@choistechnics.com>';
config.subject = '웹사이트 Contact';
config.receAddr = 'sales@choistechnics.com';


module.exports = config;