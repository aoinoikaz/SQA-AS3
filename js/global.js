$(document).ready(function ()
{
    // Global initialization
    InitDatabase();
    InitHandlers();
});

function InitHandlers()
{
    $(document).on("pageshow","#viewVehiclesPage",function()
    {
        DisplayVehicles();
    });

    $(document).on("pageshow","#addNewVehiclePage",function()
    {
        $('#generatedLink').hide();
    });

    // Review page logic
    $('#submitButton').click(function ()
    {
        if(ValidateListing())
        {
            var url = AddVehicle();
            $('#generatedLink').show();
            $('#jdPower').val(url);
        }
        else
        {
            console.log("Add form is invalid");
        }
    });
}

function InitDatabase()
{
    try
    {
        DB.GetDatabase();
        if(db)
        {
            console.log("Database created successfully... proceeding to create tables.");
            DB.CreateListingTable();
        }
        else
        {
            console.error("Error creating tables: database does not exist");
        }
    }
    catch(e)
    {
        console.error("Error initializing database. Can not proceed");
    }
}