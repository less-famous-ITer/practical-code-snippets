/**
 * 深拷贝
 * @param obj
 * @returns {*[]}
 */
export default function deepClone(obj) {
    /** 判断`obj`是否为数组*/
    const clone = Array.isArray(obj) ? [] : {}
    /** 判断`obj`是否为对象*/
    if(obj && typeof obj === "object") {
        /** 遍历全部`obj`全部`key`*/
        for(const key in obj) {
            /** 判断`key`是否为`obj`本身所有*/
            if(obj.hasOwnProperty(key)) {
                /** 如果`obj[key]`仍为对象*/
                if(obj[key] && typeof obj[key] === "object") {
                    /** 递归复制对象*/
                    clone[key] = deepClone(obj[key])
                } else {
                    /** 直接复制基本数据类型*/
                    clone[key] = obj[key]
                }
            }
        }
    }
    /** 返回拷贝值*/
    return clone
}

