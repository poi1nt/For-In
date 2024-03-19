export default function orderByProps(obj, order) {

  const res = []

  for (let key of order) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res.push({key: key, value: obj[key]})
    } else {
      throw Error("Не найдено " + key)
    }
  }

  const newObj = Object.keys(obj).filter(key => !order.includes(key)).sort()
  for (let key of newObj) {
    res.push({key: key, value: obj[key]})
  }

  return res

}

