import zbar
import cv2

# create a barcode scanner
scanner = zbar.Scanner()

# capture an image using the webcam
cap = cv2.VideoCapture(0)
_, frame = cap.read()

# scan the barcode
results = scanner.scan(frame)

# print the barcode data
for result in results:
    print(result.data.decode("utf-8"))

# release the capture and close the window
cap.release()
cv2.destroyAllWindows()
