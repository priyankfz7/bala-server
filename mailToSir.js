let mailToSir = ({
  name,
  phone,
  course,
  school,
  location,
  classname,
}) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
       @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Quicksand:wght@600&display=swap');
      .container {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        background-color: #edf2f7;
        padding:10px
      }
      .title {
        text-align: center;
        font-family: "Lobster", cursive;
      }
      .message {
        max-width: 600px;
        margin: auto;
        margin-bottom:50px;
        background-color: #ffffff;
        padding: 20px;
      }
      .details div {
        display: flex;
        justify-content: space-between;
      }
      .details > div {
        margin: auto;
      }
      h1 {
        color: #718096;
        font-family: "Anuphan", sans-serif;
      }
      td {
        color: #718096;
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        font-size: 13px;
      }
      h2 {
        font-family: "Lobster", cursive;
        color: #718096;
      }
      table {
        border-collapse: collapse;
        width: 95%;
        margin: auto;
        text-align: center;
      }
      td {
        border: 2px solid #ffa12b;
        padding: 8px;
      }
    </style>
  </head>
  <body>
  <div class="container">
      <h1 class="title">Bala | Commerce | Classes</h1>

      <div class="message">
        <h2>😀 New Student Details!!!</h2>
        <table>
          <tr>
            <td>Name</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>Phone No</td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>${classname}</td>
          </tr>
          <tr>
            <td>Course</td>
            <td>${course}</td>
          </tr>
          <tr>
            <td>School</td>
            <td>${school}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>${location}</td>
          </tr>
        </table>
      </div>
    </div>
    
  </body>
</html>`;
module.exports = mailToSir;
