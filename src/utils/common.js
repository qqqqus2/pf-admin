

/**
 * 
 * @param {*} value 
 * @param {*} defaultValue 
 * @returns 
 */
export const nvl = (value, defaultValue='') => {
    return value ?? defaultValue
}

/**
 * get size classname
 */
export const getSizeOrDefault = (size, defaultSize='s') => {
    return `size-${['s','m','l'].includes(size) ? size : defaultSize}`
}

/**
 * get item by id from object array
 * @param arr: [{id:'abc', key:valueA}, {id:'def', key:valueB}, ...]
 * @param id: 'def' (id)
 * @return  // {id:'def', key:valueB}
 */
export const getItemById = (arr=[], id='') => {
    return arr.find(v => v.id === id)
}

/**
 * get items by id list from object array
 * @param arr: [{id:'abc', key:valueA}, {id:'def', key:valueB}, {id:'ghi', key:valueC} ...]
 * @param idList: ['def', 'ghi'] (value)
 * @return  // [{id:'def', key:valueB}, {id:'ghi', key:valueC}]
 */
export const getItemsByIdList = (arr=[], idList=[]) => {
    return arr.filter(v => idList.includes(v.id))
}

/**
 * get item by key-value from object array
 * @param arr: [{id:'abc', key:valueA}, {id:'def', key:valueB}, ...]
 * @param key: 'id' (key name)
 * @param value: 'def' (value)
 * @return  // {id:'def', key:valueB}
 */
export const getItemByKeyValue = (arr=[], key='', value='') => {
    return arr.find(v => v[key] === value)
}

/**
 * get id values from object array
 * @param {*} arr : [{id: 'abc', ...}, {id: 'def', ...}]
 * @returns     // ['abc', 'def']
 */
export const getIdList = (arr=[]) => {
    return arr.map(v => v.id)
}

/**
 * 
 * @param {*} arr // [{type:'user'}, {type:'admin'}, {type:'oper'}]
 * @param {*} key // 'type'
 * @param {*} separtor '/'
 * 
 * @return  'user/admin/oper'
 */
export const getValueListStr = (arr=[], key='', separtor=',') => {
    return arr.map(v => v[key]).join(separtor)
}