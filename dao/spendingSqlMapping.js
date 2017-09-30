var daily_spending = {
    queryAll: 'SELECT t1.id, t1.spending_out, t1.date, t2.type_name FROM  `daily_spending` AS t1,  `spending_type` AS t2 WHERE t1.type = t2.id',
    queryById: 'select * from `daily_spending` where id=?',
    queryByMonth: 'select t1.*, t2.color, t2.text_color from `daily_spending` as t1, `spending_type` as t2 where (t1.date between ? and ?) and (t1.type = t2.id)',
    queryEventOption: 'select * from spending_type',
    delete: 'delete from daily_spending where id=?',
    update: 'update daily_spending set spending_out=?, type=?, remark=?, date=?, modified_date=? where id=?',
    insert: 'insert into daily_spending(spending_out, type, remark, date, created_date, modified_date) value (?,?,?,?,?,?)'
};

module.exports = daily_spending;