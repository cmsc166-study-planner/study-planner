'use strict';

const jsonData = require('./course-history.json');
const stringData = JSON.stringify(jsonData);

let val = parseJson(stringData);

// return JSON object representing the study plan
function parseJson(stringData) {
    let par = JSON.parse(stringData);
    return par;
}

function isObject(val) {
    return val === Object(val);
}

// Mocha test
var st = parseJson(stringData);
var assert = require('assert');

describe('Parse JSON', function() {
    it('should return the typeof st which is Object', function(){
        assert.equal(isObject(st), true);
    });

    it('should return the course with it corresponding grade', function() {
        assert.equal(st[0].course, "CMSC 11");
        assert.equal(st[0].grade, "1.00");
    });
});
