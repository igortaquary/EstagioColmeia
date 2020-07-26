'use strict';
const fs = require('fs');
const { error } = require('console');

/* Conversor de arrays para linhas de texto no formato csv */
const csvConv = (...lines) => {
    let data = '';

    lines.forEach(line => {
        line.forEach(cel => {
            data += cel + ';';
        })
        data += '\n';
    });

    return data;
}

/* Faz a adição dos dados no arquivo (fileName).csv, 
caso (fileName).csv já exista ele será reescrito */
const csvCreator = (fileName, ...fileLines) => {
    fs.writeFile(fileName + '.csv', csvConv(...fileLines), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Operação realizada. ' + fileName + '.csv');
        }
    });
}

module.exports = csvCreator;