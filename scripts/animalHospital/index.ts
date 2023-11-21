import 台中市 from './台中市.json'
import 台北市 from './台北市.json'
import 台南市 from './台南市.json'
import 花蓮縣 from './花蓮縣.json'

export const data = [...台北市, ...台中市, ...台南市, ...花蓮縣].map(
  (item) => ({
    ...item,
    isEmergency: Math.random() < 0.4,
  }),
)
