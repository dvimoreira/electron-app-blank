const dayAbbreviation = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const dayList = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
const monthList = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const monthLongList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const DateFormatCalendar = {
    formatDateDisplay (date) {
        return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`
    },
    formatMonth (date) {
        return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`
    },
    getWeekDayArray (firstDayOfWeek) {
        let beforeArray = []
        let afterArray = []
        for (let i = 0; i < dayAbbreviation.length; i++) {
            if (i < firstDayOfWeek) {
                afterArray.push(dayAbbreviation[i])
            } else {
                beforeArray.push(dayAbbreviation[i])
            }
        }
        return beforeArray.concat(afterArray)
    },
    getMonthList () {
        return monthList
    }
}

export default DateFormatCalendar
