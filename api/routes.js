/**
 * Created by brian on 6/19/15.
 */
module.exports = function (waypost) {
    // api controller routes

    // default application route (non-secure)
    waypost.app.get('/', function (req, res) {
        res.send('Hello World  ----  WAYPOST!');
    });
}