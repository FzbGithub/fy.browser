module.exports = {
  get: function () {
    // 常规浏览器语言和IE浏览器
    var lang = navigator.language || navigator.userLanguage
    if (lang) {
      lang = lang.substr(0, 2)
      return unescape(lang)
    } else {
      return 'zh'
    }
  }
}
