#!/bin/bash
initnum=701
finalnum=710

while [ $initnum -lt $finalnum ]
do
wget "http://www.newtechwood.com/images/d_big$initnum.jpg"
initnum=$[$initnum+1]
done
