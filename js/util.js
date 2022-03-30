// validation for add review
function ValidateListing()
{
    const addForm = $('#addVehicleForm');
    addForm.validate({
        rules:{
            firstName:{
                required: true,
                rangelength: [2,20]
            },
            lastName:{
                required: true,
                rangelength: [2,20]
            },
            address: {
                required: true,
                rangelength: [2,30]
            },
            city:{
                required: true,
                rangelength: [2,20]
            },
            province: {
                required: true
            },
            postalCode:{
                required: true,
            },
            phoneNumber:{
                required: true
            },
            emailAddress:{
                required: true,
                rangelength: [2, 30]
            },
            vehicleMake: {
                required: true,
                rangelength: [2,20]
            },
            vehicleModel:{
                required: true,
                rangelength: [2,20]
            },
            vehicleYear:{
                required: true,
                min: 1
            }
        },
        messages:{
            firstName:{
                required: "First name cannot be empty",
                rangelength: "First name must be 2-20 characters"
            },
            lastName:{
                required: 'Last name cannot be empty',
                rangelength: "Last name must be 2-20 characters"
            },
            address: {
                required: "Address cannot be blank",
                rangelength: "Address must be 2 - 30 characters"
            },
            city:{
                required: "City cannot be empty",
                rangelength: "City must be 2-20 characters"
            },
            province:{
                required: "Must choose a province"
            },
            postalCode:{
                required: "Postal code cannot be empty"
            },
            phoneNumber: {
                required: "Phone number cannot be empty"
            },
            emailAddress: {
                required: "Email address cannot be blank",
                rangelength: "Email address must be 2-30 characters"
            },
            vehicleMake: {
                required: "Vehicle make cannot be blank",
                rangelength: "Vehicle make must be 2-20 characters"
            },
            vehicleModel: {
                required: "Vehicle model cannot be blank",
                rangelength: "Vehicle model must be 2-20 characters"
            },
            vehicleYear: {
                required: "Vehicle year cannot be blank",
                min: "Vehicle year must be greater than 0"
            }
        }
    });
    return addForm.valid();
}

