var daily_spending = {
    queryAll: 'SELECT t1.id, t1.spending_out, t1.date, t2.type_name FROM  `daily_spending` AS t1,  `spending_type` AS t2 WHERE t1.type = t2.id',
    queryEventById: 'select * from `daily_spending` where id=?',
    queryEventByMonth: 'select t1.*, t2.color, t2.text_color from `daily_spending` as t1, `spending_type` as t2 where (t1.date between ? and ?) and (t1.type = t2.id) and (t1.userid = ?) and (t1.active = 1)',
    queryEventOption: 'select * from spending_type',
    deleteEventById: 'update daily_spending set active=0 where id=?',
    updateEvent: 'update daily_spending set spending_out=?, type=?, remark=?, date=?, modified_date=? where id=?',
    insertNewEvent: 'insert into daily_spending(userid, spending_out, type, remark, date, created_date, modified_date) value (?,?,?,?,?,?,?)',
    queryUserByName: 'select * from users where username=?',
    insertNewUser: 'insert into users(username, password, role, email, created_date) value (?,?,?,?,?)'
};

module.exports = daily_spending;