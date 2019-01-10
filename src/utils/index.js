import { uuid } from 'vue-uuid'
/**
 * 获取uuid
 */
function getuuid() {
  return uuid.v1()
}

/**
 * 获取整体数组集与部分数组集之间的差集, 默认两个数组中元素的类型一致
 * @param {Array} wholeArr 整体数组集
 * @param {Array} partArr 部分数组集
 */
function getComplementArr(wholeArr, partArr) {
  return wholeArr.filter(ele => {
    if (ele instanceof Object) {
      return !JSON.stringify(partArr).includes(JSON.stringify(ele))
    } else {
      return !partArr.includes(ele)
    }
  })
}

/**
 * 求平均值
 * @param {Array} arr 入参数组
 * @param {*} key 求值字段
 */
function getAverage(arr, key) {
  let resultValue = 0
  if (key) {
    arr.forEach(ele => {
      resultValue += ele[key]
    })
  } else {
    arr.forEach(ele => {
      resultValue += ele
    })
  }

  return Math.floor(resultValue / arr.length)
}

/**
 * 根据索引获取数组的子集
 * @param {*} originArr 原数组
 * @param {*} indexArr 数组索引的子集
 */
function getSubArrayByIndex(originArr, indexArr) {
  return originArr.filter((item, index) => {
    return indexArr.includes(index)
  })
}

/**
 * 根据原始数组以及新加入的元素获取新数组，数组的长度永远小于等于指定长度
 * @param {Array} originArr 原始数组
 * @param {Number} length 数组长度
 * @param {*} ele 新加入的元素
 */
function getFixedLengthArray(originArr, length, ele) {
  if (originArr.length < length) {
    originArr.push(ele)
    return originArr
  }
  originArr.shift()
  return getFixedLengthArray(originArr, length, ele)
}

export { getuuid, getComplementArr, getAverage, getSubArrayByIndex, getFixedLengthArray }
