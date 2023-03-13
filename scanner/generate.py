import random
from barcode import EAN8
  
from barcode.writer import ImageWriter
from collections import Counter

c = Counter()
i = 0
while  i < 88 :
    number = random.randint(100000000, 999999999)
    if c[number] :
        continue
    else :
        c[number] = 1
    my_code = EAN8(str(number), writer=ImageWriter())
    filename = f"images\\new_code{i}"
    my_code.save(filename)
    i += 1
