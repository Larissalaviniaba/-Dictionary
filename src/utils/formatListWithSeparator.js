function formatListWithSeparator(list, separator) {
    let listFormatted;
    list.forEach((item, i) => {
        if (i < list.length - 1) {
            listFormatted += `${item}${separator} `
        } else {
            listFormatted += `${item}.`
        }
    });

    return listFormatted;
}

export default formatListWithSeparator;