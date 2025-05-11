<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="dashboard-container">
        <h1>Welcome, {{ Auth::user()->name }}</h1>
        <h2>Login History</h2>
        <table>
            <thead>
                <tr>
                    <th>IP Address</th>
                    <th>Location</th>
                    <th>Logged In At</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($loginHistories as $history)
                    <tr>
                        <td>{{ $history->ip_address }}</td>
                        <td>{{ $history->location }}</td>
                        <td>{{ $history->logged_in_at }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit">Logout</button>
        </form>
    </div>
</body>
</html>
