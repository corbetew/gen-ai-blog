#!/bin/bash
HOSTNAME=$(echo $FIRESTORE_EMULATOR_HOST | cut -d: -f1)


echo "Waiting for Firestore to be ready at $HOSTNAME"
until ping -c1 $HOSTNAME &>/dev/null; do
    echo 'pinging firestore...'
    echo ping -c1 $HOSTNAME
    sleep 3
done

node /usr/src/app/scripts/dev/seedFirestore.js