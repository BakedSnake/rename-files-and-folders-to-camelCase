var fs = require('fs'),
    path = require("path"),
    camelCase = require('camelcase'),
    ncp = require("ncp");

var toRenameDir = 'toRename',
    renameDir = 'renamed';

// Copy files to directory
ncp(toRenameDir, renameDir, (err) => {
    if (err) {
        return console.log(err); 
    } 
    console.log("copied files..");	

    // Go through directory
    fs.readdir(renameDir, (err, files) => {
        if (err) {
	    console.log("ERROR", err);
	   }
    

    var dir = __dirname + '/' + renameDir + '/';
    for (var i = files.length - 1; i >= 0; i--) {
        console.log("File:", files[i]);
        if (typeof files[i] !== "undefinded") {
            var file = files[i];
            var fi = file.split('.');

            if (file.includes('.')) {
               	//rename each file in dir
               	fs.renameSync(dir + file, dir + camelCase(fi[0]) + '.' + fi[1])
                console.log(file + ' ====>> ' + camelCase(fi[0]) + '.' + fi[1]);
            } else {
                fs.renameSync(dir + file, dir + camelCase(file))
                console.log(file + ' ====>> ' + camelCase(file)); 
        	}
        };
    };
    })
});
