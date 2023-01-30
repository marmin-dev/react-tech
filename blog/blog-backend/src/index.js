//이 파일에서만 no-global-assign ESLINT 옵션 비활성화
//eslint-dasable no-global-assign

require = require('esm')(module /*,options*/);
module.exports = require('./main.js');
