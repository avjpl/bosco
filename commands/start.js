module.exports = {
    name:'start',
    description:'This is an alias for run',
    example:'alias for "bosco run"',
    cmd:cmd
}

function cmd(bosco, args) {

    var run = require('./run');
    run.cmd(bosco, args);

}

