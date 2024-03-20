[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13590712&assignment_repo_type=AssignmentRepo)
# P2-Challenge-1 (Server Side)

> Tuliskan API Docs kamu di sini

# Job Street API docs


## Available Endpoints

## 'Companies'

# 1. Get All Companies
   "Endpoint": /company
   "Method": GET
   "Description": Retrieve all company.
   "Status": 200 OK
   "Body": "Get Data Company Succeed"

# 2. Add a Company
   "Endpoint": /company
   "Method": POST
   "Description": Add a new company.
   "Request":
   "Body": JSON object with company details 
   "Status": 200 OK
   "Body": "Add Company Succeed"

# 3. Get a Single Company
   "Endpoint": /company/:id
   "Method": GET
   "Description": Retrieve details of a specific company.
   "Status": 200 OK (if Succeed)
   "Body": JSON object with company details
   "Status": 404 Not Found (if the company with the specified ID does not exist)

# 4. Edit a Company
   "Endpoint": /company/:id
   "Method": PUT
   "Description": Edit details of a specific company.
   "Body": JSON object with updated company details.
   "Status": 200 OK (if Succeed)
   "Body": "Edited Data Company Succeed"
   "Status": 404 Not Found (if the company with the specified ID does not exist)

# 5. Delete a Company
   "Endpoint": /company/:id
   "Method": DELETE
   "Description": Delete a specific company.
   "Status": 200 OK
   "Body": "Deleted Data Company Succeed"
   Status: 404 Not Found (if the company with the specified ID does not exist)
   
## Jobs

# 1. Get All Jobs
   "Endpoint": /job
   "Method": GET
   "Description": Retrieve all jobs.
   "Status": 200 OK
   "Body": "Get Data Succeed"

# 2. Add a Job
   "Endpoint": /job
   "Method": POST
   "Description": Add a new job.
   "Body: JSON object with job details 
   Status: 201 Created
   Body: { "message": "Add Job Succeed" }

# 3. Get a Single Job
   "Endpoint": /job/:id
   "Method": GET
   "Description": Retrieve details of a specific job.
   "Status": 200 OK (if Succeed)
   "Body": JSON object with job details
   Status: 404 Not Found (if the job with the specified ID does not exist)

# 4. Edit a Job
   "Endpoint": /job/:id
   "Method": PUT
   "Description": Edit details of a specific job.
   "Body: JSON object with updated job details.
   Status: 200 OK (if Succeed)
   Body: "Edited data Job Succeed"
   Status: 404 Not Found (if the job with the specified ID does not exist)

# 5. Delete a Job
   "Endpoint": /job/:id
   "Method": DELETE
   "Description": Delete a specific job.
   "Status": 200 OK (if Succeed)
   "Body": "Deleted Data Job Succeed"
   Status: 404 Not Found (if the job with the specified ID does not exist)

## Users

# 1. Get All Users
   "Endpoint": /user
   "Method": GET
   "Description": Retrieve all users.
   "Status": 200 OK
   "Body": "Get Data User Succeed"

# 2. Add a User
   "Endpoint": /user
   "Method": POST
   "Description": Add a new user.
   "Body: JSON object with user details 
   "Status": 200 OK
   "Response": "Add User Succeed"

# 3. Get a Single User
   "Endpoint": /user/:id
   "Method": GET
   "Description": Retrieve details of a specific user.
   "Status": 200 OK (if Succeed)
   "Body": JSON object with user details
   Status: 404 Not Found (if the user with the specified ID does not exist)

# 4. Edit a User
   "Endpoint": /user/:id
   "Method": PUT
   "Description": Edit details of a specific user.
   "Body: JSON object with updated user details.
   "Status": 200 OK (if Succeed)
   "Response: "Edited Data User Succeed"
   "Status": 404 Not Found (if the user with the specified ID does not exist)

# 5. Delete a User
   "Endpoint": /user/:id
   "Method": DELETE
   "Description": Delete a specific user.
   "Status": 200 OK (if Succeed)
   "Body": "Deleted Data User Succeed"
   Status: 404 Not Found (if the user with the specified ID does not exist)