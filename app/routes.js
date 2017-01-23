var Todo = require('./models/todo');
var TodoRound = require('./models/todoRound');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

function getTodosRound(res) {
    TodoRound.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            name: req.body.name,
            number: req.body.number
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });
    
    // delete a todo
    app.delete('/api/todos', function (req, res) {
        Todo.remove(function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    
    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos/round', function (req, res) {
        // use mongoose to get all todos in the database
        getTodosRound(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todo/round', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        TodoRound.create({
            numberPlayer: req.body.numberPlayer,
            namePlayer: req.body.namePlayer,
            limitMovements: req.body.limitMovements,
            moveType: req.body.moveType,
            numberRound: req.body.numberRound
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodosRound(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/round/:todo_id', function (req, res) {
        TodoRound.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodosRound(res);
        });
    });
    
    // delete a todo
    app.delete('/api/todos/round', function (req, res) {
        TodoRound.remove(function (err, todo) {
            if (err)
                res.send(err);

            getTodosRound(res);
        });
    });
};
