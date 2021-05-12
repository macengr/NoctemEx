CREATE TABLE IF NOT EXISTS sleepdata( id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                             current_sleepiness TEXT, reasons TEXT, amount_bothered TEXT);


INSERT
or
IGNORE INTO sleepdata(id, current_sleepiness, reasons, amount_bothered)
VALUES (1,
        'Alert',
        'Racing thoughts',
        'Almost never');


INSERT
or
IGNORE INTO sleepdata(id, current_sleepiness, reasons, amount_bothered)
VALUES (2,
        'Alert',
        'Racing thoughts',
        'Almost never');


INSERT
or
IGNORE INTO sleepdata(id, current_sleepiness, reasons, amount_bothered)
VALUES (3,
        'Alert',
        'Racing thoughts',
        'Almost never');


INSERT
or
IGNORE INTO sleepdata(id, current_sleepiness, reasons, amount_bothered)
VALUES (4,
        'Alert',
        'Racing thoughts',
        'Almost never');

