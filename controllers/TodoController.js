const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let data = [ { item: '吃饭' }, { item: '睡觉' }, { item: '打代码' } ];

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('todo', { todos: data });
  });

  app.post('/todo', urlencodedParser, function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }

    data.push(req.body);
    res.json({ code: 0 });
  });

  app.delete('/todo/:item', function (req, res) {
    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

    res.json({ code: 0 });
  });

};
