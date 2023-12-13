<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body style="font-family: 'Arial', sans-serif;">

<div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">

    <h2 style="color: #333;">Hello, {{ $user->name }}!</h2>

    <p style="color: #555; line-height: 1.6;">Your Need has been Viewed.</p>

    <p style="color: #555; line-height: 1.6;">Here's some additional information:</p>

    <ul>
        <li><strong>Username:</strong> {{ $user->username }}</li>
        <li><strong>Email:</strong> {{ $user->email }}</li>
        <!-- Add more dynamic data as needed -->
    </ul>

    <p style="color: #555; line-height: 1.6;">Feel free to contact us if you have any questions.</p>

    <p style="color: #777; font-size: 0.8em;">Best regards,<br>Your Company</p>

</div>

</body>
</html>
