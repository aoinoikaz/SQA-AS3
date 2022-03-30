var Listings =
{
    insert: function(options, callback)
    {
        function txFunction(tx)
        {
            var sql  = "INSERT INTO listings(firstName, lastName, address, city, province, postalCode, phoneNumber, emailAddress, vehicleMake, vehicleModel, vehicleYear) " +
                "VALUES(?,?,?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, callback, OnError );
        }
        function successInsert()
        {
            console.info("Listings: Insert transaction successful");
        }
        db.transaction(txFunction, OnError, successInsert);
    },

    selectAll: function(options, callback)
    {
        function txFunction(tx)
        {
            var sql  = "SELECT * FROM listings;";
            tx.executeSql(sql, options, callback, OnError );
        }
        function successSelectAll()
        {
            console.info("Listings: SelectAll transaction successful");
        }
        db.transaction(txFunction, OnError, successSelectAll);
    },
};



