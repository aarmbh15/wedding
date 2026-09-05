<?php
error_reporting(0);
ini_set('display_errors', 0);
// Set response as JSON
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "contact_wedding"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Function to get client IP
function getClientIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) return $_SERVER['HTTP_CLIENT_IP'];
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) return $_SERVER['HTTP_X_FORWARDED_FOR'];
    else return $_SERVER['REMOTE_ADDR'];
}

// Function to get browser and OS
function getBrowserInfo() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $browser = "Unknown";
    $platform = "Unknown";

    if (preg_match('/windows|win32/i', $userAgent)) $platform = "Windows";
    elseif (preg_match('/macintosh|mac os x/i', $userAgent)) $platform = "Mac OS";
    elseif (preg_match('/linux/i', $userAgent)) $platform = "Linux";
    elseif (preg_match('/android/i', $userAgent)) $platform = "Android";
    elseif (preg_match('/iphone|ipad|ipod/i', $userAgent)) $platform = "iOS";

    if (preg_match('/MSIE|Trident/i', $userAgent)) $browser = "Internet Explorer";
    elseif (preg_match('/Edge/i', $userAgent)) $browser = "Microsoft Edge";
    elseif (preg_match('/Firefox/i', $userAgent)) $browser = "Mozilla Firefox";
    elseif (preg_match('/Chrome/i', $userAgent)) $browser = "Google Chrome";
    elseif (preg_match('/Safari/i', $userAgent)) $browser = "Apple Safari";
    elseif (preg_match('/Opera|OPR/i', $userAgent)) $browser = "Opera";

    return ["browser" => $browser, "platform" => $platform, "userAgent" => $userAgent];
}

// Get user details
$ipAddress = getClientIP();
$browserInfo = getBrowserInfo(); 
$browser = $browserInfo["browser"];
$platform = $browserInfo["platform"];
$userAgent = $browserInfo["userAgent"];

// Set timezone to IST (India)
$conn->query("SET time_zone = '+05:30'");

// Collect form data matching contact.jsx fields
$name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : "";
$email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : "";
$phone = isset($_POST["phone"]) ? strip_tags(trim($_POST["phone"])) : "";
$event_date = isset($_POST["event_date"]) ? strip_tags(trim($_POST["event_date"])) : "";
$venue = isset($_POST["venue"]) ? strip_tags(trim($_POST["venue"])) : "";
$event_details = isset($_POST["event_details"]) ? strip_tags(trim($_POST["event_details"])) : "";
$honeypot = isset($_POST["honeypot"]) ? trim($_POST["honeypot"]) : "";

// Honeypot check: If filled, it's a bot
if (!empty($honeypot)) {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $ist_now_bot = (new \DateTime('now', new \DateTimeZone('Asia/Kolkata')))->format('Y-m-d H:i:s');
    
    $log_sql = "INSERT INTO bot_attempts (ip_address, honeypot_value, attempted_at) VALUES (?, ?, ?)";
    $log_stmt = $conn->prepare($log_sql);
    if ($log_stmt !== false) {
        $log_stmt->bind_param("sss", $ip, $honeypot, $ist_now_bot);
        $log_stmt->execute();
        $log_stmt->close();
    }
    
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    $conn->close();
    exit;
}

// Basic server-side validation (matching "required" tags in JSX)
if (empty($name) || empty($email) || empty($phone)) {
    echo json_encode(["status" => "error", "message" => "Name, Email, and Phone Number are required."]);
    $conn->close();
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    $conn->close();
    exit;
}

// Insert into DB
$sql = "INSERT INTO contact_form (name, email, phone, event_date, venue, event_details) VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if ($stmt === false) {
    echo json_encode(["status" => "error", "message" => "Failed to prepare the SQL statement: " . $conn->error]);
    $conn->close();
    exit;
}

$stmt->bind_param("ssssss", $name, $email, $phone, $event_date, $venue, $event_details);

if ($stmt->execute()) {
    $stmt->close();

    // -------------------------------------------------------------
    // Push Data to Google Sheets via cURL
    // -------------------------------------------------------------
    $google_script_url = "https://script.google.com/macros/s/AKfycbweTjcaEthE5It9XTcIQJOqxs7TEz9TlUq6kmvHW9lb6vFfbNlokBfHSB9QTYpr7cV3/exec"; 

    $ch = curl_init($google_script_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        "name"          => $name,
        "email"         => $email,
        "phone"         => $phone,
        "event_date"    => $event_date,
        "venue"         => $venue,
        "event_details" => $event_details,
        "ip"            => $ipAddress,
        "browser"       => $browser,
        "os"            => $platform
    ]));
    // Execute Google Sheet request (silently in background)
    curl_exec($ch);
    curl_close($ch);
    // -------------------------------------------------------------

    // Send email
    $to = "aarmbh15@gmail.com";
    $subjectMail = "New Wedding Inquiry: $name";

    $email_body  = "Name: $name\r\n";
    $email_body .= "Email: $email\r\n";
    $email_body .= "Phone: $phone\r\n";
    $email_body .= "Event Date: $event_date\r\n";
    $email_body .= "Venue & City: $venue\r\n\r\n";
    $email_body .= "Event Details:\r\n$event_details\r\n\r\n";
    $email_body .= "--------------------------\r\n";
    $email_body .= "IP Address: $ipAddress\r\n";
    $email_body .= "Browser: $browser\r\n";
    $email_body .= "OS: $platform\r\n";

    $headers  = "From: no-reply@tiltshiftpictures.com\r\n"; 
    $headers .= "Reply-To: " . strip_tags($email) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mail($to, $subjectMail, $email_body, $headers);

    echo json_encode(["status" => "success", "message" => "Your message has been sent successfully!"]);
    $conn->close();
    exit;
} else {
    echo json_encode(["status" => "error", "message" => "Database insert failed: " . $stmt->error]);
    $stmt->close();
    $conn->close();
    exit;
}
?>