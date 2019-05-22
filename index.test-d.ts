import {expectType} from 'tsd';
import clean = require('.');

expectType<{foo?: string}>(clean({foo: ''}));
expectType<{foo?: {bar?: string}}>(clean({foo: {bar: ''}}));
expectType<{foo?: {bar?: {unicorn?: string}[]}}>(clean({foo: {bar: [{unicorn: '🦄'}]}}));

expectType<{foo?: any[]}>(clean({foo: []}, {preserveArrays: false}));
expectType<{foo?: any[]}>(clean({foo: []}, {cleanArrays: false}));
expectType<{foo?: any[]}>(clean({foo: []}, {cleanArrays: false, preserveArrays: false}));
