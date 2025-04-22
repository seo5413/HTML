for row in range(1,6):
    print('*'*row)


for i in range(1,6):
    print(" "*(5 - i) + "*" * i + " "*(5-i))

for i in range(1, 6):
    print(" " * (6 - i) + "*" * (2 * i - 1))

for i in range(1, 10):
    if i <= 5:
        print(" " * (6 - i) + "*" * (2 * i - 1))
    else:
        j = 10 - i 
        print(" " * (6 - j) + "*" * (2 * j - 1))

    