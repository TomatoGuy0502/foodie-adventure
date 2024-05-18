import zh from '~/locales/zh.json'
import en from '~/locales/en.json'
import ja from '~/locales/ja.json'
import ko from '~/locales/ko.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    zh,
    en,
    ja,
    ko,
  }
}))