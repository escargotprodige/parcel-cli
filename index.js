#!/usr/bin/env node

var program = require('commander'),
  parcel = require('parcel-luxe');

program
  .version(require('parcel-luxe/package.json').version)
  .option('-o, --out', 'directory to output the generated parcel')
  .arguments('[dir]')
  .action(function(dir){
    parcel(dir, program.out);
  });

program.parse(process.argv);
