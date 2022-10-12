import Big from "big.js";

import isNumber from "./isNumber";
import operate from "./operate";

export default function calculate(obj, buttonName) {
    // 如果运算符为 AC 则清空状态
    if (buttonName === "AC") {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    // 按下按钮为运算符时
    if (isNumber(buttonName)) {
        // 如果当前数字为零且输入 0 则维持 0 不变
        if (buttonName === "0" && obj.next === "0") {
            return {};
        }

        // 如果已经存在运算符，则更新被运算数（state.next)
        if (obj.operation) {
            // 根据 obj.next 决定如何更新 stat.next
            if (obj.next) {
                return { next: (obj.next === "0" ? "" : obj.next) + buttonName }
            }
            return { next: buttonName };
        }

        // 如果没有运算符且存在 state.next
        if (obj.next) {
            const next = obj.next === "0" ? buttonName : obj.next + buttonName;
            // 返回拼接的 next 并清空 total
            return {
                next,
                total: null,
            };
        }
        // 既无运算符也无 state.next 则将按下的键设为 next，并清空 total
        return {
            next: buttonName,
            total: null,
        }
    }

    // 运算符为 %
    if (buttonName === "%") {
        // 当运算符和 state.next 同时存在时，此时 total 也存在，计算当前状态结果并除以 100
        if (obj.operation && obj.next) {
            const result = operate(obj.total, obj.next, obj.operation);
            return {
                total: Big(result).div(Big("100")).toString(),
                next: null,
                operation: null,
            };
        }
        // 仅有 state.next 存在时，next 设为 state.next 除以 100
        if (obj.next) {
            return {
                next: Big(obj.next).div(Big("100")).toString(),
            };
        }
        return {};
    }

    if (buttonName === ".") {
        // 根据当前是否含有 . 决定是否添加
        if (obj.next) {
            return obj.next.includes(".") ? {} : { next: `${obj.next}.` };
        }
        return {
            next: "0.",
        };
    }

    if (buttonName === "=") {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        }
        return {};
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.next)).toString() };
        }
        return {};
    }

    // 如果是运算符，直接进行计算
    // 仅有
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        }
    }

    // 如果不存在 state.next，则储存运算符
    if (!obj.next) {
        return { operation: buttonName };
    }

    // 只剩下一种情况，保存运算符并将 next 转移到 total
    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    }
}