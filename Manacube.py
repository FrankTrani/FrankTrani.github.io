import psycopg2

connection = None  
total = 0  # Initialize the total

try:
    connection = psycopg2.connect(
        user="Schizzle13",
        password="Pitstop#1",
        host="127.0.0.1",
        port="5432",
        database="Manacube"
    )

    cursor = connection.cursor()
    cursor.execute("SELECT name, price, COALESCE(count, 1) FROM items")
    records = cursor.fetchall()

    for record in records:
        name, price, count = record
        item_total = price * count

        print(f"{name}: {item_total}")
        total += item_total

except Exception as error:
    print("Error while connecting to PostgreSQL", error)

finally:
    if connection:
        print("Total:", total)  # Corrected this line to print the total
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")
