function AddVehicle()
{
    // Seller info
    var options = [];
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var province = $('#province').val();
    var postalCode = $('#postalCode').val();
    var phoneNumber = $('#phoneNumber').val();
    var emailAddress = $('#emailAddress').val();

    // Vehicle info
    var vehicleMake = $('#vehicleMake').val();
    var vehicleModel = $('#vehicleModel').val();
    var vehicleYear = $('#vehicleYear').val();

    var options = [firstName, lastName, address, city, province, postalCode, phoneNumber, emailAddress, vehicleMake, vehicleModel, vehicleYear];

    Listings.insert(options, onListingInserted);

    function onListingInserted()
    {
        console.log("Successfully inserted vehicle listing into database!");
    }
}

function DisplayVehicles()
{
    var options = [];

    Listings.selectAll(options, onSelectListings);

    function onSelectListings(tx, results)
    {
        var htmlCode = "";
        var lviName = "";

        if(results.rows.length != 0)
        {
            for(var i = 0; i < results.rows.length; i++)
            {
                var row = results.rows[i];

                var firstName = row['firstName'];
                var lastName = row['lastName'];
                var address = row['address'];
                var city = row['city'];
                var province = row['province'];
                var postalCode = row['postalCode'];
                var phoneNumber = row['phoneNumber'];
                var emailAddress = row['emailAddress'];

                // Vehicle info
                var vehicleMake = row['vehicleMake'];
                var vehicleModel = row['vehicleModel'];
                var vehicleYear = row['vehicleYear'];

                lviName = "listViewItem" + i;
                htmlCode += `
                <li id=${lviName}>
                    <h1> Seller's Information </h1>
                    <p>First Name: ${firstName}</p>
                    <p>Last Name: ${lastName}</p>
                    <p>Address: ${address}</p>
                    <p>City: ${city}</p>
                    <p>Province: ${province}</p>
                    <p>Postal Code: ${postalCode}</p>
                    <p>Phone Number: ${phoneNumber}</p>
                    <p>Email: ${emailAddress}</p>
                    
                    <h1>Vehicle's Information</h1>
                    <p>Make: ${vehicleMake}</p>
                    <p>Model: ${vehicleModel}</p>
                    <p>Year: ${vehicleYear}</p>
                </li>`;
            }
        }
        else
        {
            htmlCode += `<h1>No vehicles added yet! </h1>`;
        }

        var listView = $('#viewVehicleListView');
        listView = listView.html(htmlCode);
        listView.listview('refresh');
    }
}
