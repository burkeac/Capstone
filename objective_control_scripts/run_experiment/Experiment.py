#!/bin/python3

import random
import time
import os

# oneway latency values in ms
latencyValues = [7, 10, 12, 15, 18, 20, 23, 25] 

# number of times exposed to a latency
numberOfTimestoRun = 2

def CreateUserFile():
    # Get particpant initals and create file
    Participant = input("Enter Participant's Initals: ")

    try:
        open(Participant+".txt", "x").close()
        usrfile = open(Participant+".txt", "a")
        usrfile.write("Participant: " + Participant + "\n")
        
        return usrfile
    except:
        # if file exists, overwrite and try again!
        print("Can not create file, user may already exist")
        return CreateUserFile()


def setLatency(latency: int):
    # os.system("")
    print("Set Latency " + str(latency))

def removeLatency():
    # os.system("")
    print("Latency Removed")

def runTrial(latency1: int, latency2: int):

    setLatency(latency1)

    time.sleep(2)
    input("Click Enter to set second latency state")

    setLatency(latency2)

    time.sleep(2)
    answer = input("Was state 1 or 2 more latent? ")

    if latency1 == 0:
        if answer.strip() == "2":
            print("correct")
            return True
        else: 
            print("wrong")
            return False
    else:
        if answer.strip() == "1":
            print("correct")
            return True
        else: 
            print("wrong")
            return False

usrFile = CreateUserFile()

# create list of total latencyies and randomize
i = 0
while i < numberOfTimestoRun-1:
    latencyValues += latencyValues
    i += 1

random.shuffle(latencyValues)

print(latencyValues)

trial = 0
results = []
for value in latencyValues:
    print("Trial Number: " + str(trial) + "\n")
    if random.randint(0,1):
        print("latency 1 = 0 \nlatency 2 = " + str(value))
        response = runTrial(0,value)
        results.append(response)
        usrFile.write("Trial: " + str(trial) + ",latency:" + str(value) + "," + str(response) + "\n")

        
    else:
        print("latency 1 = " + str(value) + " \nlatency 2 = 0")
        response = runTrial(value,0)
        results.append(response)
        usrFile.write("Trial: " + str(trial) + ",latency:" + str(value) + "," + str(response) + "\n")
    
    trial += 1