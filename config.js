import { resolve } from 'path'

export default {
  paths: {
    dist: resolve(__dirname, './dist'),
    src: resolve(__dirname, './src')
  },
  PORT: 8080,
  DEV_PORT: 3000
}
