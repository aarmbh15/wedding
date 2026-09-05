CREATE TABLE contact_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    event_date DATE,
    venue VARCHAR(255),
    event_details TEXT,
    submission_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bot_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45),
    honeypot_value TEXT,
    attempted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);