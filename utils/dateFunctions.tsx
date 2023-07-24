const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May', 
    'Jun', 
    'Jul',
    'Aug', 
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

function getMonth(input: string): string {
    return months[parseInt(input.split('-')[1])]
}

function getYear(input: string): string {
    return input.split('-')[0]
}

export { getMonth, getYear }