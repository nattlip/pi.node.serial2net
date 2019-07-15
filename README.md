# Serial2Net



This file can be run in node.js to convert a serial stream to net stream and vice versa for a RfxTrx usb device from RFXCOM 
Is is used on a raspberry pi 3 with debian os and node 4.8.3 to connect a serial usb device to a net stream. 
the long existing Serial2Net app didnt work for me 



How to


This file can be run in node.js to convert a serial stream to net stream and vice versa for a RfxTrx usb device from RFXCOM 
Is is used on a raspberry pi 3 with raspian os and node >= 4.8.3 to connect a serial usb device to a net stream. 
the long existing Serial2Net app didnt work for me 


this usercase is using raspian os on a rspberry pi 3 thats the way i do it

download raspian os for the pi 3 follow the instructions there

https://www.raspberrypi.org/downloads/

make your pi headless ie no keyboard or screen connected using it via a windows or mac computer terminal

https://www.raspberrypi.org/documentation/configuration/wireless/headless.md

ie add after putting the os image on the micro sd card  file named ssh in the boot directory

download putty on your windows computer if you have a mac find a ssh client
https://www.putty.org/

find the ip of your pi with an ip finder like or via your router

https://www.advanced-ip-scanner.com/nl/

log in with The default username and password for the Raspberry Pi :

username: pi
password: raspberry

check if node is installed, in nwer versions of the raspian os it is 

type node -v if a version is returned node is installed

otherwise install node with the following commands


curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash 
apt-get install nodejs

https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp



install serialport on Pi 3 

	sudo npm install serialport --unsafe-perm --build-from-source 


make a dir like share 

cmd   : sudo mkdir share

cmd cd share

put the file serial2net.js from the github repository there


to set the file serial2net.js on your pi from a windows computer instraal samba on your pi


sudo apt-get install samba samba-common-bin

 sudo nano  /etc/samba/smb.conf

 puton end of file 


 [PiShare]
 comment=Raspi Share
 path=/home/pi
 browseable=Yes
 writeable=Yes
 only guest=No
 create mask=0740
 directory mask=0750
 public=no

 make password samba

 sudo smbpasswd -a pi

 restart samba

 Shell
sudo /etc/init.d/samba restart


make a network drive on your windows computer   //nameofyourpi/


make command node serial2net a service  ie itstrarts at startup pi 


cd  /lib/systemd/system

sudo nano startnode

put in the file 

[Unit]
Description=serial2netEW.js - serial to net server
Documentation=https://example.com
After=network.target

[Service]
Type=simple
User=pi
Group=pi
ExecStart=/usr/bin/node /home/pi/share/serial2net.js
RestartSec=10
Restart=on-failure

[Install]
WantedBy=multi-user.target

then save it .

restart pi and it should work



## changeLog

09-07-20127  

first admission to github 
makes communication possible with Pi 3 with rfxtrx from RFXCOM with Athom Homey 

16-02-2018

added support for ELDAt Easywave RX09 usb stick 
makes communication possible with Pi 3 with ELDAT Easywave RX09 usb stick with Athom Homey 

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



