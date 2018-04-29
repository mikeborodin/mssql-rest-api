const sql = require('mssql')

try {
    const pool =  sql.connect('mssql://sa:zxcvbnmSQL124*@localhost/donezilla')
    const result =  sql.query `select * from Projects`
    console.dir(result)
} catch (err) {
    // ... error checks
}