var _ = require('lodash');

module.exports = function(app) {

    var _cats = [{name:'Zoey',id: 1},{name:'Zoey2',id: 2}];

    app.post('/cats',function(req, res){
        _cats.push(req.body);
        res.json({info: 'cat added successfully'})
    });

    app.get('/cats', function(req, res){
        res.send(_cats);
    });

    app.get('/cats/:id',function(req, res){
        res.send(_.find(_cats,
        {
            name: req.params.id
        }));
        console.log(_.indexOf(_cats, {id: 2}));
    });

    app.put('/cats/:id', function(req, res){
        var index = _.findIndex (_cats,{
            name: req.params.id
        });
        _.merge(_cats[index], req.body);
        res.send({info: 'cat updated successfully'});
    });

    app.delete('/cats/:id',function(req, res) {
        _.remove(_cats, {name: req.params.id});
        //res.send({info: 'cat deleted successfully'});
        res.send(_cats);
    });

};