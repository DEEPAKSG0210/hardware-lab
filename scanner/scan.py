import cv2
from pyzbar.pyzbar import decode
import time
#remove warnings
import warnings
warnings.filterwarnings("ignore")

#capture video from webcam
cap = cv2.VideoCapture(0,cv2.CAP_DSHOW)
cap.set(3, 640)
cap.set(4, 480)
used_codes = []

camera = True
result=False
while camera == True:
    success, frame = cap.read()

    for code in decode(frame):
        if code.data.decode('utf-8') not in used_codes:
            print('Approved. You can enter!')
            print(code.data.decode('utf-8'))
            used_codes.append(code.data.decode('utf-8'))
            result=True
            break
        elif code.data.decode('utf-8') in used_codes:
            print('Sorry, this code has been already used!')
        else:
            pass
    if result==True:
        break
    cv2.imshow('-Testing-code-scan', frame)
    cv2.waitKey(1)