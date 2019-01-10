/**
 * author Yan Wenhao 0049003123@znv.com
 * @param {Array} originList List of opertionTypes
 * @param {Array} nodeDataList Aiviliable operation list got from Opp server
 */
export function driveToTree(originList, nodeDataList) {
  originList.map((elem) => {
    elem.children = []
  })
  for (let i = 0; i < nodeDataList.length; i++) {
    const index = findOperationTypeIndexOf(originList, nodeDataList[i])
    if (index !== -1) {
      originList[index].children.unshift({
        img: shortCircuitOROperation(nodeDataList[i].iconUrl, nodeDataList[i].icon),
        displayname: shortCircuitOROperation(nodeDataList[i].displayName, nodeDataList[i].name),
        name: nodeDataList[i].name,
        id: nodeDataList[i].id,
        type: shortCircuitOROperation(nodeDataList[i].type, nodeDataList[i].moduleId),
        relativePath: nodeDataList[i].relativePath
      })
    } else {
      console.log('operation type unexpected:' + nodeDataList[i])
    }
  }
  return originList
}

function shortCircuitOROperation(firstParam, secondParam) {
  if (firstParam !== undefined && firstParam !== '') {
    return firstParam
  } else {
    return secondParam
  }
}

/**
 * author Yan Wenhao 0049003123@znv.com
 * @param {*} list List of opertionTypes
 * @param {*} item A operation item
 */
function findOperationTypeIndexOf(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === item.type || list[i].id === item.moduleId) {
      return i
    }
  }
  return -1 // means operation type 404 :-)
}

/**
 * commit the information of operator under editting to vuex, for showing in the right side.
 * @param {Object} store A Object of vuex $store, act as a commit purpose.
 * @param {Object} data A Object for the committing operator.
 */
export function commitOptConfig(store, data) {
  console.log(data)
  store.commit({
    type: 'setShownState',
    shown: true
  })
  // giving operator name & operator type & operator id
  store.commit({
    type: 'setOptName',
    optName: data.name
  })
  store.commit({
    type: 'setOptType',
    optType: data.type
  })
  store.commit({
    type: 'setOptId',
    optId: data.id
  })
}
