var trading_history = {
    queryAll: 'select * from trading_history',
    queryById: 'select * from trading_history where id=?',
    delete: 'delete from trading_history where id=?',
    update: 'update trading_history set stock_number=?, buy_value=?, sell_value=?, upd_date=? where id=?',
    insert: 'insert into trading_history(stock_number, buy_value, sell_value, crt_date, upd_date) value (?,?,?,?,?)'
};

module.exports = trading_history;