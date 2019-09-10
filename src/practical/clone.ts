import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

export default function clone(target: Object, map = new WeakMap()) {

    if(!isObject(target)) {
        return target
    }

    const type = getType(target)
    let cloneTarget;
    if()

    if(typeof target === 'object') {
        const isArray = Array.isArray(target)
        let cloneTarget = isArray ? [] : {}
        if(map.get(target)) {
            return map.get(target)
        }

        map.set(target, cloneTarget)
        const keys = isArray ? undefined : Object.keys(target)


        forEach(keys || target, (value, key) => {
            if(keys) {
                key = value
            }
            cloneTarget[key] = clone(target[key], map)
        })

        return cloneTarget
    }
}

function forEach(array, iteratee) {
    let index = -1
    const length = array.length
    while(++index < length) {
        iteratee(array[index], index)
    }

    return array

}

function isObject(target) {
    const type = typeof target
    return target !== null && (type === 'object' || type === 'function')
}

function getType(target) {
    return Object.prototype.toString.call(target)
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor()
}