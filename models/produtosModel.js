const db = require("../db");

exports.getAll = (callback) => {
    db.query("SELECT * FROM produtos", callback);
};

exports.getById = (id, callback) => {
    db.query("SELECT * FROM produtos WHERE id = ?", [id], callback);
}
