#!/bin/bash

echo This script will help you install all the dependencies for this project

function isNodeInstalled() {
    clear
    echo "Checking if Node is installed ..."
    if command node --version &>/dev/null; then
        echo "Installing Node ..."
        curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	sudo apt-get install -y nodejs
        echo "Node has been installed."
        sleep 5
    else
        echo "Node has already been installed."
        sleep 5
    fi
}

 isNodeInstalled

sleep 5


function isMongodInstalled() {
    if [ ! -f /usr/bin/mongod ]; then
	echo "Installing MongoDB..."
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
	echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
	sudo apt-get -y update
	sudo apt-get install -y mongodb-org
    else
	echo "mongo db already installed."
   fi
}

 isMongodInstalled