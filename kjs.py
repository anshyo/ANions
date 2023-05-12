import mysql.connector as m
d = m.connect(host='localhost' , user = 'root' , password = "password")

if d.is_connected():
    print('yep')