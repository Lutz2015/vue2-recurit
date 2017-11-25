// 出生年月: 1957-2001
let formatTwoDigitInteger = (value) => {
    value = value.toString();
    return (value.length === 1 ? '0' : '') + value;
};

let generateYearData = (thisYear) => {
    var result = [],
        i = thisYear,
        end = thisYear+45;
    for(; i < end; i++) {
        result.push({
            value: formatTwoDigitInteger(i) + '年'
        });
    }
    return result;
};

let generateMonthData = () => {
    var result = [], i = 1;
    for (; i < 13; ++i) {
        result.push({
            name: formatTwoDigitInteger(i) + '月'
        });
    }
    return result;
};

let generateDateData = () => {
    var result = [], i = 1;
    for (; i < 32; ++i) {
        result.push({
            name: formatTwoDigitInteger(i) + '日'
        });
    }
    return result;
};

let today = new Date('1957'),
    thisYear = today.getFullYear(),
    thisMonth = today.getMonth() + 1,
    thisDate = today.getDate(),
    thisHour = today.getHours(),
    months = generateMonthData(),
    dates = generateDateData(),
    dayDesc = ['上午', '下午'],
    lastYear = thisYear,
    lastMonth = thisMonth,
    lastDate = thisDate,
    lastDesc = dayDesc[thisHour < 12 ? 0 : 1];


let dateItems = [{
        name: 'value',
        values: generateYearData(thisYear),
    },{
        name: 'name',
        index: thisMonth - 1,
        values: months,
    },{
         name: 'name',
        index: thisDate - 1,
        values: dates,
    }]

export default dateItems;