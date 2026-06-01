import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const Forms = () => {

    // register -> Connects input field to React Hook Form
    // handleSubmit -> Handles form submission
    // watch -> Watches field values
    // errors -> Stores validation errors
    // isSubmitting -> Tells whether form is currently submitting

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    // Runs after successful validation
    async function onSubmit(data) {

        // Simulating API Call (wait 5 seconds)
        await new Promise((resolve) =>
            setTimeout(resolve, 5000)
        );

        console.log("Submitting Form", data);
    }

    return (
        <div>

            {/* handleSubmit first validates form then calls onSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* FIRST NAME */}
                <div>
                    <label>First Name : </label>

                    <input
                        className={
                            errors.firstName ? "input-error" : ""
                        }

                        {...register("firstName", {

                            // Field cannot be empty
                            required: "First Name is Required",

                            // Minimum 3 characters
                            minLength: {
                                value: 3,
                                message: "Minimum Length is 3"
                            },

                            // Maximum 10 characters
                            maxLength: {
                                value: 10,
                                message: "Maximum Length is 10"
                            }

                        })}
                    />

                    {/* Show error message if validation fails */}
                    {errors.firstName &&
                        <p className="error-msg">
                            {errors.firstName.message}
                        </p>
                    }
                </div>

                <br />
                <br />

                {/* MIDDLE NAME */}
                <div>
                    <label>Middle Name : </label>

                    <input
                        {...register("MiddleName")}
                    />
                </div>

                <br />
                <br />

                {/* LAST NAME */}
                <div>
                    <label>Last Name : </label>

                    <input

                        className={
                            errors.LastName ? "input-error" : ""
                        }

                        {...register("LastName", {

                            // Only alphabets allowed
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message:
                                    "Only Alphabets Allowed"
                            }

                        })}
                    />

                    {errors.LastName &&
                        <p className="error-msg">
                            {errors.LastName.message}
                        </p>
                    }
                </div>

                <br />
                <br />

                {/* Submit Button */}
                <input
                    type="submit"

                    // Disable button while form is submitting
                    disabled={isSubmitting}

                    value={
                        isSubmitting
                            ? "Submitting..."
                            : "Submit"
                    }
                />

            </form>

        </div>
    );
};

export default Forms;