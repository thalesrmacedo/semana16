SET Nome Dario
RENAME Nome Nome:1
SET Nome:2 Toto
RENAME Nome:1 Nome:2
GET Nome:1
EXISTS Nome:1
EXISTS Nome:88
GET Nome:2
SET Nome:3 Toto
RENAMENX Nome:3 Nome:2
GET Nome:3
GET Nome:2
RENAMENX Nome:3 Nome:1
GET Nome:1
EXISTS Nome:3
MSET Nome:3 "Maud" Nome:4 "Xavier"
KEYS *
KEYS Nome*
MGET Nome:1 Nome:2 Nome:3
HSET Nome:7 name "Titi" city "Paris" age "23" Activity "Redis"
HGET Nome:7 name
HGET Nome:7 city
HGET Nome:7 age
HGET Nome:7 Activity

https://onecompiler.com/redis/42h8cpfj7
