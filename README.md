# Serial2Net



This file can be run in node.js to convert a serial stream to net stream and vice versa for a RfxTrx usb device from RFXCOM
Is is used on a raspberry pi 3 with debian os and node 4.8.3 to connect a serial usb device to a net stream.
<<<<<<< HEAD
the long existing Serial2Net app didnt work for me on a raspberry pi 3 
you have to install the node package serialport 


install serialport on Pi 3

	sudo npm install serialport --unsafe-perm --build-from-source

=======
the long existing Serial2Net app didnt work for me on a raspberry pi 3 . it depends on node serial 
https://github.com/EmergingTechnologyAdvisors/node-serialport 
npm install serialport
>>>>>>> origin/master

## changeLog

09-07-20127 

first admission to github
makes communication possible with Pi 3 with rfxtrx from RFXCOM with Athom Homey

16-02-2018

added support for ELDAt Easywave RX09 usb stick
makes communication possible with Pi 3 with MELDAt Easywave RX09 usb stick with Athom Homey

#Serial2NetEW

This file can be run in node.js  to convert a serial stream to net stream and vice versa for an ELDAt Easywave RX09 usb stick
Is is used on a raspberry pi 3 with debian os and node 4.8.3 to connect a serial usb device to a net stream.
the long existing Serial2Net app didnt work for me on a raspberry pi 3 
you have to install the node package serialport 
And change the cpx210x usbserial driver on Pi because the distributed driver doent include the Eldat Easywave Rx09 usbstick
instructions are found here
https://raspberrypi.stackexchange.com/questions/78908/eldat-easywave-usbserial-device-not-detected/79020#79020

install serialport on Pi 3

sudo npm install serialport --unsafe-perm --build-from-source




[![Paypal donate][pp-donate-image]][pp-donate-link]
[pp-donate-link]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=42UGL52J4KPZE
[pp-donate-image]: https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif


Copyright (c) 2018 Jilles Miedema

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help



