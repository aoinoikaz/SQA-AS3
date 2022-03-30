var db;

function OnError(error)
{
    console.error("SQL error: " + error.message);
}

var DB =
{
    GetDatabase: function ()
    {
        var shortName = "sqa_part2_task1";
        var version = "1.0";
        var displayName = "Database for SQA AS3";
        var dbSize = 2 * 1024 * 1024;

        function onDbCreatedSuccessfully()
        {
            console.info("Success: Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, onDbCreatedSuccessfully);
    },

    CreateListingTable: function ()
    {
        function txFunction(tx)
        {
            var options = [];

            // Create listing table
            var sql = "CREATE TABLE IF NOT EXISTS listings( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "firstName VARCHAR(30) NOT NULL," +
                "lastName VARCHAR(30) NOT NULL," +
                "address VARCHAR(30) NOT NULL," +
                "city VARCHAR(30) NOT NULL," +
                "province VARCHAR(2) NOT NULL," +
                "postalCode VARCHAR(6) NOT NULL," +
                "phoneNumber INTEGER," +
                "emailAddress VARCHAR(30) NOT NULL," +
                "vehicleMake VARCHAR(30) NOT NULL," +
                "vehicleModel VARCHAR(30) NOT NULL," +
                "vehicleYear INTEGER);";

            tx.executeSql(sql, options, onListingTableExecuted, OnError);

            function onListingTableExecuted()
            {
                console.info("Listing table query executed successfully!");
            }
        }

        db.transaction(txFunction, OnError, onCreateTxSuccess);

        function onCreateTxSuccess()
        {
            console.info("Successfully executed the create tables transaction");
        }
    },

    DropListingTable: function()
    {
        // Drop lookup type table
        function txFunction(tx)
        {
            var sql = "DROP TABLE IF EXISTS listings;";
            var options = [];

            tx.executeSql(sql, options, onListingTableDropped, OnError);

            function onListingTableDropped()
            {
                console.info("Successfully dropped listing table");
            }
        }

        db.transaction(txFunction, OnError, onDropTxSuccess);

        function onDropTxSuccess()
        {
            console.info("Drop tables transaction was executed successfully");
        }
    },
};
