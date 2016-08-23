TODO:

1. Create a service to retrieve 'students' from the API http://il-resume-api.azurewebsites.net/api/students.
  a. Handle 503 errors by automatically retrying the request.
  b. The retry mechanism should be easily reusable.
  c. API requests should verify that valid JSON was returned, and handle errors if it is invalid.
2. Populate the Students view
  a. Display a list of student names
  b. Display additional details when a student is clicked.
  c. Display any appropriate errors in the UI.
3. Filter Students view with a Text field
4. Submit
  a. Push changes to your forked repository
  b. Email a link to the repo
