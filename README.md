# Capstone
This code supports my undergraduate capstone project as part of my Motion Picture Science degree. 
The capstone focused on latency perception within cloud-based work environments.

## The capstone consists of two parts:
- Objective Tests
- Subjective Tests

These parts are described more heavily in the full writeup. 
For more info, you can [request a PDF](mailto:axb6044@rit.edu "request a PDF"). The file structure is described below:  

### Objective Test Bench
*/objective_control_scripts* contains a number of bash scripts that can be used to configure and modify the objective test-bench. In addition, a Python3 script "Experiment.py" controls the experiment itself. This program randomizes the order of trials and records results.  

The *sysConfig* and *setIP* scipts set the ip address of the device to 192.168.1.25, although this can easily be changed by modifying the scripts. In addition, the *sysConfig* and *setUpForwarding* scripts forward all TCP and UDP trafic on port 4172 to 192.168.1.100:4172.

*setLatency* sets the latency based on the arguments passed through the command line.   
example:  
`setLatency <one-way-latency time>
`setLatency 10ms`  
Note: This script first deletes the rule and then sets a new rule. If a rule is not already set, an error may show. This can be ignored.  

The *removeLatency* script removes the latency rule.

### Subjective Test (Ping Web-App)
*simpleWebServer.js* contains 
